import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
import { USER_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import { USER_SHEET_RANGE } from '@/src/server/constants/SHEET_INFOS';
import { UserMapper } from '@/src/server/mappers/user.mapper';
import { findSheetDataById } from '@/src/server/service/googleSheet/googleSheetService';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { userId } = await params;

  const { headerRow, dataRows } = await findSheetDataById(
    USER_SHEET_NAME,
    USER_SHEET_RANGE,
    userId,
  );
  if (!headerRow || !dataRows) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const userDto = UserMapper.fromSheetRow(headerRow, dataRows);
  return createSuccessApiResponse(200, userDto, API_MESSAGES['READ_SUCCESS']);
}
