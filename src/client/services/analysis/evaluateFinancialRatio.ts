export const evaluateFinancialRatio = (
  condition: string,
  financialRatio: number,
  value: any,
) => {
  if (condition === 'max' && value) {
    return financialRatio <= value;
  } else if (condition === 'min' && value) {
    return financialRatio >= value;
  } else if (condition === 'range' && value) {
    return financialRatio >= value[0] && financialRatio <= value[1];
  } else {
    return false;
  }
};
