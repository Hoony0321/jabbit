import { Flex, Text } from '@chakra-ui/react';

interface StepProps {
  currentStep: number;
  totalStep: number;
}

function Step({ currentStep, totalStep }: StepProps) {
  return (
    <Flex gap="8px" alignItems="center">
      <Text color="brand.blue" textStyle="mobile_d1_bold">
        {currentStep}
      </Text>
      <Text color="font.600" textStyle="mobile_h2">
        /{totalStep}
      </Text>
    </Flex>
  );
}

export default Step;
