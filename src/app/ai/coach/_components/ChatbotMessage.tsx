'use client';

import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ChatbotMessageProps {
  message: string;
  buttonText: string;
  onButtonClick: () => void;
  isDisabled?: boolean;
  buttonDisabledText?: string;
}

function ChatbotMessage({
  message,
  buttonText,
  onButtonClick,
  isDisabled,
  buttonDisabledText,
}: ChatbotMessageProps) {
  return (
    <Stack direction="column" gap="8px" w="258px">
      <Flex alignItems="center" gap="8px">
        <Image
          src="/assets/ai_chat_profile.svg"
          alt="AI 코치"
          width={24}
          height={24}
        />
        <Text textStyle="mobile_cap" color="font.800">
          AI 코치 재빗
        </Text>
      </Flex>
      <Flex
        bgColor="brand.white"
        border="1.5px solid"
        borderColor="line.gray"
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
          bgColor="brand.blue"
          borderRadius="10px"
          onClick={onButtonClick}
          color="blue.100"
          textStyle="mobile_b1_semi"
          disabled={isDisabled}
          _disabled={{
            color: 'font.700',
            backgroundColor: 'blue_gray.100',
          }}
        >
          {buttonDisabledText && isDisabled ? buttonDisabledText : buttonText}
        </Button>
      </Flex>
    </Stack>
  );
}

export default ChatbotMessage;
