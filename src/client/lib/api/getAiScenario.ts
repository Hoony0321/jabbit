type ContentPayload = 'SCENARIO' | 'PLAN' | 'ROUTINE' | 'WEEKLY-FEEDBACK';

const getAiScenario = async (payload: ContentPayload) => {
  const response = await fetch(`/api/survey/${payload}`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });

  return await response.json();
};

export default getAiScenario;
