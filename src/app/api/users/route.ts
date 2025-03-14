import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
import { USER_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import { USER_SHEET_RANGE } from '@/src/server/constants/SHEET_INFOS';
import { UserDto } from '@/src/server/dtos/user.dto';
import { UserMapper } from '@/src/server/mappers/user.mapper';
import {
  appendSheetData,
  readSheetData,
} from '@/src/server/service/googleSheet/googleSheetService';
import {
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { headerRow, dataRows } = await readSheetData(
    USER_SHEET_NAME,
    USER_SHEET_RANGE,
  );

  if (!headerRow || !dataRows) {
    return createSuccessApiResponse(200, [], API_MESSAGES['READ_SUCCESS']);
  }

  const userDtos: UserDto[] = [];
  for (const user of dataRows) {
    const userDto = UserMapper.fromSheetRow(headerRow, user);
    userDtos.push(userDto);
  }

  return createSuccessApiResponse(200, userDtos, API_MESSAGES['READ_SUCCESS']);
}

export async function POST(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { id, provider, createdAt } = await req.json();
  await appendSheetData(USER_SHEET_NAME, 'A:A', [[id, provider, createdAt]]);

  return createSuccessApiResponse(200, [], API_MESSAGES['CREATE_SUCCESS']);
}
