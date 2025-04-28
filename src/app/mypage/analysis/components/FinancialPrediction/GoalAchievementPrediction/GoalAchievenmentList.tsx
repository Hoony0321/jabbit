import { SimpleGrid } from '@chakra-ui/react';
import GoalAchievementCard from './GoalAchievementCard';
import { FinancialPredictionGoalAchievementPrediction } from '@/src/server/types/domains';

interface GoalAchievenmentListProps {
  goalAchievementPredictions: FinancialPredictionGoalAchievementPrediction[];
}

const GoalAchievenmentList = ({
  goalAchievementPredictions,
}: GoalAchievenmentListProps) => {
  return (
    <SimpleGrid columns={3} gap="18px">
      {goalAchievementPredictions.map((goalAchievementPrediction) => (
        <GoalAchievementCard
          key={goalAchievementPrediction.title}
          {...goalAchievementPrediction}
        />
      ))}
    </SimpleGrid>
  );
};

export default GoalAchievenmentList;
