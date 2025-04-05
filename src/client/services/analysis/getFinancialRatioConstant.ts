import {
  FINANCIAL_RATIO_20S,
  FINANCIAL_RATIO_30S,
  FINANCIAL_RATIO_AVG,
} from '../../constants/MYPAGE';
import { FinancialRatioConfig } from '@/src/client/types/financial';

export const getFinancialRatioByBirthYear = (
  birthYear: number,
): FinancialRatioConfig => {
  const age = new Date().getFullYear() - birthYear;
  if (age >= 20 && age < 30) {
    return FINANCIAL_RATIO_20S as FinancialRatioConfig;
  } else if (age >= 30 && age < 40) {
    return FINANCIAL_RATIO_30S as FinancialRatioConfig;
  } else {
    return FINANCIAL_RATIO_AVG as FinancialRatioConfig;
  }
};
