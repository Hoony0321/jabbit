import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getGoalStatus } from '@/src/client/modules/Goal/api/goal.api';
import { GOAL_QUERY_KEY } from '@/src/client/modules/Goal/hooks/goal.query';
import GoalStatus from '@/src/client/modules/Goal/GoalStatus';

export default async function GoalStatusPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: GOAL_QUERY_KEY.GET_GOAL_STATUS,
    queryFn: getGoalStatus,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GoalStatus />
    </HydrationBoundary>
  );
}
