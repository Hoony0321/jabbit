'use client';
import { Flex } from '@chakra-ui/react';
import AnalysisTab from './components/AnalysisTab';
import { ANALYSIS_TAB_DATA } from '@/src/client/constants/MYPAGE';
import { useSearchParams } from 'next/navigation';
import Summary from './components/Tab/Summary';
import DignosticEvaluation from './components/Tab/DignosticEvaluation';

interface AnalysisClientProps {
  data: any;
}

const AnalysisClient = ({ data }: AnalysisClientProps) => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || ANALYSIS_TAB_DATA[0];

  const renderTabContent = () => {
    switch (currentTab) {
      case '요약':
        return (
          <Summary
            income={data.financialSummary.income}
            savings={data.financialSummary.savings}
            investment={data.financialSummary.investment}
            expenses={data.financialSummary.expenses}
            totalAssets={data.financialSummary.totalAssets}
            netWorth={data.financialSummary.netWorth}
            debt={data.financialSummary.debt}
          />
        );
      case '진단평가':
        return (
          <DignosticEvaluation
            birthYear={data.financialDiagnosis.birthYear}
            mainInvestmentStrategies={
              data.financialDiagnosis.mainInvestmentStrategies
            }
            mainFinancialIssues={data.financialDiagnosis.mainFinancialIssues}
            financialGoal={data.financialDiagnosis.financialGoal}
            financialRatios={data.financialDiagnosis.financialRatios}
            groupComparison={data.financialDiagnosis.groupComparison}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Flex flexDirection="column" w="100%">
      <AnalysisTab defaultTab={ANALYSIS_TAB_DATA[0]} />
      <Flex width="100%" mt="24px" mb="100px">
        {renderTabContent()}
      </Flex>
    </Flex>
  );
};

export default AnalysisClient;
