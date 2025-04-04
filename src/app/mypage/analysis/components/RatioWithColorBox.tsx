import { Flex, Text } from '@chakra-ui/react';
import ColorBox from './ColorBox';
import { formatKoreanCurrency } from '@/src/client/utils/currency';

interface RatioWithColorBoxProps {
  color: string;
  ratio: number;
  text: string;
  value: number;
}

const RatioWithColorBox = ({
  color,
  ratio,
  text,
  value,
}: RatioWithColorBoxProps) => {
  return (
    <Flex justifyContent="space-between">
      <Flex gap="10px">
        <ColorBox color={color} />
        <Text fontSize="16px" fontWeight="500">
          {text}
        </Text>
        <Text fontSize="16px" fontWeight="500" color="main.black_4">
          {ratio}%
        </Text>
      </Flex>
      <Text fontSize="16px" fontWeight="500">
        {formatKoreanCurrency(value)}원
      </Text>
    </Flex>
  );
};

export default RatioWithColorBox;
