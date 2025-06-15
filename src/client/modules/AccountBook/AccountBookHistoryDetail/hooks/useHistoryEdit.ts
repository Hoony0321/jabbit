import { useParams, useRouter } from 'next/navigation';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import {
  ACCOUNT_QUERY_KEY,
  useDeleteExpense,
  useDeleteIncome,
  usePutExpense,
  usePutIncome,
} from '../../hooks/accountBook.query';
import {
  ExpenseForm,
  IncomeForm,
  TransactionHistoryFormValues,
  useTransactionHistoryForm,
} from '../../hooks/useTransactionHistoryForm';
import { getCurrentLocalDateTimeString } from '../../utils/date';
import { getAccountBookHistory } from '../../api/accountBook.api';

function useHistoryEdit() {
  const router = useRouter();
  const { historyId } = useParams();
  const queryClient = useQueryClient();

  const { data: transactionData } = useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
    queryFn: getAccountBookHistory,
    select: (data) => {
      const transaction = data.body.historyList.find(
        (item) => item.historyId === historyId,
      );
      const type = transaction?.expenseCategory ? 'expense' : 'income';
      const parsedData =
        type === 'expense'
          ? {
              type,
              dateTime: transaction?.dateTime,
              category: transaction?.expenseCategory,
              paymentMethod: transaction?.paymentCategory ?? '',
              amount: transaction?.amount,
              memo: transaction?.memo,
            }
          : {
              type,
              dateTime: transaction?.dateTime,
              category: transaction?.incomeCategory,
              amount: transaction?.amount,
              memo: transaction?.memo,
            };

      return parsedData;
    },
  });

  const { mutate: deleteExpenseMutate } = useDeleteExpense({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
      });
      router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY']);
    },
    onError: () => {
      alert('지출 내역 삭제에 실패했습니다.');
    },
  });

  const { mutate: putExpenseMutate } = usePutExpense({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
      });
      router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY']);
    },
    onError: () => {
      alert('지출 내역 수정에 실패했습니다.');
    },
  });

  const { mutate: deleteIncomeMutate } = useDeleteIncome({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
      });
      router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY']);
    },
    onError: () => {
      alert('수입 내역 삭제에 실패했습니다.');
    },
  });

  const { mutate: putIncomeMutate } = usePutIncome({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
      });
      router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY']);
    },
    onError: () => {
      alert('수입 내역 수정에 실패했습니다.');
    },
  });

  const { register, control, getValues, watch } = useTransactionHistoryForm({
    defaultValues: {
      ...transactionData,
      dateTime: transactionData.dateTime?.split('T')[0],
    } as unknown as TransactionHistoryFormValues,
  });

  const handleDelete = () => {
    if (transactionData.type === 'expense') {
      deleteExpenseMutate(historyId as string);
    } else {
      deleteIncomeMutate(historyId as string);
    }
  };

  const handleEdit = () => {
    const { type, dateTime, ...value } = getValues();
    const body = {
      ...value,
      dateTime: getCurrentLocalDateTimeString(dateTime),
    };

    if (type === 'expense') {
      putExpenseMutate({
        historyId: historyId as string,
        expense: body as ExpenseForm,
      });
    } else {
      putIncomeMutate({
        historyId: historyId as string,
        income: body as IncomeForm,
      });
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
    register,
    control,
    transactionData,
    handleDelete,
    handleEdit,
    isDisabled,
  };
}

export default useHistoryEdit;
