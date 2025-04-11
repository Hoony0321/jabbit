import {
  FinancialPrediction,
  FutureFinancialPrediction,
  GoalAchievementPrediction,
  ConsultingSuggestion,
} from '../domains/financialPrediction';

export class FinancialPredictionDto {
  id: string;
  userId: string;
  futureFinancialPrediction: FutureFinancialPrediction;
  goalAchievementPredictions: GoalAchievementPrediction[];
  consultingSuggestion: ConsultingSuggestion;

  constructor(financialDiagnosis: FinancialPrediction) {
    this.id = financialDiagnosis.id;
    this.userId = financialDiagnosis.userId;
    this.futureFinancialPrediction =
      financialDiagnosis.futureFinancialPrediction;
    this.goalAchievementPredictions =
      financialDiagnosis.goalAchievementPredictions;
    this.consultingSuggestion = financialDiagnosis.consultingSuggestion;
  }
}
