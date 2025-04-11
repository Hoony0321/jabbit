import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
import {
  FINANCIAL_DIAGNOSIS_SHEET_RANGE,
  FINANCIAL_DIAGNOSIS_SHEET_NAME,
  FINANCIAL_SUMMARY_SHEET_NAME,
  FINANCIAL_SUMMARY_SHEET_RANGE,
  FINANCIAL_PREDICTION_SHEET_RANGE,
  FINANCIAL_PREDICTION_SHEET_NAME,
} from '@/src/server/constants/SHEET_INFOS';
import { readSheetData } from '@/src/server/service/googleSheet/googleSheetService';
import {
  createErrorApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import { createSuccessApiResponse } from '@/src/server/utils/apiResponseUtils';
import { FinancialSummaryMapper } from '@/src/server/mappers/financialSummary.mapper';
import { FinancialSummaryDto } from '@/src/server/dtos/financialSummary.dto';
import { FinancialDiagnosisMapper } from '@/src/server/mappers/financialDiagnosis.mapper';
import { FinancialDiagnosisDto } from '@/src/server/dtos/financialDiagnosis.dto';
import { FinancialPredictionMapper } from '@/src/server/mappers/financialPrediction.mapper';
import { FinancialPredictionDto } from '@/src/server/dtos/financialPrediction.dto';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { userId } = await params;

  const {
    headerRow: financialSummaryHeaderRow,
    dataRows: financialSummaryDataRows,
  } = await readSheetData(
    FINANCIAL_SUMMARY_SHEET_NAME,
    FINANCIAL_SUMMARY_SHEET_RANGE,
  );

  const {
    headerRow: financialDiagnosisHeaderRow,
    dataRows: financialDiagnosisDataRows,
  } = await readSheetData(
    FINANCIAL_DIAGNOSIS_SHEET_NAME,
    FINANCIAL_DIAGNOSIS_SHEET_RANGE,
  );

  const {
    headerRow: financialPredictionHeaderRow,
    dataRows: financialPredictionDataRows,
  } = await readSheetData(
    FINANCIAL_PREDICTION_SHEET_NAME,
    FINANCIAL_PREDICTION_SHEET_RANGE,
  );

  if (
    !financialSummaryHeaderRow ||
    !financialSummaryDataRows ||
    !financialDiagnosisHeaderRow ||
    !financialDiagnosisDataRows ||
    !financialPredictionHeaderRow ||
    !financialPredictionDataRows
  ) {
    return createSuccessApiResponse(200, [], API_MESSAGES['READ_SUCCESS']);
  }

  let userFinancialSummaryDto: FinancialSummaryDto | null = null;
  financialSummaryDataRows.map((dataRow) => {
    const financialSummary = FinancialSummaryMapper.fromSheetRow(
      financialSummaryHeaderRow,
      dataRow,
    );
    if (financialSummary.userId === userId) {
      userFinancialSummaryDto = new FinancialSummaryDto(financialSummary);
    }
  });

  let userFinancialDiagnosisDto: FinancialDiagnosisDto | null = null;
  financialDiagnosisDataRows.map((dataRow) => {
    const financialDiagnosis = FinancialDiagnosisMapper.fromSheetRow(
      financialDiagnosisHeaderRow,
      dataRow,
    );
    if (financialDiagnosis.userId === userId) {
      userFinancialDiagnosisDto = new FinancialDiagnosisDto(financialDiagnosis);
    }
  });

  let userFinancialPredictionDto: FinancialPredictionDto | null = null;
  financialPredictionDataRows.map((dataRow) => {
    const financialPrediction = FinancialPredictionMapper.fromSheetRow(
      financialPredictionHeaderRow,
      dataRow,
    );
    if (financialPrediction.userId === userId) {
      userFinancialPredictionDto = new FinancialPredictionDto(
        financialPrediction,
      );
    }
  });

  if (
    !userFinancialSummaryDto ||
    !userFinancialDiagnosisDto ||
    !userFinancialPredictionDto
  ) {
    return createErrorApiResponse(404, 'notFound');
  }

  return createSuccessApiResponse(
    200,
    {
      financialSummary: userFinancialSummaryDto,
      financialDiagnosis: userFinancialDiagnosisDto,
      financialPrediction: userFinancialPredictionDto,
    },
    API_MESSAGES['READ_SUCCESS'],
  );
}
