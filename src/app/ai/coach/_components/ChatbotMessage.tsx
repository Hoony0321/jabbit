'use client';

import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';

interface ChatbotMessageProps {
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

function ChatbotMessage({
  message,
  buttonText,
  onButtonClick,
}: ChatbotMessageProps) {
  return (
    <Stack direction="column" gap="8px" w="258px">
      <Flex alignItems="center" gap="8px">
        <Box boxSize="24px" bgColor="red.100" borderRadius="50%" />
        <Text textStyle="mobile_cap" color="font.800">
          AI 코치 재빗
        </Text>
      </Flex>
      <Flex
        bgColor="brand.white"
        border="1.5px solid"
        borderColor="gray.200"
        borderRadius="20px"
        px="12px"
        py="16px"
        gap="20px"
        flexDirection="column"
      >
        <Text color="font.900" textStyle="mobile_b1_med">
          {message}
        </Text>
        <Button
          h="40px"
          bgColor="blue.200"
          borderRadius="10px"
          onClick={onButtonClick}
          color="blue.700"
          textStyle="mobile_b1_semi"
        >
          {buttonText}
        </Button>
      </Flex>
    </Stack>
  );
}

export default ChatbotMessage;
