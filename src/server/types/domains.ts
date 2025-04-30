import { Tables } from './supabase';

// User domain type
export type User = Tables<{ schema: 'public' }, 'users'>;

// Expert domain type
export type ExpertExperience = {
  status: '현' | '전';
  description: string;
};

export type ExpertActivity = {
  type: '교육/강연' | '보도/방송';
  year: string;
  description: string;
  url?: string;
};

export type Expert = Omit<
  Tables<{ schema: 'public' }, 'experts'>,
  'experiences' | 'activities'
> & {
  experiences: ExpertExperience[];
  activities: ExpertActivity[];
};

// ConsultingProduct domain type
export type ConsultingProductPrice = {
  name: string;
  price: number;
};

export type ConsultingProduct = Omit<
  Tables<{ schema: 'public' }, 'consulting_products'>,
  'prices'
> & {
  prices: ConsultingProductPrice[];
};

export type ConsultingProductWithExpert = ConsultingProduct & {
  experts: Expert;
};

export type ConsultingHistoryMainProposal = {
  title: string;
  description: string;
};

export type ConsultingHistoryAdditionalProposal = {
  title: string;
  description: string;
};

// ConsultingHistory domain type
export type ConsultingHistoryProfits = {
  today: number;
  weekly: number;
  monthly: number;
  yearly: number;
};

export type ConsultingHistoryProfitInfo = {
  title: string;
  contents: string[];
};

export type ConsultingHistoryWeeklyMission = {
  title: string;
  contents: string[];
  methods: string[];
};

export type UserConsultingHistory = Omit<
  Tables<{ schema: 'public' }, 'user_consulting_histories'>,
  | 'main_proposals'
  | 'additional_proposals'
  | 'profits'
  | 'profit_info'
  | 'weekly_missions'
> & {
  main_proposals: ConsultingHistoryMainProposal[];
  additional_proposals: ConsultingHistoryAdditionalProposal[];
  profits: ConsultingHistoryProfits;
  profit_info: ConsultingHistoryProfitInfo;
  weekly_missions: ConsultingHistoryWeeklyMission[];
};

export type ConsultingHistoryWithProductAndExpert = UserConsultingHistory & {
  consulting_products: ConsultingProductWithExpert;
};

// UserFinancialInfo domain type
export type UserFinancialInfo = Tables<
  { schema: 'public' },
  'user_financial_info'
>;

// UserFinancialDiagnosis domain type
export type FinancialDiagnosisFinancialGoal = {
  goal: string;
  advices: string[];
  recommendedGoals: string[];
};

export type UserFinancialDiagnosis = Omit<
  Tables<{ schema: 'public' }, 'user_financial_diagnosis'>,
  'financial_goal'
> & {
  financial_goal: FinancialDiagnosisFinancialGoal;
};

// UserFinancialPrediction domain type
export type FinancialPredictionFutureFinancialPrediction = {
  income: {
    future: number;
    current: number;
  };
  asset: {
    future: number;
    current: number;
  };
  debt: {
    future: number;
    current: number;
  };
};

export type FinancialPredictionGoalAchievementPrediction = {
  title: string;
  targetDate: string;
  targetAmount: number;
  estimatedAchievementDate: string;
};

export type FinancialPredictionConsultingSuggestion = {
  consultingPoints: string[];
  originalDuration: number;
  estimatedReducedDuration: number;
};

export type UserFinancialPrediction = Omit<
  Tables<{ schema: 'public' }, 'user_financial_prediction'>,
  | 'future_financial_prediction'
  | 'goal_achievement_prediction'
  | 'consulting_suggestion'
> & {
  future_financial_prediction: FinancialPredictionFutureFinancialPrediction;
  goal_achievement_predictions: FinancialPredictionGoalAchievementPrediction[];
  consulting_suggestion: FinancialPredictionConsultingSuggestion;
};

// UserFinancialAnalysis domain type
export type UserFinancialAnalysis = User & {
  user_financial_info: UserFinancialInfo | null;
  user_financial_diagnosis: UserFinancialDiagnosis | null;
  user_financial_prediction: UserFinancialPrediction | null;
};

// UserPersonalInfo domain type
export type UserPersonalInfo = Tables<
  { schema: 'public' },
  'user_personal_info'
>;

// UserFinancialGoal domain type
export type UserFinancialGoal = Tables<
  { schema: 'public' },
  'user_financial_goal'
>;

// UserFinancialConcern domain type
export type UserFinancialConcern = Tables<
  { schema: 'public' },
  'user_financial_concern'
>;

// UserCashflows domain type
export type UserCashflows = Tables<{ schema: 'public' }, 'user_cashflows'>;

// UserExpense domain type
export type UserExpense = Tables<{ schema: 'public' }, 'user_expense'>;

// UserDebt domain type
export type UserDebt = Tables<{ schema: 'public' }, 'user_debt'>;

// UserAsset domain type
export type UserAsset = Tables<{ schema: 'public' }, 'user_asset'>;

// UserAllInfo domain type
export type UserAllInfo = {
  user: User;
  personal_info: Omit<UserPersonalInfo, 'user_id'>;
  financial_goals: Omit<UserFinancialGoal, 'user_id'>[];
  financial_concern: Omit<UserFinancialConcern, 'user_id'>[];
  cashflow: Omit<UserCashflows, 'user_id'>[];
  expenses: Omit<UserExpense, 'user_id'>[];
  debts: Omit<UserDebt, 'user_id'>[];
  assets: Omit<UserAsset, 'user_id'>[];
};
