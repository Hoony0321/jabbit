import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { COLORS } from '@/src/client/theme/colors';
import { Flex, Stack, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement);

function BudgetBalanceGraph() {
  const data = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [COLORS.brand.blue.value, COLORS.blue[200].value],
        borderWidth: 1,
        borderColor: 'transparent',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
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
        <Doughnut data={data} options={options} width={270} height={270} />
        <Stack
          w="100%"
          gap="12px"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text textStyle="mobile_b1_semi">남은 예산</Text>
          <Text textStyle="mobile_h1" fontWeight={600}>
            3,000,000원
          </Text>
          <Text textStyle="mobile_b1_semi" color="font.600">
            / 3,000,000원
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default BudgetBalanceGraph;
