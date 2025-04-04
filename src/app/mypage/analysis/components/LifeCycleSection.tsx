import { Flex, Text } from '@chakra-ui/react';
import LifeCycleChart from './LifeCycleChart';
import Accordion from './Accordion';
import LifeCycleDescription from './LifeCycleDescription';
import { lifeCycleDescription } from '@/src/client/services/analysis/lifeCycle';

interface LifeCycleSectionProps {
  age: number;
}

const LifeCycleSection = ({ age }: LifeCycleSectionProps) => {
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
        goal="사회초년기에 속해있는 분들을 위한 재무목표를 추천드려요!"
        recommendedGoals={['전세 자금 마련하기', '결혼 자금 마련하기']}
        advices={[
          '사회초년기는 재무 습관을 형성하는 중요한 시기예요.',
          '작은 금액이라도 꾸준히 저축하고, 신용점수를 관리하며 미래에 대출 여력을 확보하는 것도 중요해요.',
          '가능하면 급여의 일정 비율을 저축하거나 투자하는 습관을 길러보세요!',
        ]}
      />
    </Flex>
  );
};

export default LifeCycleSection;
