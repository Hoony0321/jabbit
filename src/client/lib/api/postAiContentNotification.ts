import { AI_API_URL } from '@/src/client/constants/API';

interface NotificationPayload {
  contentType: 'SCENARIO' | 'PLAN' | 'ROUTINE';
  isAgreed: boolean;
}

const postAiContentNotification = async (payload: NotificationPayload) => {
  const response = await fetch(`${AI_API_URL}/ai/content/notification`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create user');
  }

  return (await response.json()).data;
};

export default postAiContentNotification;
