import { AI_API_URL } from '@/src/client/constants/API';


type ContentPayload = 'SCENARIO' | 'PLAN' | 'ROUTINE';

const getAiContent = async (payload: ContentPayload) => {
  const response = await fetch(`${AI_API_URL}/ai/content/${payload}`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });

  return await response.json();
};

export default getAiContent;
