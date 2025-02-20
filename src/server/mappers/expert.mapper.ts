import { Expert, Activity, Experience } from '@/src/server/domains/expert';
import { EXPERT_SHEET_HEADERS } from '@/src/server/constants/SHEET_INFOS';

export class ExpertMapper {
  static getColumnIndexes(headerRow: any[]) {
    return EXPERT_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof EXPERT_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(headerRow: string[], dataRow: string[]): Expert {
    const columnIndexes = ExpertMapper.getColumnIndexes(headerRow);

    return {
      id: dataRow[columnIndexes.id],
      name: dataRow[columnIndexes.name],
      certificates: JSON.parse(dataRow[columnIndexes.certificates]) as string[],
      specialties: JSON.parse(dataRow[columnIndexes.specialties]) as string[],
      experiences: JSON.parse(
        dataRow[columnIndexes.experiences],
      ) as Experience[],
      activities: JSON.parse(dataRow[columnIndexes.activities]) as Activity[],
      isVerified: dataRow[columnIndexes.isVerified] === 'TRUE',
      profileImageUrl: dataRow[columnIndexes.profileImageUrl] || undefined,
    };
  }
}
