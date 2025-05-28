import { apiHandler } from '@/src/client/lib/api/apiHandler';

interface NotificationPayload {
  contentType: 'SCENARIO' | 'PLAN' | 'ROUTINE';
}

const postAiContent = async (payload: NotificationPayload) => {
  return apiHandler.post(`/ai/content`, {
    contentType: payload.contentType,
  });
};

export default postAiContent;
