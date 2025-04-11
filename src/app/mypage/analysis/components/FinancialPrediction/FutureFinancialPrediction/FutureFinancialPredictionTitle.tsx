import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import InfoTooltipCircleSVG from '@/public/assets/info_tooltip_circle.svg';

const InfoTooltip = () => {
  return (
    <Tooltip.Root openDelay={0} closeDelay={100}>
      <Tooltip.Trigger>
        <InfoTooltipCircleSVG />
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content
          bgColor="#676767"
          color="#FDFDFD"
          p="20px"
          borderRadius="5px"
          fontSize="12px"
          fontWeight="medium"
          boxShadow="md"
        >
          <Flex flexDir="column">
            <Text>• 전년도 우리나라 평균을 기준으로 산출했어요</Text>
            <Box h="4px" />
            <Flex flexDir="column" color="#CECCCC" ml="12px">
              <Text>• 소득 매년 5%씩 증가</Text>
              <Text>• 자산 매년 2.5%씩 증가</Text>
              <Text>• 물가 매년 3%씩 증가</Text>
            </Flex>
            <Box h="16px" />
            <Text>• 현재 재무습관을 유지한다고 가정했어요</Text>
            <Box h="4px" />
            <Flex flexDir="column" color="#CECCCC" ml="12px">
              <Text>• 저축/투자/부채 상환 비율 등</Text>
            </Flex>
          </Flex>
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};

const FutureFinancialPredictionTitle = () => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="row" alignItems="center">
        <Text color="main.black_1" fontSize="24px" fontWeight="semibold">
          미래 재무 예측
        </Text>
        <Box w="14px" />
        <InfoTooltip />
        <Box w="4px" />
        <Text color="main.black_5" fontSize="18px" fontWeight="semibold">
          예측 기준?
        </Text>
      </Flex>
      <Box h="12px" />
      <Text color="main.black_3" fontSize="16px" fontWeight="medium">
        현재 현금흐름과 보유한 자산 및 부채로 미래를 예측해 드릴게요
      </Text>
    </Flex>
  );
};

export default FutureFinancialPredictionTitle;
