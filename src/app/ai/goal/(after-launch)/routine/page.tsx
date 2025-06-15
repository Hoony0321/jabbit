export const dynamic = 'force-dynamic';

import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from '@tanstack/react-query';

import GoalRoutine from '@/src/client/modules/Goal/GoalRoutine';
import { getRoutine } from '@/src/client/modules/Goal/api/routine.api';
import { ROUTINE_QUERY_KEY } from '@/src/client/modules/Goal/hooks/routine.query';

export default async function GoalRoutinePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ROUTINE_QUERY_KEY.GET,
    queryFn: getRoutine,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GoalRoutine />
    </HydrationBoundary>
  );
}
