import { findSheetDataById } from '@/src/server/service/googleSheet/googleSheetService';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';
import { ExpertDto } from '@/src/server/dtos/expert.dto';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const expertId = id;

  const { headerRow: expertHeaderRow, dataRows: expertDataRows } =
    await findSheetDataById(EXPERT_SHEET_NAME, EXPERT_SHEET_RANGE, expertId);

  if (!expertHeaderRow || !expertDataRows) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  try {
    const parsedExpert = ExpertMapper.fromSheetRow(
      expertHeaderRow,
      expertDataRows,
    );
    const expertDto = new ExpertDto(parsedExpert);

    return createSuccessApiResponse(
      200,
      expertDto,
      API_MESSAGES['READ_SUCCESS'],
    );
  } catch (error) {
    console.error(`Parsing error for expert with id ${expertId}:`, error);
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.parseError'].statusCode,
      'googleSheet.parseError',
    );
  }
}
