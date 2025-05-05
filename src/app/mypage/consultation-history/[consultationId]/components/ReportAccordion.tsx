import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

interface ReportAccordionProps {
  rank: number;
  title: string;
  description: string;
  isMainProposal: boolean;
}

const ReportAccordion = ({
  rank,
  title,
  description,
  isMainProposal,
}: ReportAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const badgeTitle = isMainProposal ? rank + '순위' : '기타';

  return (
    <Flex
      border="2px solid var(--chakra-colors-main-line)"
      flexDirection="column"
      borderRadius="10px"
      padding="13px 20px"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex justifyContent="space-between" position="relative">
        <Flex gap="44px" flex="1" pr="30px">
          <Flex
            borderRadius="10px"
            bg="#F5F6FB"
            minWidth="67px"
            height="37px"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign="center"
              textStyle="xs"
              color="
            #83889F"
            >
              {badgeTitle}
            </Text>
          </Flex>

          <Flex flexDirection="column" justifyContent="center">
            <Flex minHeight="40px" alignItems="center">
              <Text
                textStyle="xs"
                color="#222"
                wordBreak="keep-all"
                fontWeight="600"
              >
                {title}
              </Text>
            </Flex>
            <Box
              overflow="hidden"
              maxHeight={isOpen ? '1000px' : '0'}
              paddingTop={isOpen ? '14px' : '0'}
              transition={
                isOpen
                  ? 'max-height 0.5s ease-in-out, opacity 0.4s ease-in-out'
                  : 'max-height 0.5s ease-in-out, padding-top 0.4s ease-in-out  '
              }
              opacity={isOpen ? 1 : 0}
              transitionProperty="padding-top,max-height, opacity"
            >
              <Text textStyle="xs" color="main.black_2" whiteSpace="pre-wrap">
                {description}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box position="absolute" right="0" top="14px">
          <Image
            src="/assets/arrow.svg"
            alt="arrow-right"
            width={18}
            height={10}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ReportAccordion;
