export const dynamic = 'force-dynamic';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import AccountBookHistory from '@/src/client/modules/AccountBook/AccountBookHistory';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/AccountBook/hooks/accountBook.query';
import { getAccountBookHistory } from '@/src/client/modules/AccountBook/api/accountBook.api';

export default async function AccountBookHistoryPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
    queryFn: getAccountBookHistory,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountBookHistory />
    </HydrationBoundary>
  );
}
