'use client';
import { Flex } from '@chakra-ui/react';
import AnalysisTab from './components/AnalysisTab';
import { ANALYSIS_TAB_DATA } from '@/src/client/constants/MYPAGE';
import { useSearchParams } from 'next/navigation';
import Summary from './components/Tab/Summary';
import DignosticEvaluation from './components/Tab/DignosticEvaluation';
import FinancialPrediction from './components/Tab/FinancialPrediction';
import { UserFinancialAnalysis } from '@/src/server/types/domains';
import { getGroupComparison } from '@/src/client/services/analysis/getGroupComparison';
import getFinancialRatio from '@/src/client/services/analysis/getFinancialRatio';

interface AnalysisClientProps {
  userFinancialAnalysis: UserFinancialAnalysis;
}

const AnalysisClient = ({ userFinancialAnalysis }: AnalysisClientProps) => {
  const searchParams = useSearchParams();

  const availableTabs = ANALYSIS_TAB_DATA.filter((tab) => {
    if (tab === '요약') {
      return userFinancialAnalysis.user_financial_info ? true : false;
    }
    if (tab === '진단평가') {
      return userFinancialAnalysis.user_financial_diagnosis ? true : false;
    }
    if (tab === '미래예측') {
      return userFinancialAnalysis.user_financial_prediction ? true : false;
    }
    return false;
  });

  const currentTab = searchParams.get('tab') || availableTabs[0];

  const renderTabContent = () => {
    switch (currentTab) {
      case '요약':
        return (
          <Summary
            income={userFinancialAnalysis.user_financial_info!.monthly_income}
            savings={userFinancialAnalysis.user_financial_info!.monthly_savings}
            investment={
              userFinancialAnalysis.user_financial_info!.monthly_investment
            }
            expenses={
              userFinancialAnalysis.user_financial_info!.monthly_expenses
            }
            netWorth={userFinancialAnalysis.user_financial_info!.net_worth}
            debt={userFinancialAnalysis.user_financial_info!.total_debt}
          />
        );
      case '진단평가':
        return (
          <DignosticEvaluation
            financialGoal={
              userFinancialAnalysis.user_financial_diagnosis!.financial_goal
            }
            mainInvestmentStrategies={
              userFinancialAnalysis.user_financial_diagnosis!
                .main_investment_strategies
            }
            mainFinancialIssues={
              userFinancialAnalysis.user_financial_diagnosis!
                .main_financial_issues
            }
            birthYear={userFinancialAnalysis.birth_year || 1998} // TODO : 나중에 birth_year 값 추가 후 삭제
            groupComparison={getGroupComparison(
              userFinancialAnalysis.user_financial_info!,
            )}
            financialRatios={getFinancialRatio(
              userFinancialAnalysis.user_financial_info!,
            )}
          />
        );
      case '미래예측':
        return (
          <FinancialPrediction
            futureFinancialPrediction={
              userFinancialAnalysis.user_financial_prediction!
                .future_financial_prediction
            }
            goalAchievementPredictions={
              userFinancialAnalysis.user_financial_prediction!
                .goal_achievement_predictions
            }
            consultingSuggestion={
              userFinancialAnalysis.user_financial_prediction!
                .consulting_suggestion
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <Flex flexDirection="column" w="100%">
      <AnalysisTab availableTabs={availableTabs} />
      <Flex width="100%" mt="24px" mb="100px">
        {renderTabContent()}
      </Flex>
    </Flex>
  );
};

export default AnalysisClient;
