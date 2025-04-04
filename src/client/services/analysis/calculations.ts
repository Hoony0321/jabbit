import { FINANCIAL_RATIO } from '../../constants/MYPAGE';

export const calculateMonthlyCashFlowChartData = (
  monthlyIncome: number,
  monthlySaving: number,
  monthlyInvestment: number,
  monthlyExpense: number,
) => {
  const investmentRatio = Math.round((monthlyInvestment / monthlyIncome) * 100);
  const savingRatio = Math.round((monthlySaving / monthlyIncome) * 100);
  const expenseRatio = Math.round((monthlyExpense / monthlyIncome) * 100);

  const sum = investmentRatio + savingRatio + expenseRatio;
  let adjustedInvestmentRatio = investmentRatio;
  let adjustedSavingRatio = savingRatio;
  let adjustedExpenseRatio = expenseRatio;

  if (sum !== 100) {
    if (investmentRatio >= savingRatio && investmentRatio >= expenseRatio) {
      adjustedInvestmentRatio += 100 - sum;
    } else if (savingRatio >= investmentRatio && savingRatio >= expenseRatio) {
      adjustedSavingRatio += 100 - sum;
    } else {
      adjustedExpenseRatio += 100 - sum;
    }
  }

  return {
    investmentRatio: adjustedInvestmentRatio,
    savingRatio: adjustedSavingRatio,
    expenseRatio: adjustedExpenseRatio,
  };
};

export const calculateDebtToAssetRatio = (
  totalAsset: number,
  totalDebt: number,
) => {
  let debtToAssetRatio = Math.round((totalDebt / totalAsset) * 100);
  let netWorthRatio = Math.round(((totalAsset - totalDebt) / totalAsset) * 100);

  const sum = debtToAssetRatio + netWorthRatio;
  if (sum !== 100) {
    if (netWorthRatio >= debtToAssetRatio) {
      netWorthRatio += 100 - sum;
    } else {
      debtToAssetRatio += 100 - sum;
    }
  }

  return {
    netWorthRatio,
    debtToAssetRatio,
  };
};

export const calculateFinancialRatio = (
  expense: number,
  insurance: number,
  saving: number,
  investment: number,
  debt: number,
  retirement: number,
  emergency: number,
) => {
  const insuranceRatio = FINANCIAL_RATIO[1].recommendedRatio;
  const insuranceMaxRatio = FINANCIAL_RATIO[1]?.maxRecommendedRatio;
  const expenseEvaluation =
    expense <= FINANCIAL_RATIO[0].recommendedRatio ? true : false;
  const insuranceEvaluation =
    insuranceMaxRatio &&
    insurance <= insuranceMaxRatio &&
    insurance >= insuranceRatio
      ? true
      : false;
  const savingEvaluation =
    saving >= FINANCIAL_RATIO[2].recommendedRatio ? true : false;
  const investmentEvaluation =
    investment >= FINANCIAL_RATIO[3].recommendedRatio ? true : false;
  const debtEvaluation =
    debt < FINANCIAL_RATIO[4].recommendedRatio ? true : false;
  const retirementEvaluation =
    retirement >= FINANCIAL_RATIO[5].recommendedRatio ? true : false;
  const emergencyEvaluation =
    emergency >= FINANCIAL_RATIO[6].recommendedRatio ? true : false;

  return {
    expenseEvaluation,
    insuranceEvaluation,
    savingEvaluation,
    investmentEvaluation,
    debtEvaluation,
    retirementEvaluation,
    emergencyEvaluation,
  };
};
