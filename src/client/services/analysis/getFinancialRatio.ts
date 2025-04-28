import { UserFinancialInfo } from '@/src/server/types/domains';

const getFinancialRatio = (financialInfo: UserFinancialInfo) => {
  const {
    monthly_income,
    monthly_savings,
    monthly_expenses,
    monthly_investment,
    total_debt,
  } = financialInfo;

  return {
    expense: Number(((monthly_expenses / monthly_income) * 100).toFixed(1)),
    // insurance: 0.5,
    saving: Number(((monthly_savings / monthly_income) * 100).toFixed(1)),
    investment: Number(
      ((monthly_investment / monthly_income) * 100).toFixed(1),
    ),
    debtRepayment: Number(((total_debt / monthly_income) * 100).toFixed(1)),
    // retirement: 37.5,
  };
};

export default getFinancialRatio;
