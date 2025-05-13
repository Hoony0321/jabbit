import { useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';

const personalInfoSchema = z.object({
  job: z.string().min(1),
  marital_status: z.enum(['married', 'single']),
  employment_status: z.enum(['stable', 'unstable']),
  family_support_status: z.enum([
    'providing_support',
    'no_support',
    'partial_support',
  ]),
  health_status: z.enum(['healthy', 'normal', 'treatment']),
  independent_status: z.enum([
    'living_with_parents',
    'independent_no_support',
    'independent_partial_support',
  ]),
  years_of_experience: z.number().min(0),
});

const financialGoalItemSchema = z.object({
  goal_type: z.enum(['short_term', 'mid_term', 'long_term']),
  goal_title: z.string().min(1),
  target_years: z.number().min(1),
  target_amount: z.number().min(0),
});

const financialConcernSchema = z.object({
  concerns: z.array(z.string()).min(1).max(3),
  concern_with_expert: z.string().min(1),
  concern_period: z.enum([
    'right_now',
    '1_to_3_months',
    '6_to_12_months',
    '1_to_5years',
    'not_sure',
  ]),
  concern_detail: z.string().min(1),
});

const cashflowsSchema = z.object({
  regular_income: z.number().min(0),
  irregular_income: z.number().min(0),
  income_memo: z.string().min(1),
  regular_saving: z.number().min(0),
  irregular_saving: z.number().min(0),
  saving_memo: z.string().min(1),
  regular_investment: z.number().min(0),
  irregular_investment: z.number().min(0),
  investment_memo: z.string().min(1),
});

const expenseItemSchema = z.object({
  category: z.string().min(1),
  amount: z.number().min(0),
  memo: z.string().min(1),
});

const debtItemSchema = z.object({
  category: z.string().min(1),
  amount: z.number().min(0),
  memo: z.string().min(1),
});

const assetItemSchema = z.object({
  category: z.string().min(1),
  amount: z.number().min(0),
  memo: z.string().min(1),
});

export const financialInfoSchema = z.object({
  personal_info: personalInfoSchema,
  financial_goals: z.array(financialGoalItemSchema),
  financial_concern: financialConcernSchema,
  cashflows: cashflowsSchema,
  expenses: z.array(expenseItemSchema),
  debts: z.array(debtItemSchema),
  assets: z.array(assetItemSchema),
});

export type FinancialInfoFormSchema = z.infer<typeof financialInfoSchema>;

const useFinancialInfoForm = ({
  ...props
}: UseFormProps<UserFinancialInfo>) => {
  return useForm<UserFinancialInfo>({
    resolver: zodResolver(financialInfoSchema),
    defaultValues: {
      financial_concern: {
        concerns: [],
      },
    },
    ...props,
  });
};

export default useFinancialInfoForm;
