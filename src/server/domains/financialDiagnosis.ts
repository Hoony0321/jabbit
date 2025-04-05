export interface FinancialDiagnosis_FinancialGoal {
  goal: string;
  recommendedGoals: string[];
  advice: string[];
}

export interface FinancialDiagnosis_FinancialRatios {
  expense: number;
  insurance: number;
  saving: number;
  investment: number;
  debtRepayment: number;
  retirement: number;
}

type GroupComparisonItem = {
  category: string;
  user: number;
  average: number;
};

export type FinancialDiagnosis_GroupComparison = GroupComparisonItem[];

export interface FinancialDiagnosis {
  id: string;
  userId: string;
  birthYear: number;
  mainInvestmentStrategies: string[];
  mainFinancialIssues: string[];
  financialGoal: FinancialDiagnosis_FinancialGoal;
  financialRatios: FinancialDiagnosis_FinancialRatios;
  isMarried: boolean;
  hasChildren: boolean;
  groupComparison: FinancialDiagnosis_GroupComparison;
}
