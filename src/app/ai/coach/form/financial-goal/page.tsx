'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';
import { useState } from 'react';
import StepController from '@/src/app/ai/coach/_components/form/StepController';
import Step from '@/src/app/ai/coach/_components/form/Step';
import Question from '@/src/app/ai/coach/_components/form/Question';
import Answer from '@/src/app/ai/coach/_components/form/Answer';
import { financialGoalSurvey } from '@/src/client/types/survey';
import Modal from '@/src/app/common/Modal/Modal';
import { useFinancialGoalSurveyStore } from '@/src/client/store/survey/financialGoalSurveyStore';
import { useRouter } from 'next/navigation';
import postFinancialGoalSurvey from '@/src/client/lib/api/postFinancialGoalSurvey';
const totalStep = 12;

function FinancialGoalFormPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { setAnswer, answers } = useFinancialGoalSurveyStore();

  const handleConfirm = () => {
    setIsOpen(false);
    postFinancialGoalSurvey(answers);
    router.push('/ai/coach');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelectClick = (answer: string | number, text: string) => {
    setAnswer(currentStep, answer, text);
    goToNextPage();
  };

  const handleInputChange = (answer: string | number, text: string) => {
    setAnswer(currentStep, answer, text);
  };

  const handleInputEnter = () => {
    goToNextPage();
  };

  const goToNextPage = () => {
    if (currentStep === totalStep) {
      setIsOpen(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const isAnswerValid = (step: number) => {
    const answer = answers[step]?.answer;
    return answer !== undefined && answer !== '' && answer !== null;
  };

  const renderStepContent = () => {
    const currentQuestion = financialGoalSurvey.find(
      (q) => q.id === currentStep,
    );

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
              isAnswered={isAnswerValid(currentStep)}
            />
          </Flex>
          {renderStepContent()}
        </Stack>
      </Box>
    </>
  );
}

export default FinancialGoalFormPage;
