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
