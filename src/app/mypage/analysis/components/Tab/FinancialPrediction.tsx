import { Flex } from '@chakra-ui/react';
import FutureFinancialPredictionSection from '../FinancialPrediction/FutureFinancialPrediction/FutureFinancialPredictionSection';
import GoalAchievementPredictionSection from '../FinancialPrediction/GoalAchievementPrediction/GoalAchievementPredictionSection';
import ConsultingSuggestionSection from '../FinancialPrediction/ConsultingSuggestionSection';

interface FinancialPredictionProps {
  futureFinancialPrediction: any;
  goalAchievementPrediction: any;
  consultingSuggestion: any;
}

const FinancialPrediction = ({
  consultingSuggestion,
  futureFinancialPrediction,
  goalAchievementPrediction,
}: FinancialPredictionProps) => {
  return (
    <Flex flexDir="column" gap="64px" w="100%">
      <FutureFinancialPredictionSection
        futureFinancialPrediction={futureFinancialPrediction}
      />
      <GoalAchievementPredictionSection
        goalAchievementInfos={goalAchievementPrediction}
      />
      <ConsultingSuggestionSection
        consultingSuggestion={consultingSuggestion}
      />
    </Flex>
  );
};

export default FinancialPrediction;
