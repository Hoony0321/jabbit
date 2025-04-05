import { Flex } from '@chakra-ui/react';
import AssetAndDebtChart from '../AssetAndDebtChart';
import MonthlyCashFlowChart from '../MonthlyCashFlowChart';

interface FinancialSummaryProps {
  income: number;
  savings: number;
  investment: number;
  expenses: number;
  totalAssets: number;
  netWorth: number;
  debt: number;
}

const Summary = ({
  income,
  savings,
  investment,
  expenses,
  totalAssets,
  netWorth,
  debt,
}: FinancialSummaryProps) => {
  return (
    <Flex w="100%" gap="18px">
      <MonthlyCashFlowChart
        monthlyIncome={income}
        monthlySaving={savings}
        monthlyInvestment={investment}
        monthlyExpense={expenses}
      />
      <AssetAndDebtChart
        totalAssets={totalAssets}
        netWorth={netWorth}
        debt={debt}
      />
    </Flex>
  );
};

export default Summary;
