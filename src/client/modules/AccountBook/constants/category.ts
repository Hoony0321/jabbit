export const EXPENSE_CATEGORY_LIST = [
  'food',
  'cafe',
  'convenienceStore',
  'alcohol',
  'shopping',
  'hobby',
  'medical',
  'living',
  'communication',
  'beauty',
  'insurance',
  'education',
  'car',
  'gift',
  'etc',
] as const;

export const INCOME_CATEGORY_LIST = [
  'salary',
  'additionalIncome',
  'allowance',
  'bonus',
  'financialIncome',
  'etc',
] as const;

export const PAYMENT_METHOD_LIST = [
  'creditCard',
  'debitCard',
  'cash',
  'etc',
] as const;

export type ExpenseCategory = (typeof EXPENSE_CATEGORY_LIST)[number];
export type IncomeCategory = (typeof INCOME_CATEGORY_LIST)[number];
export type PaymentMethod = (typeof PAYMENT_METHOD_LIST)[number];

export const EXPENSE_CATEGORY_MAP: Record<
  ExpenseCategory,
  { name: string; icon: string }
> = {
  food: {
    name: '식비',
    icon: '🍜',
  },
  cafe: {
    name: '카페/간식',
    icon: '☕️',
  },
  convenienceStore: {
    name: '편의점/마트/잡화',
    icon: '🛒',
  },
  alcohol: {
    name: '술/유흥',
    icon: '🍺',
  },
  shopping: {
    name: '쇼핑',
    icon: '🛍️',
  },
  hobby: {
    name: '취미/여가',
    icon: '🕹️',
  },
  medical: {
    name: '의료/건강/피트니스',
    icon: '🧘',
  },
  living: {
    name: '생활용품',
    icon: '🪑',
  },
  communication: {
    name: '주거/통신',
    icon: '🏠',
  },
  beauty: {
    name: '미용/패션',
    icon: '🧥',
  },
  insurance: {
    name: '보험/세금/기타금융',
    icon: '💰',
  },
  education: {
    name: '교육',
    icon: '📙',
  },
  car: {
    name: '교육/자동차',
    icon: '🚖',
  },
  gift: {
    name: '경조사/회비',
    icon: '🎁',
  },
  etc: {
    name: '기타',
    icon: '📋',
  },
} as const;

export const INCOME_CATEGORY_MAP: Record<
  IncomeCategory,
  { name: string; icon: string }
> = {
  salary: {
    name: '월급',
    icon: '💰',
  },
  additionalIncome: {
    name: '부수입',
    icon: '💵',
  },
  allowance: {
    name: '용돈',
    icon: '🤑',
  },
  bonus: {
    name: '상여',
    icon: '🏅',
  },
  financialIncome: {
    name: '금융소득',
    icon: '🏦',
  },
  etc: {
    name: '기타',
    icon: '📋',
  },
} as const;

export const PAYMENT_METHOD_MAP: Record<
  PaymentMethod,
  { name: string; icon: string }
> = {
  creditCard: {
    name: '신용카드',
    icon: '💳',
  },
  debitCard: {
    name: '체크카드',
    icon: '🪪',
  },
  cash: {
    name: '현금',
    icon: '💰',
  },
  etc: {
    name: '기타',
    icon: '📋',
  },
} as const;
