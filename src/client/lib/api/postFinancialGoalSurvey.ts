import { apiHandler } from '@/src/client/lib/api/apiHandler';

const postFinancialGoalSurvey = async (survey: {
  response: Record<string, string | number>;
}) => {
  return apiHandler.post(`/survey?type=add-routine-info`, survey);
};

export default postFinancialGoalSurvey;
