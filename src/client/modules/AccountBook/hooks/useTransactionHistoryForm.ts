import { z } from 'zod';
import { useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EXPENSE_CATEGORY_LIST,
  PAYMENT_METHOD_LIST,
  INCOME_CATEGORY_LIST,
} from '../constants/category';

// 지출 폼
export const ExpenseFormSchema = z.object({
  type: z.literal('expense'),
  dateTime: z.string(),
  amount: z.number(),
  category: z.enum(EXPENSE_CATEGORY_LIST),
  paymentMethod: z.enum(PAYMENT_METHOD_LIST),
  memo: z.string(),
});

export type ExpenseForm = z.infer<typeof ExpenseFormSchema>;
export type ExpenseFormRequestBody = Omit<ExpenseForm, 'type'>;

export const useExpenseForm = ({
  defaultValues,
}: {
  defaultValues?: ExpenseForm;
}) => {
  return useForm<ExpenseForm>({
    resolver: zodResolver(ExpenseFormSchema),
    mode: 'onChange',
    defaultValues: {
      dateTime: new Date().toISOString().split('T')[0],
      ...defaultValues,
    },
  });
};

// 수입 폼
export const IncomeFormSchema = z.object({
  type: z.literal('income'),
  dateTime: z.string(),
  amount: z.number(),
  category: z.enum(INCOME_CATEGORY_LIST),
  memo: z.string().optional(),
});

export type IncomeForm = z.infer<typeof IncomeFormSchema>;
export type IncomeFormRequestBody = Omit<IncomeForm, 'type'>;

export const useIncomeForm = ({
  defaultValues,
}: {
  defaultValues?: IncomeForm;
}) => {
  return useForm<IncomeForm>({
    resolver: zodResolver(IncomeFormSchema),
    mode: 'onChange',
    defaultValues: {
      dateTime: new Date().toISOString().split('T')[0],
      ...defaultValues,
    },
  });
};

// 내역 폼 (지출 / 수입)
export const TransactionHistoryFormSchema = z.discriminatedUnion('type', [
  IncomeFormSchema,
  ExpenseFormSchema,
]);
export type TransactionHistoryFormValues = z.infer<
  typeof TransactionHistoryFormSchema
>;

export const useTransactionHistoryForm = (
  props?: UseFormProps<TransactionHistoryFormValues>,
) =>
  useForm<TransactionHistoryFormValues>({
    resolver: zodResolver(TransactionHistoryFormSchema),
    ...props,
  });
