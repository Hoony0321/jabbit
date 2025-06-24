export const dynamic = 'force-dynamic';

import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from '@tanstack/react-query';

import GoalRoutine from '@/src/client/modules/Goal/GoalRoutine';
import { getRoutine } from '@/src/client/modules/Goal/api/goal.api';
import { GOAL_QUERY_KEY } from '@/src/client/modules/Goal/hooks/goal.query';

export default async function GoalRoutinePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: GOAL_QUERY_KEY.GET_ROUTINE,
    queryFn: getRoutine,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GoalRoutine />
    </HydrationBoundary>
  );
}
