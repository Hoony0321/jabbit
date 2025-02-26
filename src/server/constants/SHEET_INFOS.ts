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
