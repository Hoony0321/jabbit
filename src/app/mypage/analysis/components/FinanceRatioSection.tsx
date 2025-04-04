import { Flex, Text } from '@chakra-ui/react';
import FinanceTable from './FinanceTable';
import TableBadge from './TableBadge';

const FinanceRatioSection = () => {
  return (
    <Flex flexDirection="column" gap="36px">
      <Flex flexDirection="column" gap="12px">
        <Text fontSize="24px" fontWeight="600" color="main.black_1">
          재무비율 진단
        </Text>
        <Text fontSize="16px" fontWeight="500" color="main.black_3">
          매월 소득을 잘 쓰고 있는지 알려드릴게요
        </Text>
      </Flex>
      <FinanceTable title="평가 결과" />
      <ul>
        <li
          style={{
            listStyle: 'disc',
            fontSize: '16px',
            marginLeft: '22px',
            marginBottom: '20px',
          }}
        >
          <Flex gap="10px">
            <Text>잘하고 있어요</Text>
            <Flex gap="4px">
              <TableBadge title="지출" evaluation={true} />
              <TableBadge title="부채 상환" evaluation={true} />
            </Flex>
          </Flex>
        </li>
        <li style={{ listStyle: 'disc', fontSize: '16px', marginLeft: '22px' }}>
          <Flex gap="10px">
            <Text>보완해야 돼요</Text>
            <Flex gap="4px">
              <TableBadge title="보험료" evaluation={false} />
              <TableBadge title="저축" evaluation={false} />
              <TableBadge title="투자" evaluation={false} />
              <TableBadge title="노후 대비" evaluation={false} />
              <TableBadge title="대출 상환" evaluation={false} />
            </Flex>
          </Flex>
        </li>
      </ul>
    </Flex>
  );
};

export default FinanceRatioSection;
