import { Box } from '@chakra-ui/react';

interface ProgressBarProps {
  progress: number;
  backgroundColor?: string;
  height?: string;
}

function ProgressBar({ progress, backgroundColor, height }: ProgressBarProps) {
  return (
    <Box
      width="100%"
      height={height || '8px'}
      bgColor={backgroundColor || 'brand.white'}
      borderRadius="10px"
    >
      <Box
        width={`${progress}%`}
        height="100%"
        bgColor="brand.blue"
        borderRadius="10px"
      />
    </Box>
  );
}

export default ProgressBar;
