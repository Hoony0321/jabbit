import { apiHandler } from '@/src/client/lib/api/apiHandler';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
} from '../hooks/useTransactionHistoryForm';
import {
  GetBudgetResponse,
  GetAccountBookHistoryResponse,
  PutExpenseArgs,
  PutIncomeArgs,
} from './accountBook.type';
import { BudgetFormType } from '../AccountBookBudgetSetting/hooks/useBudgeSetForm';

// 예산
export const getBudget = async (): Promise<GetBudgetResponse> => {
  return apiHandler.get('/account-book/budget');
};

export const postBudget = async (budget: BudgetFormType) => {
  return apiHandler.post(`/account-book/budget`, budget);
};

// 지출/수입 내역
export const getAccountBookHistory =
  async (): Promise<GetAccountBookHistoryResponse> => {
    return apiHandler.get('/account-book/history');
  };

export const postIncome = async (income: IncomeFormRequestBody) => {
  return apiHandler.post(`/account-book/history/income`, income);
};

export const postExpense = async (expense: ExpenseFormRequestBody) => {
  return apiHandler.post(`/account-book/history/expense`, expense);
};

export const putIncome = async ({ historyId, income }: PutIncomeArgs) => {
  return apiHandler.put(`/account-book/history/income/${historyId}`, income);
};

export const putExpense = async ({ historyId, expense }: PutExpenseArgs) => {
  return apiHandler.put(`/account-book/history/expense/${historyId}`, expense);
};

export const deleteIncome = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/income/${historyId}`);
};

export const deleteExpense = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/expense/${historyId}`);
};
