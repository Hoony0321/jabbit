'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Flex, Stack } from '@chakra-ui/react';
import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';
import StepController from '@/src/app/ai/coach/_components/form/StepController';
import Step from '@/src/app/ai/coach/_components/form/Step';
import Question from '@/src/app/ai/coach/_components/form/Question';
import Answer from '@/src/app/ai/coach/_components/form/Answer';
import { buyHomeSurvey } from '@/src/app/ai/_constants/survey';
import { useBuyHomeSurveyStore } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';

const totalStep = 8;

function BuyHomeFormPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');
  const { setResponse, response } = useBuyHomeSurveyStore();

  const handleSelectClick = (answer: string | number) => {
    setResponse(currentStep, answer);
    goToNextPage();
  };
  const handleInputChange = (answer: string | number) => {
    const min = 1;
    const max = 50;
    const numAnswer = Number(answer);
    if (numAnswer < min || numAnswer > max) {
      setError('1과 50사이 값을 입력해주시기 바랍니다.');
      setResponse(currentStep, '');
    } else {
      setError('');
      setResponse(currentStep, answer);
    }
  };

  const handleInputEnter = () => {
    goToNextPage();
  };

  const goToNextPage = () => {
    if (currentStep === totalStep) {
      router.push('/ai/coach/form/buy-home/summary');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const isAnswerValid = (step: number) => {
    const answer = response[`q${step}`];
    return answer !== undefined && answer !== '' && answer !== null;
  };

  const renderStepContent = () => {
    const currentQuestion = buyHomeSurvey.find((q) => q.id === currentStep);

    if (!currentQuestion) return null;

    const { title, description, type, answerChoices } = currentQuestion;

    return (
      <Stack gap="200px">
        <Question title={title} description={description} />
        <Answer
          type={
            type as 'input-year' | 'input-area' | 'choice-full' | 'choice-grid'
          }
          answerChoices={answerChoices}
          onClick={handleSelectClick}
          onChange={handleInputChange}
          onEnter={handleInputEnter}
          selectedAnswers={response}
          currentStep={currentStep}
          error={error}
        />
      </Stack>
    );
  };
  return (
    <Box pt="60px">
      <Stack direction="column" gap="36px" px="20px">
        <ProgressBar progress={(currentStep / totalStep) * 100} />
        <Flex alignItems="center" justifyContent="space-between">
          <Step currentStep={currentStep} totalStep={totalStep} />
          <StepController
            currentStep={currentStep}
            totalStep={totalStep}
            onPrevStep={() => setCurrentStep(currentStep - 1)}
            onNextStep={() => setCurrentStep(currentStep + 1)}
            isAnswered={isAnswerValid(currentStep)}
          />
        </Flex>
        {renderStepContent()}
      </Stack>
    </Box>
  );
}

export default BuyHomeFormPage;
