import { apiHandler } from '@/src/client/lib/api/apiHandler';
interface NotificationPayload {
  contentType: 'SCENARIO' | 'PLAN' | 'ROUTINE';
  isAgreed: boolean;
}

const postAiContentNotification = async (payload: NotificationPayload) => {
  return apiHandler.post(`/ai/content/notification`, {
    contentType: payload.contentType,
    isAgreed: payload.isAgreed,
  });
};

export default postAiContentNotification;
