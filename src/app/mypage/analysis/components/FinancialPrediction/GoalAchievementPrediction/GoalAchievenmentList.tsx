import { SimpleGrid } from '@chakra-ui/react';
import GoalAchievementCard from './GoalAchievementCard';
import { GoalAchievementInfo } from './GoalAchievementPredictionSection';

interface GoalAchievenmentListProps {
  goalAchievementInfos: GoalAchievementInfo[];
}

const GoalAchievenmentList = ({
  goalAchievementInfos,
}: GoalAchievenmentListProps) => {
  return (
    <SimpleGrid columns={3} gap="18px">
      {goalAchievementInfos.map((goalAchievementInfo) => (
        <GoalAchievementCard
          key={goalAchievementInfo.title}
          {...goalAchievementInfo}
        />
      ))}
    </SimpleGrid>
  );
};

export default GoalAchievenmentList;
