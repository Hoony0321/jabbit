'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import ProgressBar from '../_components/form/ProgressBar';
import { useState } from 'react';
import StepController from '../_components/form/StepController';
import Step from '../_components/form/Step';
import Question from '../_components/form/Question';

const totalStep = 12;

function CoachFormPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Question
            title="10년 이내에 이루고 싶은 재무 목표는 무엇인가요?"
            description="현재는 ‘내 집 마련’ 목표 설정만 도와드려요."
          />
        );
      default:
        return null;
    }
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

        {/* step content */}
        {renderStepContent()}
      </Stack>
    </Box>
  );
}

export default CoachFormPage;
