import { BASE_URL } from '@/src/server/constants/API';

interface PersonalInfo {
  name: string;
  birth_year: number;
  gender: 'male' | 'female';
  job: string;
  marital_status: 'married' | 'single';
  employment_status: 'stable' | 'unstable';
  family_support_status: 'providing_support' | 'no_support' | 'partial_support';
  health_status: 'healthy' | 'normal' | 'treatment';
  independent_status:
    | 'living_with_parents'
    | 'independent_no_support'
    | 'independent_partial_support';
  years_of_experience: number;
}

interface FinancialGoalItem {
  goal_type: 'short_term' | 'mid_term' | 'long_term';
  goal_title: string;
  target_years: number;
  target_amount: number;
}

interface FinancialConcern {
  concerns: string[];
  concern_with_expert: string;
  concern_period:
    | 'right_now'
    | '1_to_3_months'
    | '6_to_12_months'
    | '1_to_5years'
    | 'not_sure';
  concern_detail: string;
}

interface Cashflows {
  regular_income: number;
  irregular_income: number;
  income_memo: string;
  regular_saving: number;
  irregular_saving: number;
  saving_memo: string;
  regular_investment: number;
  irregular_investment: number;
  investment_memo: string;
}

interface ExpenseItem {
  category: string;
  amount: number;
  memo: string;
}

interface DebtItem {
  category: string;
  amount: number;
  memo: string;
}

interface AssetItem {
  category: string;
  amount: number;
  memo: string;
}

export interface UserFinancialInfo {
  personal_info: PersonalInfo;
  financial_goals: FinancialGoalItem[];
  financial_concern: FinancialConcern;
  cashflows: Cashflows;
  expenses: ExpenseItem[];
  debts: DebtItem[];
  assets: AssetItem[];
}

const postUserFinancialInfo = async (
  userId: string,
  financialInfo: UserFinancialInfo,
) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/all-info`, {
    method: 'POST',
    body: JSON.stringify(financialInfo),
  });

  return await response.json();
};

export default postUserFinancialInfo;
