export enum ExpenseCategory {
  FOOD = '식비',
  CAFE = '카페/간식',
  CONVENIENCE_STORE = '편의점/마트/잡화',
  ALCOHOL = '술/유흥',
  SHOPPING = '쇼핑',
  HOBBY = '취미/여가',
  MEDICAL = '의료/건강/피트니스',
  LIVING = '생활용품',
  COMMUNICATION = '주거/통신',
  BEAUTY = '미용/패션',
  INSURANCE = '보험/세금/기타금융',
  EDUCATION = '교육',
  CAR = '교육/자동차',
  GIFT = '경조사/회비',
  ETC = '기타',
}

export enum IncomeCategory {
  SALARY = '월급',
  ADDITIONAL_INCOME = '부수입',
  ALLOWANCE = '용돈',
  BONUS = '상여',
  FINANCIAL_INCOME = '금융소득',
  ETC = '기타',
}

export enum PaymentMethod {
  CREDIT_CARD = '신용카드',
  DEBIT_CARD = '체크카드',
  CASH = '현금',
  ETC = '기타',
}

export type IncomeCategoryKey = keyof typeof IncomeCategory;
export type ExpenseCategoryKey = keyof typeof ExpenseCategory;
export type PaymentMethodKey = keyof typeof PaymentMethod;

export const EXPENSE_CATEGORY_MAP: Record<
  ExpenseCategoryKey,
  { name: string; icon: string }
> = {
  FOOD: {
    name: '식비',
    icon: '🍜',
  },
  CAFE: {
    name: '카페/간식',
    icon: '☕️',
  },
  CONVENIENCE_STORE: {
    name: '편의점/마트/잡화',
    icon: '🛒',
  },
  ALCOHOL: {
    name: '술/유흥',
    icon: '🍺',
  },
  SHOPPING: {
    name: '쇼핑',
    icon: '🛍️',
  },
  HOBBY: {
    name: '취미/여가',
    icon: '🕹️',
  },
  MEDICAL: {
    name: '의료/건강/피트니스',
    icon: '🧘',
  },
  LIVING: {
    name: '생활용품',
    icon: '🪑',
  },
  COMMUNICATION: {
    name: '주거/통신',
    icon: '🏠',
  },
  BEAUTY: {
    name: '미용/패션',
    icon: '🧥',
  },
  INSURANCE: {
    name: '보험/세금/기타금융',
    icon: '💰',
  },
  EDUCATION: {
    name: '교육',
    icon: '📙',
  },
  CAR: {
    name: '교육/자동차',
    icon: '🚖',
  },
  GIFT: {
    name: '경조사/회비',
    icon: '🎁',
  },
  ETC: {
    name: '기타',
    icon: '📋',
  },
};

export const INCOME_CATEGORY_MAP: Record<
  IncomeCategoryKey,
  { name: string; icon: string }
> = {
  SALARY: {
    name: '월급',
    icon: '💰',
  },
  ADDITIONAL_INCOME: {
    name: '부수입',
    icon: '💵',
  },
  ALLOWANCE: {
    name: '용돈',
    icon: '🤑',
  },
  BONUS: {
    name: '상여',
    icon: '🏅',
  },
  FINANCIAL_INCOME: {
    name: '금융소득',
    icon: '🏦',
  },
  ETC: {
    name: '기타',
    icon: '📋',
  },
};

export const PAYMENT_METHOD_MAP: Record<
  PaymentMethodKey,
  { name: string; icon: string }
> = {
  CREDIT_CARD: {
    name: '신용카드',
    icon: '💳',
  },
  DEBIT_CARD: {
    name: '체크카드',
    icon: '🪪',
  },
  CASH: {
    name: '현금',
    icon: '💰',
  },
  ETC: {
    name: '기타',
    icon: '📋',
  },
};
