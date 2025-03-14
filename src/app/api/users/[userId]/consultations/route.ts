import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
import { CONSULTATION_SHEET_RANGE } from '@/src/server/constants/SHEET_INFOS';
import { CONSULTATION_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import { readSheetData } from '@/src/server/service/googleSheet/googleSheetService';
import { handlePreflight } from '@/src/server/utils/apiResponseUtils';
import { ConsultationMapper } from '@/src/server/mappers/consultation.mapper';
import { createSuccessApiResponse } from '@/src/server/utils/apiResponseUtils';
import { ConsultationSimpleDto } from '@/src/server/dtos/consultation.simple.dto';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { userId } = await params;

  const { headerRow, dataRows } = await readSheetData(
    CONSULTATION_SHEET_NAME,
    CONSULTATION_SHEET_RANGE,
  );

  if (!headerRow || !dataRows) {
    return createSuccessApiResponse(200, [], API_MESSAGES['READ_SUCCESS']);
  }

  const userConsultationSimpleDtos: ConsultationSimpleDto[] = [];
  dataRows.map((dataRow) => {
    const consultation = ConsultationMapper.fromSheetRow(headerRow, dataRow);
    if (consultation.userId === userId) {
      userConsultationSimpleDtos.push(new ConsultationSimpleDto(consultation));
    }
  });

  return createSuccessApiResponse(
    200,
    userConsultationSimpleDtos,
    API_MESSAGES['READ_SUCCESS'],
  );
}
