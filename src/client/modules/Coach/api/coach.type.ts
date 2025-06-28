export interface RoutineRecommendation {
  name: string;
  category: string
  frequency: string
  description: string;
}

export interface GetAiFeedbackResponseBody {
  statusCheckRoutine?: string;
  statusCheckBudget?: string;
  emotionCarePositive?: string;
  emotionCareNegative?: string;
  forecastAssetChange?: string;
  forecastCashFlow?: string;
  routineRecoList?: RoutineRecommendation[];
}

export interface GetAiFeedbackResponse {
  code: 'success' | 'error'; 
  message: string | null;
  body: GetAiFeedbackResponseBody;
}

export interface PostAiFeedbackRequest {
    "q1": string;
    "q2": string[];
    "q3": string[];
    "q4": string[];
    "q5": string;
}