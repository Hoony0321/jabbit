'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Flex, Stack } from '@chakra-ui/react';
import ProgressBar from '../../_components/form/ProgressBar';
import StepController from '../../_components/form/StepController';
import Step from '../../_components/form/Step';
import Question from '../../_components/form/Question';
import Answer from '../../_components/form/Answer';
import SurveyQuestions from '../../../../data/buy-home-survey.json';
import { useBuyHomeSurveyStore } from '../../../../../client/store/survey/buyHomeSurveyStore';

const totalStep = 8;

function BuyHomeFormPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const { setAnswer, answers } = useBuyHomeSurveyStore();

  const handleAnswer = (answer: string | number, text: string) => {
    setAnswer(currentStep, answer, text);

    if (currentStep === totalStep) {
      router.push('/ai/coach/form/buy-home/summary');
    }
  };

  const renderStepContent = () => {
    const currentQuestion = SurveyQuestions.find((q) => q.id === currentStep);

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
          onAnswerSelect={handleAnswer}
          selectedAnswers={answers}
          currentStep={currentStep}
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
          />
        </Flex>
        {renderStepContent()}
      </Stack>
    </Box>
  );
}

export default BuyHomeFormPage;
