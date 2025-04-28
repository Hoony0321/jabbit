import { Flex } from '@chakra-ui/react';
import FutureFinancialPredictionSection from '../FinancialPrediction/FutureFinancialPrediction/FutureFinancialPredictionSection';
import GoalAchievementPredictionSection from '../FinancialPrediction/GoalAchievementPrediction/GoalAchievementPredictionSection';
import ConsultingSuggestionSection from '../FinancialPrediction/ConsultingSuggestionSection';
import { FinancialPredictionConsultingSuggestion } from '@/src/server/types/domains';
import { FinancialPredictionGoalAchievementPrediction } from '@/src/server/types/domains';
import { FinancialPredictionFutureFinancialPrediction } from '@/src/server/types/domains';

interface FinancialPredictionProps {
  futureFinancialPrediction: FinancialPredictionFutureFinancialPrediction;
  goalAchievementPredictions: FinancialPredictionGoalAchievementPrediction[];
  consultingSuggestion: FinancialPredictionConsultingSuggestion;
}

const FinancialPrediction = ({
  consultingSuggestion,
  futureFinancialPrediction,
  goalAchievementPredictions,
}: FinancialPredictionProps) => {
  return (
    <Flex flexDir="column" gap="64px" w="100%">
      <FutureFinancialPredictionSection
        futureFinancialPrediction={futureFinancialPrediction}
      />
      <GoalAchievementPredictionSection
        goalAchievementPredictions={goalAchievementPredictions}
      />
      <ConsultingSuggestionSection
        consultingSuggestion={consultingSuggestion}
      />
    </Flex>
  );
};

export default FinancialPrediction;
