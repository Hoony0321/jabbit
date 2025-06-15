export const dynamic = 'force-dynamic';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getAccountBookHistory } from '@/src/client/modules/AccountBook/api/accountBook.api';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/AccountBook/hooks/accountBook.query';
import AccountBookHistoryDetail from '@/src/client/modules/AccountBook/AccountBookHistoryDetail';

interface AccountBookHistoryDetailPageProps {
  params: Promise<{ historyId: string }>;
}

export default async function AccountBookHistoryDetailPage({
  params,
}: AccountBookHistoryDetailPageProps) {
  const { historyId } = await params;
  console.log('historyId', historyId);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_ACCOUNT_BOOK_HISTORY,
    queryFn: getAccountBookHistory,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountBookHistoryDetail />
    </HydrationBoundary>
  );
}
