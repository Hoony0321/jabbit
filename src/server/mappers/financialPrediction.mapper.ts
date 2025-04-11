import { FINANCIAL_PREDICTION_SHEET_HEADERS } from '@/src/server/constants/SHEET_INFOS';
import { FinancialPrediction } from '../domains/financialPrediction';

export class FinancialPredictionMapper {
  static getColumnIndexes(headerRow: string[]) {
    return FINANCIAL_PREDICTION_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof FINANCIAL_PREDICTION_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(
    headerRow: string[],
    dataRow: string[],
  ): FinancialPrediction {
    const columnIndexes = FinancialPredictionMapper.getColumnIndexes(headerRow);
    return {
      id: dataRow[columnIndexes.id],
      userId: dataRow[columnIndexes.userId],
      futureFinancialPrediction: JSON.parse(
        dataRow[columnIndexes.futureFinancialPrediction],
      ),
      goalAchievementPredictions: JSON.parse(
        dataRow[columnIndexes.goalAchievementPredictions],
      ),
      consultingSuggestion: JSON.parse(
        dataRow[columnIndexes.consultingSuggestion],
      ),
    };
  }
}
