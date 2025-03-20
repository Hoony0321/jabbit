import { USER_SHEET_HEADERS } from '../constants/SHEET_INFOS';
import { User } from '../domains/user';

export class UserMapper {
  static getColumnIndexes(headerRow: any[]) {
    return USER_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof USER_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(headerRow: string[], dataRow: string[]): User {
    const columnIndexes = UserMapper.getColumnIndexes(headerRow);
    return {
      id: dataRow[columnIndexes.id],
      provider: dataRow[columnIndexes.provider],
      email: dataRow[columnIndexes.email],
      createdAt: new Date(dataRow[columnIndexes.createdAt]),
    };
  }
}
