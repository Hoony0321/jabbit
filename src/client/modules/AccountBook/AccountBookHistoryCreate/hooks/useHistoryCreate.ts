import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

import {
  ACCOUNT_QUERY_KEY,
  usePostExpense,
  usePostIncome,
} from '../../hooks/accountBook.query';
import { getCurrentLocalDateTimeString } from '../../utils/date';
import { TransactionTabType } from '../../constants/tabMenus';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
  useTransactionHistoryForm,
} from '../../hooks/useTransactionHistoryForm';

function useHistoryCreate({ type }: { type: TransactionTabType }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { control, getValues, register, watch } = useTransactionHistoryForm({
    mode: 'onChange',
    defaultValues: {
      type,
      dateTime: new Date().toISOString().split('T')[0],
    },
  });

  const { mutate: postExpenseMutate } = usePostExpense({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
      });
      router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY']);
    },
    onError: () => {
      alert('지출 내역 저장에 실패했습니다.');
    },
  });

  const { mutate: postIncomeMutate } = usePostIncome({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
      });
      router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY']);
    },
    onError: () => {
      alert('수입 내역 저장에 실패했습니다.');
    },
  });

  const handleSubmit = () => {
    const { type, dateTime, ...value } = getValues();
    const body = {
      ...value,
      dateTime: getCurrentLocalDateTimeString(dateTime),
    };

    if (type === 'income') {
      postIncomeMutate(body as IncomeFormRequestBody);
    } else {
      postExpenseMutate(body as ExpenseFormRequestBody);
    }
  };

  const values = watch();

  const isDisabled =
    values.type === 'income'
      ? !values.amount || !values.category || !values.dateTime
      : !values.amount ||
        !values.category ||
        !values.paymentMethod ||
        !values.dateTime;

  return {
    control,
    register,
    isDisabled,
    handleSubmit,
  };
}

export default useHistoryCreate;
