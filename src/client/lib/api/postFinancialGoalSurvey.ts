import { BASE_URL } from '@/src/server/constants/API';

const postFinancialGoalSurvey = async (survey: any) => {
        // todo: api 추가
  const response = await fetch(`${BASE_URL}/users`, {
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
