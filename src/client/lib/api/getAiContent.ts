import { apiHandler } from '@/src/client/lib/api/apiHandler';

type ContentPayload = 'SCENARIO' | 'PLAN' | 'ROUTINE';
interface ApiResponse {
  code?: string;
  message?: string;
  body: string | null;
}
const getAiContent = async (payload: ContentPayload): Promise<ApiResponse> => {
  return apiHandler.get(`/ai/content/${payload}`);
};

export default getAiContent;
