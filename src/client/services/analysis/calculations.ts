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
