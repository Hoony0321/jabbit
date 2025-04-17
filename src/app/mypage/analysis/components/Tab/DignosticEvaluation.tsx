import { Flex } from '@chakra-ui/react';
import LifeCycleSection from '../LifeCycleSection';
import FinanceRatioSection from '../FinanceRatioSection';
import GroupComparisonSection from '../GroupComparisonRaderSection/GroupComparisonSection';
import { GroupComparison } from '@/src/client/types/financial';
interface DignosticEvaluationProps {
  birthYear: number;
  mainInvestmentStrategies: string[];
  mainFinancialIssues: string[];
  financialGoal: {
    goal: string;
    recommendedGoals: string[];
    advices: string[];
  };
  financialRatios: {
    expense: number;
    insurance: number;
    saving: number;
    investment: number;
    debtRepayment: number;
    retirement: number;
  };
  groupComparison: GroupComparison;
}

const DignosticEvaluation = ({
  birthYear,
  financialGoal,
  financialRatios,
  groupComparison,
}: DignosticEvaluationProps) => {
  return (
    <Flex flexDirection="column" gap="64px">
      <LifeCycleSection birthYear={birthYear} financialGoal={financialGoal} />
      <GroupComparisonSection groupComparison={groupComparison} />
      <FinanceRatioSection
        financialRatios={financialRatios}
        birthYear={birthYear}
      />
    </Flex>
  );
};

export default DignosticEvaluation;
