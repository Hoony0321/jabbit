'use client';

import { useGetAccountBookHistory } from '../hooks/accountBook.query';
import { HistoryEmptyView, HistoryList } from './components';

function AccountBookHistory() {
  const { data } = useGetAccountBookHistory();
  const hasNoHistory = !data.body?.historyList?.length;

  return <>{hasNoHistory ? <HistoryEmptyView /> : <HistoryList />}</>;
}

export default AccountBookHistory;
