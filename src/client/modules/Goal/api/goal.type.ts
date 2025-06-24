import { FinancialGoalItem } from '@/src/client/lib/api/postUserFinancialInfo';
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

export type GoalAssetStatus = 'CONNECTED' | 'DISCONNECTED';

export interface GoalStatus {
  id: string;
  goalTitle: string;
  goalType: FinancialGoalItem['goal_type'];
  targetYears: number;
  targetAmount: number;
  currentAmount: number;
  status: GoalAssetStatus;
  updatedAt: string;
}

export interface GetGoalStatusResponse {
  code: string;
  message: string | null;
  body: GoalStatus[];
}

export interface GoalAsset {
  id: number;
  assetCategory: string;
  assetAmount: number;
  assetMemo: string;
  isConnected: boolean;
}

export interface GetGoalAssetResponse {
  code: string;
  message: string | null;
  body: GoalAsset[];
}

export interface PatchGoalAssetConnectArgs {
  goalId: string;
  body: {
    assetIds: number[];
  };
}
