import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getGoalAsset } from '@/src/client/modules/Goal/api/goal.api';
import GoalStatusConnect from '@/src/client/modules/Goal/GoalStatusConnect';
import { GOAL_QUERY_KEY } from '@/src/client/modules/Goal/hooks/goal.query';

interface GoalStatusConnectPageProps {
  params: Promise<{ goalId: string }>;
}

export default async function GoalStatusConnectPage({
  params,
}: GoalStatusConnectPageProps) {
  const { goalId } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: GOAL_QUERY_KEY.GET_GOAL_ASSET(goalId),
    queryFn: () => getGoalAsset(goalId),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GoalStatusConnect />
    </HydrationBoundary>
  );
}
