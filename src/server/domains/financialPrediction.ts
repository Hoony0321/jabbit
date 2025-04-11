export interface FutureFinancialPrediction {
  income: {
    current: number;
    future: number;
  };
  asset: {
    current: number;
    future: number;
  };
  debt: {
    current: number;
    future: number;
  };
}

export interface GoalAchievementPrediction {
  title: string;
  targetAmount: number;
  targetDate: string; // "YYYY-MM-DD"
  estimatedAchievementDate: string; // "YYYY-MM-DD"
}

export interface ConsultingSuggestion {
  originalDuration: number;
  estimatedReducedDuration: number;
  consultingPoints: string[];
}

export interface FinancialPrediction {
  id: string;
  userId: string;
  futureFinancialPrediction: FutureFinancialPrediction;
  goalAchievementPredictions: GoalAchievementPrediction[];
  consultingSuggestion: ConsultingSuggestion;
}
