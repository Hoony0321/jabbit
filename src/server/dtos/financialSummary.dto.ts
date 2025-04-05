import { FinancialSummary } from '../domains/financialSummary';

export class FinancialSummaryDto {
  id: string;
  userId: string;
  income: number;
  investment: number;
  savings: number;
  expenses: number;
  totalAssets: number;
  netWorth: number;
  debt: number;

  constructor(financialSummary: FinancialSummary) {
    this.id = financialSummary.id;
    this.userId = financialSummary.userId;
    this.income = financialSummary.income;
    this.investment = financialSummary.investment;
    this.savings = financialSummary.savings;
    this.expenses = financialSummary.expenses;
    this.totalAssets = financialSummary.totalAssets;
    this.netWorth = financialSummary.netWorth;
    this.debt = financialSummary.debt;
  }
}
