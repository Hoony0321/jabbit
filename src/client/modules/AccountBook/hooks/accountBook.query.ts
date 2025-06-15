import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import {
  deleteExpense,
  deleteIncome,
  getBudget,
  getAccountBookHistory,
  postBudget,
  postExpense,
  postIncome,
  putExpense,
  putIncome,
} from '../api/accountBook.api';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
} from './useTransactionHistoryForm';
import {
  GetBudgetResponse,
  GetAccountBookHistoryResponse,
  PutExpenseArgs,
  PutIncomeArgs,
} from '../api/accountBook.type';
import { BudgetFormType } from '../AccountBookBudgetSetting/hooks/useBudgeSetForm';

export const ACCOUNT_QUERY_KEY = {
  GET_BUDGET: ['account-book', 'budget'],
  GET_ACCOUNT_BOOK_HISTORY: ['account-book', 'history'],
  GET_ACCOUNT_BOOK_HISTORY_DETAIL: (historyId: string) => [
    'account-book',
    'history',
    historyId,
  ],
} as const;

export const useGetBudget = (
  props?: UseSuspenseQueryOptions<GetBudgetResponse, Error>,
) => {
  return useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_BUDGET,
    queryFn: getBudget,
    ...props,
  });
};

export const usePostBudget = (
  props?: UseMutationOptions<any, Error, BudgetFormType>,
): UseMutationResult<any, Error, BudgetFormType> => {
  return useMutation({
    mutationFn: postBudget,
    ...props,
  });
};

export const useGetAccountBookHistory = (
  props?: UseSuspenseQueryOptions<GetAccountBookHistoryResponse, Error>,
) => {
  return useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
    queryFn: getAccountBookHistory,
    ...props,
  });
};

export const usePostExpense = (
  props?: UseMutationOptions<any, Error, ExpenseFormRequestBody>,
): UseMutationResult<any, Error, ExpenseFormRequestBody> => {
  return useMutation({
    mutationFn: postExpense,
    ...props,
  });
};

export const usePostIncome = (
  props?: UseMutationOptions<any, Error, IncomeFormRequestBody>,
): UseMutationResult<any, Error, IncomeFormRequestBody> => {
  return useMutation({
    mutationFn: postIncome,
    ...props,
  });
};

export const usePutExpense = (
  props?: UseMutationOptions<any, Error, PutExpenseArgs>,
): UseMutationResult<any, Error, PutExpenseArgs> => {
  return useMutation({
    mutationFn: putExpense,
    ...props,
  });
};

export const usePutIncome = (
  props?: UseMutationOptions<any, Error, PutIncomeArgs>,
): UseMutationResult<any, Error, PutIncomeArgs> => {
  return useMutation({
    mutationFn: putIncome,
    ...props,
  });
};

export const useDeleteExpense = (
  props?: UseMutationOptions<any, Error, string>,
): UseMutationResult<any, Error, string> => {
  return useMutation({
    mutationFn: deleteExpense,
    ...props,
  });
};

export const useDeleteIncome = (
  props?: UseMutationOptions<any, Error, string>,
): UseMutationResult<any, Error, string> => {
  return useMutation({
    mutationFn: deleteIncome,
    ...props,
  });
};
