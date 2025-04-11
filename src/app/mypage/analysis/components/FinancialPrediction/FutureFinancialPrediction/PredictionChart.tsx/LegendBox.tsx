import { Box, Flex, Text } from '@chakra-ui/react';

const Legend = ({ color, text }: { color: string; text: string }) => {
  return (
    <Flex flexDir="row" gap="8px">
      <Box
        width="21px"
        height="21px"
        backgroundColor={color}
        borderRadius="5px"
      />
      <Text fontSize="14px" fontWeight="medium" color="main.black_1">
        {text}
      </Text>
    </Flex>
  );
};

const LegendBox = () => {
  return (
    <Flex flexDir="row" gap="14px">
      <Legend color="main.black_6" text="현재" />
      <Legend color="primary" text="10년 뒤" />
    </Flex>
  );
};

export default LegendBox;
