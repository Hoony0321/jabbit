export const EXPERT_SHEET_NAME = 'expert';
export const EXPERT_SHEET_RANGE = 'A1:I';
export const EXPERT_SHEET_HEADERS = [
  'id',
  'name',
  'certificates',
  'specialties',
  'experiences',
  'activities',
  'isVerified',
  'profileImageUrl',
  'yearsOfExperience',
];

export const PRODUCT_SHEET_NAME = 'product';
export const PRODUCT_SHEET_RANGE = 'A1:I';
export const PRODUCT_SHEET_HEADERS = [
  'id',
  'expertId',
  'name',
  'priceInfos',
  'detailFields',
  'targetDescription',
  'productDescription',
  'googleFormUrl',
  'category',
];

export const USER_SHEET_NAME = 'user';
export const USER_SHEET_RANGE = 'A1:D';
export const USER_SHEET_HEADERS = ['id', 'provider', 'email', 'createdAt'];

export const CONSULTATION_SHEET_NAME = 'consultation';
export const CONSULTATION_SHEET_RANGE = 'A1:M';
export const CONSULTATION_SHEET_HEADERS = [
  'id',
  'userId',
  'expertId',
  'expertName',
  'title',
  'field',
  'mainProposals',
  'additionalProposals',
  'status',
  'createdAt',
  'profits',
  'profitInfo',
  'weeklyMissions',
];

export const FINANCIAL_SUMMARY_SHEET_NAME = 'financialSummary';
export const FINANCIAL_SUMMARY_SHEET_RANGE = 'A1:I';
export const FINANCIAL_SUMMARY_SHEET_HEADERS = [
  'id',
  'userId',
  'income',
  'investment',
  'savings',
  'expenses',
  'totalAssets',
  'netWorth',
  'debt',
];

export const FINANCIAL_DIAGNOSIS_SHEET_NAME = 'financialDiagnosis';
export const FINANCIAL_DIAGNOSIS_SHEET_RANGE = 'A1:J';
export const FINANCIAL_DIAGNOSIS_SHEET_HEADERS = [
  'id',
  'userId',
  'birthYear',
  'mainInvestmentStrategies',
  'mainFinancialIssues',
  'financialGoal',
  'financialRatios',
  'isMarried',
  'hasChildren',
  'groupComparison',
];

export const FINANCIAL_PREDICTION_SHEET_NAME = 'financialPrediction';
export const FINANCIAL_PREDICTION_SHEET_RANGE = 'A1:E';
export const FINANCIAL_PREDICTION_SHEET_HEADERS = [
  'id',
  'userId',
  'futureFinancialPrediction',
  'goalAchievementPredictions',
  'consultingSuggestion',
];
