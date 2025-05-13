import { Button, Flex } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

interface StepControllerProps {
  currentStep: number;
  totalStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
}

function StepController({
  currentStep,
  totalStep,
  onPrevStep,
  onNextStep,
}: StepControllerProps) {
  return (
    <Flex gap="16px" alignItems="center">
      <Button
        p="0"
        width="32px"
        height="32px"
        borderRadius="5px"
        bgColor="brand.white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onPrevStep}
        _disabled={{ opacity: 0.4 }}
        disabled={currentStep === 1}
        color="font.700"
      >
        <LuChevronLeft color="inherit" width="24px" height="24px" />
      </Button>
      <Button
        p="0"
        width="32px"
        height="32px"
        borderRadius="5px"
        bgColor="brand.white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onNextStep}
        _disabled={{ opacity: 0.4 }}
        disabled={currentStep === totalStep}
        color="font.700"
      >
        <LuChevronRight color="inherit" width="24px" height="24px" />
      </Button>
    </Flex>
  );
}

export default StepController;
