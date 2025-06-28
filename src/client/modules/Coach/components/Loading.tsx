import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";

export default function Loading({ message }: { message: string }) {
    const typing = keyframes`
    from { width: 0 }
    to { width: ${message.length}ch }
  `;
  
    const blink = keyframes`
    0%, 100% { border-color: transparent }
    50% { border-color: black }
  `;
  
    const blinkImage = keyframes`
    0%, 100% { opacity: 1 }
    50% { opacity: 0 }
  `;
    return (
      <Flex
        align="center"
        gap="8px"
        padding="24px 30px"
        justifyContent="flex-start"
      >
        <Box animation={`${blinkImage} 2s ease-in-out infinite`}>
          <Image
            src="/assets/ico_money.svg"
            alt="돈 아이콘"
            width={24}
            height={24}
            priority={false}
            style={{ objectFit: 'contain' }}
          />
        </Box>
  
        <Text
          textStyle="mobile_b2"
          color="font.800"
          whiteSpace="nowrap"
          overflow="hidden"
          borderRight="1px solid"
          animation={`${typing} 3s steps(${message.length}), ${blink} 1s step-end infinite`}
        >
          {message}
        </Text>
      </Flex>
    );
  }