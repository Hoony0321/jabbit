import { useRouter } from 'next/navigation';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Flex, Stack, Text } from '@chakra-ui/react';

import { COLORS } from '@/src/client/theme/colors';
import ChevronRightSVG from '@/src/client/assets/chevron-right.svg';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import { useGetBudget } from '../../hooks/accountBook.query';

ChartJS.register(ArcElement);

function BudgetBalanceGraph() {
  const router = useRouter();
  const { data } = useGetBudget();

  const { totalBudget, totalSpent } = data.body;
  const leftBudget = totalBudget - totalSpent;

  const chartData = {
    datasets: [
      {
        data: [Math.max(leftBudget, 0), totalSpent],
        backgroundColor: [COLORS.brand.blue.value, COLORS.blue_gray[200].value],
        borderWidth: 1,
        borderColor: 'transparent',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
  };

  const handleClick = () => {
    router.push(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_BUDGET_SETTING']);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="335px"
      borderRadius="10px"
      bgColor="blue.200"
    >
      <Flex
        maxW="270px"
        maxH="270px"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Doughnut data={chartData} options={options} width={270} height={270} />

        <Stack
          w="100%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          gap="12px"
          textAlign="center"
          onClick={handleClick}
          cursor="pointer"
        >
          <Text textStyle="mobile_b1_semi">남은 예산</Text>
          <Flex gap="6px" alignItems="center" justifyContent="center" pl="10px">
            <Text textStyle="mobile_h1" fontWeight={600}>
              {leftBudget.toLocaleString()}원
            </Text>
            <ChevronRightSVG width={24} height={24} />
          </Flex>
          <Text textStyle="mobile_b1_semi" color="font.600">
            {`/ ${totalBudget.toLocaleString()}원`}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default BudgetBalanceGraph;
