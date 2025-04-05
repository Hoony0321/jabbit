import { FINANCIAL_DIAGNOSIS_SHEET_HEADERS } from '@/src/server/constants/SHEET_INFOS';
import { FinancialDiagnosis } from '@/src/server/domains/financialDiagnosis';

export class FinancialDiagnosisMapper {
  static getColumnIndexes(headerRow: string[]) {
    return FINANCIAL_DIAGNOSIS_SHEET_HEADERS.reduce(
      (acc, header) => {
        const index = headerRow.indexOf(header);
        if (index === -1) {
          throw new Error(`Sheet에 필요한 컬럼 "${header}"이(가) 없습니다.`);
        }
        acc[header] = index;
        return acc;
      },
      {} as Record<(typeof FINANCIAL_DIAGNOSIS_SHEET_HEADERS)[number], number>,
    );
  }

  static fromSheetRow(
    headerRow: string[],
    dataRow: string[],
  ): FinancialDiagnosis {
    const columnIndexes = FinancialDiagnosisMapper.getColumnIndexes(headerRow);
    return {
      id: dataRow[columnIndexes.id],
      userId: dataRow[columnIndexes.userId],
      birthYear: parseInt(dataRow[columnIndexes.birthYear]),
      mainInvestmentStrategies: JSON.parse(
        dataRow[columnIndexes.mainInvestmentStrategies],
      ),
      mainFinancialIssues: JSON.parse(
        dataRow[columnIndexes.mainFinancialIssues],
      ),
      financialGoal: JSON.parse(dataRow[columnIndexes.financialGoal]),
      financialRatios: JSON.parse(dataRow[columnIndexes.financialRatios]),
      isMarried: dataRow[columnIndexes.isMarried] === 'TRUE',
      hasChildren: dataRow[columnIndexes.hasChildren] === 'TRUE',
      groupComparison: JSON.parse(dataRow[columnIndexes.groupComparison]),
    };
  }
}
