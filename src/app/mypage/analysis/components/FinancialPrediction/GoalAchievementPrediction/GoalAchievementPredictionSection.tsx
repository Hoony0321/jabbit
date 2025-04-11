import { Flex } from '@chakra-ui/react';
import Title from './Title';
import GoalAchievenmentList from './GoalAchievenmentList';

export interface GoalAchievementInfo {
  title: string;
  targetDate: Date;
  targetAmount: number;
  estimatedAchievementDate: Date;
}

interface GoalAchievementPredictionSectionProps {
  goalAchievementInfos: GoalAchievementInfo[];
}

const GoalAchievementPredictionSection = ({
  goalAchievementInfos,
}: GoalAchievementPredictionSectionProps) => {
  return (
    <Flex flexDir="column" gap="24px">
      <Title />
      <GoalAchievenmentList goalAchievementInfos={goalAchievementInfos} />
    </Flex>
  );
};

export default GoalAchievementPredictionSection;
