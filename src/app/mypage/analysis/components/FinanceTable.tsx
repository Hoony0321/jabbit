import { Flex, Text } from '@chakra-ui/react';
import './financeTable.css';
import {
  EvaluatedResult,
  FinancialRatioConfig,
} from '@/src/client/types/financial';

interface FinanceTableProps {
  ratioConstant: FinancialRatioConfig;
  evaluatedResult: EvaluatedResult[];
}

const FinanceTable = ({
  ratioConstant,
  evaluatedResult,
}: FinanceTableProps) => {
  return (
    <Flex
      flexDirection="column"
      gap="33px"
      p="28px"
      borderRadius="10px"
      border="2px solid var(--chakra-colors-main-line)"
    >
      <Text fontSize="20px" fontWeight="600" color="main.black_1">
        평가 결과
      </Text>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <td>평가 항목</td>
            <td>평가 결과</td>
            <td>나의 재무비율</td>
            <td>권장 재무비율</td>
          </tr>
        </thead>
        <tbody>
          {evaluatedResult.map((item: EvaluatedResult) => (
            <tr key={item.name}>
              <td>{ratioConstant[item.name].label}</td>
              <td className={item.evaluation ? 'fulfilled' : 'not-fulfilled'}>
                {item.evaluation ? '적정' : '부족'}
              </td>
              <td>{item.myRatio}%</td>
              <td className="recommended-ratio">
                {ratioConstant[item.name].displayText}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Flex>
  );
};
export default FinanceTable;
