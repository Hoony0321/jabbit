import { Flex } from '@chakra-ui/react';
import LifeCycleSection from '../LifeCycleSection';
import FinanceRatioSection from '../FinanceRatioSection';

const DignosticEvaluation = () => {
  return (
    <Flex flexDirection="column" gap="64px">
      <LifeCycleSection age={30} />
      <FinanceRatioSection />
    </Flex>
  );
};

export default DignosticEvaluation;
