import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';

// STEP 1 : 인적 정보 입력

export const EMPLOYMENT_STATUS_OPTIONS: {
  value: UserFinancialInfo['personal_info']['employment_status'];
  label: string;
}[] = [
  { value: 'stable', label: '안정적이에요' },
  { value: 'unstable', label: '조금 불안정해요' },
];

export const INDEPENDENT_STATUS_OPTIONS: {
  value: UserFinancialInfo['personal_info']['independent_status'];
  label: string;
}[] = [
  { value: 'living_with_parents', label: '부모님과 함께 살고 있어요' },
  {
    value: 'independent_no_support',
    label: '독립했어요, 부모님으로부터 일절 지원받지 않아요',
  },
  {
    value: 'independent_partial_support',
    label: '독립했지만 부모님께 일부 도움을 받아요',
  },
];

export const MARITAL_STATUS_OPTIONS: {
  value: UserFinancialInfo['personal_info']['marital_status'];
  label: string;
}[] = [
  { value: 'married', label: '결혼했어요' },
  { value: 'single', label: '미혼이에요' },
];

export const FAMILY_SUPPORT_STATUS_OPTIONS: {
  value: UserFinancialInfo['personal_info']['family_support_status'];
  label: string;
}[] = [
  { value: 'providing_support', label: '제가 부양 중이에요' },
  { value: 'no_support', label: '부양하지 않아요' },
  { value: 'partial_support', label: '일부 부양 중이에요' },
];

export const HEALTH_STATUS_OPTIONS: {
  value: UserFinancialInfo['personal_info']['health_status'];
  label: string;
}[] = [
  { value: 'healthy', label: '매우 건강해요' },
  { value: 'normal', label: '대체로 건강하지만 지병이 있어요' },
  { value: 'treatment', label: '정기적으로 치료 받아요' },
];

// STEP 3: 재무 고민 입력

export const FINANCIAL_CONCERN_OPTIONS: {
  label: string;
  value: UserFinancialInfo['financial_concern']['concerns'][number];
}[] = [
  {
    value: '소득 관리 및 지출통제',
    label: '소득 관리 및 지출통제',
  },
  {
    value: '내 집 마련',
    label: '내 집 마련',
  },
  {
    value: '부채 관리',
    label: '부채 관리',
  },
  {
    value: '투자 및 자산관리',
    label: '투자 및 자산관리',
  },
  {
    value: '노후/은퇴 준비',
    label: '노후/은퇴 준비',
  },
  {
    value: '자녀 교육 및 양육비',
    label: '자녀 교육 및 양육비',
  },
  {
    value: '절세',
    label: '절세',
  },
  {
    value: '종잣돈 마련',
    label: '종잣돈 마련',
  },
];

export const FINANCIAL_CONCERN_PERIOD_OPTIONS: {
  value: UserFinancialInfo['financial_concern']['concern_period'];
  label: string;
}[] = [
  { value: 'right_now', label: '지금 당장' },
  {
    value: '1_to_3_months',
    label: '1~3개월 이내',
  },
  {
    value: '6_to_12_months',
    label: '6개월~1년 이내',
  },
  {
    value: '1_to_5years',
    label: '향후 1~5년 이내',
  },
  {
    value: 'not_sure',
    label: '아직 잘 모르겠어요',
  },
];

// STEP 4: 현금 흐름 입력

export const FINANCIAL_EXPENSE_OPTIONS: {
  value: UserFinancialInfo['expenses'][number]['category'];
  label: string;
}[] = [
  { value: 'housing', label: '주거 / 관리비' },
  { value: 'loan_interest', label: '대출 이자' },
  { value: 'medical', label: '의료 / 건강 / 보험료' },
  { value: 'communication', label: '통신비' },
  { value: 'transport', label: '교통비' },
  { value: 'food', label: '식비' },
  { value: 'hobby', label: '취미 / 여가' },
  { value: 'education', label: '교육 / 운동' },
  { value: 'cafe_snack', label: '카페 / 간식' },
  { value: 'convenience_store', label: '편의점 / 마트 / 잡화' },
  { value: 'alcohol_entertainment', label: '술 / 유흥' },
  { value: 'beauty_clothing', label: '미용 / 의복' },
  { value: 'other', label: '기타' },
];

// STEP 5: 자산 부채 입력

export const FINANCIAL_ASSET_OPTIONS: {
  label: string;
  value: UserFinancialInfo['assets'][number]['category'];
}[] = [
  { value: 'owned_home', label: '자가' },
  { value: 'deposit', label: '보증금' },
  { value: 'investment_real_estate', label: '투자형 부동산' },
  { value: 'fixed_deposit', label: '예금' },
  { value: 'installment_savings', label: '적금' },
  { value: 'on_demand_account', label: '수시입출금' },
  { value: 'savings_insurance', label: '저축성 보험' },
  { value: 'subscription_savings', label: '청약' },
  { value: 'stocks', label: '주식' },
  { value: 'pension_irp', label: '투자성 연금 + IRP' },
  { value: 'isa', label: 'ISA' },
  { value: 'physical_assets', label: '실물자산 (ex. 금 등)' },
  { value: 'bonds', label: '채권' },
  { value: 'crypto', label: '코인' },
  { value: 'other', label: '기타' },
];

export const FINANCIAL_DEBT_OPTIONS: {
  label: string;
  value: UserFinancialInfo['debts'][number]['category'];
}[] = [
  { value: 'mortgage', label: '주택 담보 대출' },
  { value: 'jeonse_loan', label: '전세자금 대출' },
  { value: 'deposit_loan', label: '보증금 대출' },
  { value: 'student_loan', label: '학자금 대출' },
  { value: 'credit_loan', label: '신용 대출' },
  { value: 'overdraft', label: '마이너스 통장' },
  { value: 'other', label: '기타' },
];
