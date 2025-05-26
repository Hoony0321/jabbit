const getAiScenario = async () => {
  const response = await fetch(`/api/survey`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });

  return await response.json();
};

export default getAiScenario;
