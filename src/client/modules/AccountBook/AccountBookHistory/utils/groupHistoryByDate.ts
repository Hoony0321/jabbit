import { HistoryItem } from '../../api/accountBook.type';
import { ExpenseForm, IncomeForm } from '../../hooks/useTransactionHistoryForm';
import {
  ExpenseCategory,
  IncomeCategory,
  PaymentMethod,
} from '../../constants/category';

type IncomeHistory = IncomeForm & {
  type: 'income';
  historyId: string;
};

type ExpenseHistory = ExpenseForm & {
  type: 'expense';
  historyId: string;
};

type GroupedHistoryEntry = IncomeHistory | ExpenseHistory;

export type GroupedHistory = {
  date: string;
  entries: GroupedHistoryEntry[];
};

const createIncomeEntry = (item: HistoryItem): IncomeHistory => ({
  type: 'income',
  historyId: item.historyId,
  dateTime: item.dateTime,
  amount: item.amount,
  category: item.incomeCategory as IncomeCategory,
  memo: item.memo ?? '',
});

const createExpenseEntry = (item: HistoryItem): ExpenseHistory => ({
  type: 'expense',
  historyId: item.historyId,
  dateTime: item.dateTime,
  amount: item.amount,
  category: item.expenseCategory as ExpenseCategory,
  paymentMethod: item.paymentCategory as PaymentMethod,
  memo: item.memo ?? '',
});

export const groupHistoryByDate = (
  historyList: HistoryItem[],
): GroupedHistory[] => {
  const grouped: Record<string, GroupedHistory['entries']> = {};

  for (const item of historyList) {
    const date = item.dateTime.slice(0, 10);
    const entry = item.incomeCategory
      ? createIncomeEntry(item)
      : createExpenseEntry(item);

    grouped[date] ??= [];
    grouped[date].push(entry);
  }

  return Object.entries(grouped)
    .map(([date, entries]) => ({
      date,
      entries: entries.sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
      ),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
