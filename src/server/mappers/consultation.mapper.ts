import {
  Consultation,
  Mission,
  ProfitInfo,
  Profits,
  Proposal,
} from '@/src/server/domains/consultation';
import { CONSULTATION_SHEET_HEADERS } from '../constants/SHEET_INFOS';

export class ConsultationMapper {
  static getColumnIndexes(headerRow: any[]) {
    return CONSULTATION_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof CONSULTATION_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(headerRow: string[], dataRow: string[]): Consultation {
    const columnIndexes = ConsultationMapper.getColumnIndexes(headerRow);
    return {
      id: dataRow[columnIndexes.id],
      userId: dataRow[columnIndexes.userId],
      expertId: dataRow[columnIndexes.expertId],
      expertName: dataRow[columnIndexes.expertName],
      title: dataRow[columnIndexes.title],
      field: dataRow[columnIndexes.field],
      mainProposals: JSON.parse(
        dataRow[columnIndexes.mainProposals],
      ) as Proposal[],
      additionalProposals: JSON.parse(
        dataRow[columnIndexes.additionalProposals],
      ) as Proposal[],
      status: dataRow[columnIndexes.status],
      createdAt: dataRow[columnIndexes.createdAt],
      profits: JSON.parse(dataRow[columnIndexes.profits]) as Profits,
      profitInfo: JSON.parse(dataRow[columnIndexes.profitInfo]) as ProfitInfo,
      weeklyMissions: JSON.parse(
        dataRow[columnIndexes.weeklyMissions],
      ) as Mission[],
    };
  }
}
