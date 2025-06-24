import { apiHandler } from '@/src/client/lib/api/apiHandler';
import {
  GetGoalAssetResponse,
  GetGoalStatusResponse,
  GetRoutineResponse,
  PatchGoalAssetConnectArgs,
} from './goal.type';

// 루틴탭
export const getRoutine = async (): Promise<GetRoutineResponse> => {
  return apiHandler.get('/routine');
};

export const patchRoutineItem = async (routineId: string) => {
  return apiHandler.patch(`/routine/${routineId}/complete`);
};

// 현황탭
export const getGoalStatus = async (): Promise<GetGoalStatusResponse> => {
  return apiHandler.get('/goal-progress');
};

export const getGoalAsset = async (
  goalId: string,
): Promise<GetGoalAssetResponse> => {
  return apiHandler.get(`/goal-progress/${goalId}/assets`);
};

export const patchGoalAssetConnect = async ({
  goalId,
  body,
}: PatchGoalAssetConnectArgs): Promise<GetGoalAssetResponse> => {
  return apiHandler.patch(`/goal-progress/${goalId}/connect-assets`, body);
};
