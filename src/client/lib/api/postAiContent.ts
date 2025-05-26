import { AI_API_URL } from '@/src/client/constants/API';

interface NotificationPayload {
  contentType: 'SCENARIO' | 'PLAN' | 'ROUTINE';
}

const postAiContent = async (payload: NotificationPayload) => {
  const response = await fetch(`${AI_API_URL}/ai/content`, {
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

export default postAiContent;
