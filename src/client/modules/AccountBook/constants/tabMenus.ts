import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

export const ACCOUNT_BOOK_TABS = [
  {
    label: '예산',
    value: 'budget',
    link: IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_BUDGET'],
  },
  {
    label: '지출/수입',
    value: 'history',
    link: IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_HISTORY'],
  },
] as const;

export const TRANSACTION_TABS = [
  {
    label: '지출',
    value: 'expense',
    link: IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_CREATE_EXPENSE'],
  },
  {
    label: '수입',
    value: 'income',
    link: IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_CREATE_INCOME'],
  },
] as const;

export type TransactionTabType = (typeof TRANSACTION_TABS)[number]['value'];
export type AccountBookTabType = (typeof ACCOUNT_BOOK_TABS)[number]['value'];
