import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { typedObjectEntries } from '@/src/client/utils/type';
import { EXPENSE_CATEGORY_MAP } from '../../constants/category';

const budgetSchemaShape = Object.fromEntries(
  typedObjectEntries(EXPENSE_CATEGORY_MAP).map(([key]) => [key, z.number()]),
);

const BudgetSchema = z.object(budgetSchemaShape);

export type BudgetFormType = z.infer<typeof BudgetSchema>;

export const useBudgeSetForm = ({
  defaultValues,
}: {
  defaultValues?: BudgetFormType;
}) =>
  useForm<BudgetFormType>({
    resolver: zodResolver(BudgetSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

export default useBudgeSetForm;
