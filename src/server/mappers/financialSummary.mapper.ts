import { FINANCIAL_SUMMARY_SHEET_HEADERS } from '../constants/SHEET_INFOS';
import { FinancialSummary } from '../domains/financialSummary';

export class FinancialSummaryMapper {
  static getColumnIndexes(headerRow: string[]) {
    return FINANCIAL_SUMMARY_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof FINANCIAL_SUMMARY_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(
    headerRow: string[],
    dataRow: string[],
  ): FinancialSummary {
    const columnIndexes = FinancialSummaryMapper.getColumnIndexes(headerRow);
    return {
      id: dataRow[columnIndexes.id],
      userId: dataRow[columnIndexes.userId],
      income: parseFloat(dataRow[columnIndexes.income]),
      investment: parseFloat(dataRow[columnIndexes.investment]),
      savings: parseFloat(dataRow[columnIndexes.savings]),
      expenses: parseFloat(dataRow[columnIndexes.expenses]),
      totalAssets: parseFloat(dataRow[columnIndexes.totalAssets]),
      netWorth: parseFloat(dataRow[columnIndexes.netWorth]),
      debt: parseFloat(dataRow[columnIndexes.debt]),
    };
  }
}
