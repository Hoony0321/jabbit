import { Flex } from '@chakra-ui/react';
import Title from './Title';
import GoalAchievenmentList from './GoalAchievenmentList';
import { FinancialPredictionGoalAchievementPrediction } from '@/src/server/types/domains';

interface GoalAchievementPredictionSectionProps {
  goalAchievementPredictions: FinancialPredictionGoalAchievementPrediction[];
}

const GoalAchievementPredictionSection = ({
  goalAchievementPredictions,
}: GoalAchievementPredictionSectionProps) => {
  return (
    <Flex flexDir="column" gap="24px">
      <Title />
      <GoalAchievenmentList
        goalAchievementPredictions={goalAchievementPredictions}
      />
    </Flex>
  );
};

export default GoalAchievementPredictionSection;
