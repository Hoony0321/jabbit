import { readSheetData } from '@/src/server/service/googleSheet/googleSheetService';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';
import { ExpertSimpleDto } from '@/src/server/dtos/expert.simple.dto';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { headerRow, dataRows } = await readSheetData(
    EXPERT_SHEET_NAME,
    EXPERT_SHEET_RANGE,
  );
  if (!headerRow || !dataRows) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const expertSimpleDtos: ExpertSimpleDto[] = [];

  for (const expert of dataRows) {
    try {
      const parsedExpert = ExpertMapper.fromSheetRow(headerRow, expert);
      expertSimpleDtos.push(new ExpertSimpleDto(parsedExpert));
    } catch (error) {
      console.error(`Parsing error on expert id ${expert[0]}:`, error);
    }
  }

  return createSuccessApiResponse(
    200,
    expertSimpleDtos,
    API_MESSAGES['READ_SUCCESS'],
  );
}
