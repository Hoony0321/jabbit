export const dynamic = 'force-dynamic';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getBudget } from '@/src/client/modules/AccountBook/api/accountBook.api';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/AccountBook/hooks/accountBook.query';
import AccountBookBudgetSetting from '@/src/client/modules/AccountBook/AccountBookBudgetSetting';

export default async function AccountBookBudgetSettingPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_BUDGET,
    queryFn: getBudget,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountBookBudgetSetting />
    </HydrationBoundary>
  );
}
