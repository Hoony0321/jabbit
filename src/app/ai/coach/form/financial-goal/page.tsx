'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import ProgressBar from '../../_components/form/ProgressBar';
import { useState } from 'react';
import StepController from '../../_components/form/StepController';
import Step from '../../_components/form/Step';
import Question from '../../_components/form/Question';
import Answer from '../../_components/form/Answer';
import SurveyQuestions from '../../../../data/financial-goal-survey.json';
import Modal from '../../../../common/Modal/Modal';
import { usefinancialGoalSurveyStore } from '../../../../../client/store/survey/financialGoalSurveyStore';
import { useRouter } from 'next/navigation';
import postFinancialGoalSurvey from '../../../../../client/lib/api/postFinancialGoalSurvey';
const totalStep = 12;

function FinancialGoalFormPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { setAnswer, answers } = usefinancialGoalSurveyStore();
  console.log(answers);

  const handleConfirm = () => {
    setIsOpen(false);
    postFinancialGoalSurvey(answers);
    router.push('/ai/coach');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAnswer = (answer: string | number, text: string) => {
    setAnswer(currentStep, answer, text);

    if (currentStep === totalStep) {
      setIsOpen(true);
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
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        content="제출할까요?"
        confirmText="확인"
        cancelText="취소"
      />
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
    </>
  );
}

export default FinancialGoalFormPage;
