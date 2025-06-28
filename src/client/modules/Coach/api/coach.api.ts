import { apiHandler } from '@/src/client/lib/api/apiHandler';
import { GetAiFeedbackResponse, PostAiFeedbackRequest } from './coach.type';

export const getAiFeedback = async (): Promise<GetAiFeedbackResponse> => {
  return apiHandler.get('/ai/feedback');
};

export const postAiFeedback = async (feedback: PostAiFeedbackRequest): Promise<PostAiFeedbackRequest> => {
  return apiHandler.post('/ai/feedback', {response: feedback});
};