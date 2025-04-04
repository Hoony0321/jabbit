import { Flex, Text } from '@chakra-ui/react';
import './financeTable.css';
interface FinanceTableProps {
  title: string;
}

const FinanceTable = ({ title }: FinanceTableProps) => {
  return (
    <Flex
      flexDirection="column"
      gap="33px"
      p="28px"
      borderRadius="10px"
      border="2px solid var(--chakra-colors-main-line)"
    >
      <Text fontSize="20px" fontWeight="600" color="main.black_1">
        {title}
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className={item.isFulfilled ? 'fulfilled' : 'not-fulfilled'}>
                {item.evaluation}
              </td>
              <td>{item.myRatio}%</td>
              <td className="recommended-ratio">{item.recommendedRatio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Flex>
  );
};

const items = [
  {
    id: 1,
    name: '지출',
    evaluation: '적정',
    myRatio: 61.2,
    recommendedRatio: '70% 이하',
    isFulfilled: true,
  },
  {
    id: 2,
    name: '보험료',
    evaluation: '적정',
    myRatio: 999.99,
    recommendedRatio: 999.99,
    isFulfilled: false,
  },
  {
    id: 3,
    name: '저축',
    evaluation: '적정',
    myRatio: 999.99,
    recommendedRatio: 999.99,
  },
  {
    id: 4,
    name: '투자',
    evaluation: '적정',
    myRatio: 999.99,
    recommendedRatio: 999.99,
  },
  {
    id: 5,
    name: '부채 상환',
    evaluation: '적정',
    myRatio: 999.99,
    recommendedRatio: 999.99,
  },
  {
    id: 6,
    name: '노후 대비',
    evaluation: '적정',
    myRatio: 999.99,
    recommendedRatio: 999.99,
  },
  {
    id: 7,
    name: '비상자금 보유',
    evaluation: '적정',
    myRatio: 999.99,
    recommendedRatio: 999.99,
  },
];
export default FinanceTable;
