import { apiHandler } from '@/src/client/lib/api/apiHandler';

const postBuyHomeSurvey = async (survey: {
  response: Record<string, string | number>;
}) => {
  return apiHandler.post(`/survey?type=house-goal`, survey);
};

export default postBuyHomeSurvey;
