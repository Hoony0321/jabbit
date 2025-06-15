import { apiHandler } from '@/src/client/lib/api/apiHandler';
import { GetRoutineResponse } from './routine.type';

export const getRoutine = async (): Promise<GetRoutineResponse> => {
  return apiHandler.get('/routine');
};

export const patchRoutineItem = async (routineId: string) => {
  return apiHandler.patch(`/routine/${routineId}/complete`);
};
