import { Box } from '@chakra-ui/react';

function ProgressBar({ progress }: { progress: number }) {
  return (
    <Box width="100%" height="8px" bgColor="brand.white" borderRadius="10px">
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
