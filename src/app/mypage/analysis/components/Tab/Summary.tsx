import { Flex } from '@chakra-ui/react';
import AssetAndDebtChart from '../AssetAndDebtChart';
import MonthlyCashFlowChart from '../MonthlyCashFlowChart';

const Summary = () => {
  return (
    <Flex w="100%" gap="18px">
      <MonthlyCashFlowChart
        monthlyIncome={4016667}
        monthlySaving={616667}
        monthlyInvestment={1259333}
        monthlyExpense={2140667}
      />
      <AssetAndDebtChart totalAsset={14480000} totalDebt={12300000} />
    </Flex>
  );
};

export default Summary;
