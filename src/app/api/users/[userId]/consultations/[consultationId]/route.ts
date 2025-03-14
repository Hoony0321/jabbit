import {
  CONSULTATION_SHEET_NAME,
  CONSULTATION_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { findSheetDataById } from '@/src/server/service/googleSheet/googleSheetService';
import {
  handlePreflight,
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import { ConsultationMapper } from '@/src/server/mappers/consultation.mapper';
import { ConsultationDto } from '@/src/server/dtos/consultation.dto';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string; consultationId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { userId, consultationId } = await params;

  const { headerRow, dataRows } = await findSheetDataById(
    CONSULTATION_SHEET_NAME,
    CONSULTATION_SHEET_RANGE,
    consultationId,
  );

  if (!headerRow || !dataRows) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const consultation = ConsultationMapper.fromSheetRow(headerRow, dataRows);

  if (consultation.userId !== userId) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.expertNotFound'].statusCode,
      'googleSheet.expertNotFound',
    );
  }

  const consultationDto = new ConsultationDto(consultation);
  return createSuccessApiResponse(
    200,
    consultationDto,
    API_MESSAGES['READ_SUCCESS'],
  );
}
