import { RoutineCategory } from '../GoalRoutine/constants/routineMap';

export interface Routine {
  id: string;
  frequency: string;
  category: RoutineCategory;
  name: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
}

export interface GetRoutineResponse {
  code: string;
  message: string | null;
  body: Partial<Record<RoutineCategory, Routine[]>>;
}
