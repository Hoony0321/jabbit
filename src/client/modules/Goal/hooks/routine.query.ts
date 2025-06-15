import {
  useMutation,
  UseMutationOptions,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { getRoutine, patchRoutineItem } from '../api/routine.api';

export const ROUTINE_QUERY_KEY = {
  GET: ['routine'],
} as const;

export const useGetRoutine = () => {
  return useSuspenseQuery({
    queryKey: ROUTINE_QUERY_KEY.GET,
    queryFn: getRoutine,
    select: (data) => {
      const sortedBody = Object.fromEntries(
        Object.entries(data.body).map(([category, routines]) => [
          category,
          routines.sort(
            (a, b) => Number(a.isCompleted) - Number(b.isCompleted),
          ),
        ]),
      );

      return {
        ...data,
        body: sortedBody,
      };
    },
  });
};

export const usePatchRoutineItem = (
  props?: UseMutationOptions<any, Error, string>,
) => {
  return useMutation({
    mutationFn: patchRoutineItem,
    ...props,
  });
};
