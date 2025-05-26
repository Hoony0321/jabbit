import { AI_API_URL } from '@/src/client/constants/API';

const postBuyHomeSurvey = async (survey: {
  response: Record<string, string | number>;
}) => {
  const response = await fetch(`${AI_API_URL}/survey?type=house-goal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(survey),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create user');
  }

  return (await response.json()).data;
};

export default postBuyHomeSurvey;
