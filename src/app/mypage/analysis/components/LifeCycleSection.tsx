import { Flex, Text } from '@chakra-ui/react';
import LifeCycleChart from './LifeCycleChart';
import Accordion from './Accordion';
import LifeCycleDescription from './LifeCycleDescription';
import { lifeCycleDescription } from '@/src/client/services/analysis/lifeCycle';

interface LifeCycleSectionProps {
  birthYear: number;
  financialGoal: {
    goal: string;
    recommendedGoals: string[];
    advices: string[];
  };
}

const LifeCycleSection = ({
  birthYear,
  financialGoal,
}: LifeCycleSectionProps) => {
  const age = new Date().getFullYear() - birthYear;
  return (
    <Flex flexDirection="column" gap="36px">
      <Flex flexDirection="column" gap="12px">
        <Text fontSize="24px" fontWeight="600" color="main.black_1">
          생애주기 분석
        </Text>
        <Text fontSize="16px" fontWeight="500" color="main.black_3">
          태어나서 죽을 때 까지 단계를 나눠 현재를 보여드릴게요
        </Text>
      </Flex>
      <LifeCycleChart age={age} />
      <LifeCycleDescription {...lifeCycleDescription(age)} />
      <Accordion
        goal={financialGoal.goal}
        recommendedGoals={financialGoal.recommendedGoals}
        advices={financialGoal.advices}
      />
    </Flex>
  );
};

export default LifeCycleSection;
