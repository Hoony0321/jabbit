'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Modal from '@/src/app/common/Modal/Modal';
import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';
import StepController from '@/src/app/ai/coach/_components/form/StepController';
import Step from '@/src/app/ai/coach/_components/form/Step';
import Question from '@/src/app/ai/coach/_components/form/Question';
import Answer from '@/src/app/ai/coach/_components/form/Answer';
import { financialGoalSurvey } from '@/src/app/ai/_constants/survey';
import { useFinancialGoalSurveyStore } from '@/src/app/ai/coach/_store/financialGoalSurveyStore';
import { useGenerateAiSolutionStore } from '@/src/app/ai/coach/_store/generateAiSolutionStore';
import postAiContent from '@/src/client/lib/api/postAiContent';
import postFinancialGoalSurvey from '@/src/client/lib/api/postFinancialGoalSurvey';
import { mixpanelTrack } from '@/src/client/utils/mixpanelHelpers';
import { useAuthStore } from '@/src/client/store/authStore';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

const totalStep = 12;

function FinancialGoalFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { setResponse, response, submitSurvey } = useFinancialGoalSurveyStore();
  const { setScenarioRequested } = useGenerateAiSolutionStore();
  const router = useRouter();
  const { user } = useAuthStore();

  const handleConfirm = async () => {
    mixpanelTrack('코치탭', '제출하기 버튼 클릭', '제출하기 버튼', user);
    setIsOpen(false);
    submitSurvey();
    setScenarioRequested();
    try {
      await postFinancialGoalSurvey({ response });
    } catch (error) {
      console.error('설문 응답 전송 오류:', error);
    }

    try {
      await postAiContent({ contentType: 'SCENARIO' });
    } catch (error) {
      console.error('AI 콘텐츠 전송 오류:', error);
    }
    router.push(IDENTIFIER_TO_PATH_MAP['COACH_MAIN']);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelectClick = (answer: string | number) => {
    setResponse(currentStep, answer);
    goToNextPage();
  };

  const handleInputChange = (answer: string | number) => {
    setResponse(currentStep, answer);
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
    const answer = response[`q${step}`];
    return answer !== undefined && answer !== '' && answer !== null;
  };

  const renderStepContent = () => {
    const currentQuestion = financialGoalSurvey.find(
      (q) => q.id === currentStep,
    );

    if (!currentQuestion) return null;

    const { title, description, type, answerChoices } = currentQuestion;

    return (
      <Stack>
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
