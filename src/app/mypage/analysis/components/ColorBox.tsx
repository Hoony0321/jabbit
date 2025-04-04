import { Box } from '@chakra-ui/react';

interface ColorBoxProps {
  width?: string;
  height?: string;
  color: string;
}

const ColorBox = ({
  width = '25px',
  height = '25px',
  color,
}: ColorBoxProps) => {
  return <Box w={width} h={height} bg={color} borderRadius="4px" />;
};

export default ColorBox;
