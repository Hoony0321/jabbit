import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  getGoalAsset,
  getGoalStatus,
  getRoutine,
  patchGoalAssetConnect,
  patchRoutineItem,
} from '../api/goal.api';
import { PatchGoalAssetConnectArgs } from '../api/goal.type';

export const GOAL_QUERY_KEY = {
  GET_ROUTINE: ['routine'],
  GET_GOAL_STATUS: ['goal-status'],
  GET_GOAL_ASSET: (goalId: string) => ['goal-asset', goalId],
} as const;

export const useGetRoutine = () => {
  return useSuspenseQuery({
    queryKey: GOAL_QUERY_KEY.GET_ROUTINE,
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

export const useGetGoalStatus = () => {
  return useSuspenseQuery({
    queryKey: GOAL_QUERY_KEY.GET_GOAL_STATUS,
    queryFn: getGoalStatus,
    select: (data) => {
      return {
        ...data,
        body: data.body.sort((a, b) => a.targetYears - b.targetYears),
      };
    },
  });
};

export const useGetGoalAsset = (goalId: string) => {
  return useSuspenseQuery({
    queryKey: GOAL_QUERY_KEY.GET_GOAL_ASSET(goalId),
    queryFn: () => getGoalAsset(goalId),
    select: (data) => {
      return {
        ...data,
        body: data.body.filter((goal) => goal.assetAmount > 0),
      };
    },
  });
};

export const usePatchGoalAssetConnect = (
  props?: UseMutationOptions<any, Error, PatchGoalAssetConnectArgs>,
): UseMutationResult<any, Error, PatchGoalAssetConnectArgs> => {
  return useMutation({
    mutationFn: patchGoalAssetConnect,
    ...props,
  });
};
