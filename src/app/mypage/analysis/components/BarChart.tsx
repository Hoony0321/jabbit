import { Flex } from '@chakra-ui/react';

interface BarChartProps {
  firstRatio: number;
  secondRatio: number;
  thirdRatio: number;
}

const BarChart = ({ firstRatio, secondRatio, thirdRatio }: BarChartProps) => {
  return (
    <Flex w="100%" h="45px" gap="4px">
      <Flex
        w={`${firstRatio}%`}
        h="100%"
        bg="primary"
        borderRadius="5px 0px 0px 5px"
        bgColor="#F0A57D"
      />
      <Flex w={`${secondRatio}%`} h="100%" bg="primary" bgColor="#D1F0B5" />
      <Flex
        w={`${thirdRatio}%`}
        h="100%"
        bg="primary"
        borderRadius="0px 5px 5px 0px"
        bgColor="#1D5E70"
      />
    </Flex>
  );
};

export default BarChart;
