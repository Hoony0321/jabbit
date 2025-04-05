import { calculateDebtToAssetRatio } from '@/src/client/services/analysis/calculations';
import { Flex, Text } from '@chakra-ui/react';
import HalfPieChart from './HalfPieChart';
import { formatKoreanCurrency } from '@/src/client/utils/currency';
import RatioWithColorBox from './RatioWithColorBox';

interface AssetAndDebtChartProps {
  totalAssets: number;
  debt: number;
  netWorth: number;
}

const AssetAndDebtChart = ({
  totalAssets,
  debt,
  netWorth,
}: AssetAndDebtChartProps) => {
  const { debtToAssetRatio, netWorthRatio } = calculateDebtToAssetRatio(
    totalAssets,
    debt,
  );
  return (
    <Flex
      w="100%"
      h="100%"
      borderRadius="10px"
      border="2px solid var(--chakra-colors-main-line)"
      flexDirection="column"
      gap="40px"
      p="28px"
    >
      <Flex flexDirection="column" gap="12px">
        <Text fontSize="20px" fontWeight="600">
          자산/부채
        </Text>
        <Text fontSize="18px" fontWeight="500">
          총 자산 {formatKoreanCurrency(totalAssets)}원
        </Text>
      </Flex>
      <HalfPieChart firstRatio={netWorthRatio} secondRatio={debtToAssetRatio} />
      <Flex flexDirection="column" gap="17px">
        <RatioWithColorBox
          color="#fbde8c"
          ratio={netWorthRatio}
          text="순자산"
          value={netWorth}
        />
        <RatioWithColorBox
          color="#5751be"
          ratio={debtToAssetRatio}
          text="부채"
          value={debt}
        />
      </Flex>
    </Flex>
  );
};

export default AssetAndDebtChart;
