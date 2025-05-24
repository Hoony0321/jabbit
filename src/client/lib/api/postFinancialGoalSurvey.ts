import { BASE_URL } from '@/src/server/constants/API';

const postFinancialGoalSurvey = async (survey: {
  response: Record<string, string | number>;
}) => {
  const response = await fetch(`${BASE_URL}/survey?type=add-routine-info`, {
    method: 'POST',
    body: JSON.stringify(survey),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create user');
  }
  return (await response.json()).data;
};

export default postFinancialGoalSurvey;
