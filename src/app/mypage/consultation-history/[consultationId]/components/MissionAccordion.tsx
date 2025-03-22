import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

interface MissionAccordionProps {
  rank: number;
  title: string;
  contents: string[];
  methods: string[];
}

const MissionAccordion = ({
  rank,
  title,
  contents,
  methods,
}: MissionAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
            bg="#FFFCF0"
            minWidth="67px"
            height="37px"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign="center"
              textStyle="sm"
              color="
            #B0AB9A"
            >
              미션# {rank}
            </Text>
          </Flex>

          <Flex flexDirection="column" justifyContent="center">
            <Flex minHeight="40px" alignItems="center">
              <Text
                textStyle="sm"
                color="#222"
                wordBreak="keep-all"
                fontWeight="600"
              >
                {title}
              </Text>
            </Flex>

            <Box
              overflow="hidden"
              maxHeight={isOpen ? '1400px' : '0'}
              marginTop={isOpen ? '16px' : '0'}
              transition={
                isOpen
                  ? 'max-height 0.5s ease-in-out, opacity 0.4s ease-in-out'
                  : 'max-height 0.5s ease-in-out, opacity 0.4s ease-in-out'
              }
              opacity={isOpen ? 1 : 0}
              transitionProperty="margin-top, max-height, opacity"
            >
              <Flex flexDirection="column" gap="20px">
                <Flex flexDirection="column" gap="12px">
                  <Text textStyle="sm" color="main.black_2" fontWeight="600">
                    📌 미션 내용
                  </Text>
                  <ul>
                    {contents.map((content) => (
                      <li
                        key={content}
                        style={{
                          fontSize: '14px',
                          color: '#868686',
                          listStyle: 'disc',
                          marginLeft: '22px',
                          fontWeight: '500',
                        }}
                      >
                        {content}
                      </li>
                    ))}
                  </ul>
                </Flex>
                <Flex flexDirection="column" gap="12px">
                  <Text textStyle="sm" color="main.black_2" fontWeight="600">
                    ✅ 미션 방법
                  </Text>
                  <Box>
                    {methods.map((method, index) => (
                      <Text key={method} textStyle="sm" color="main.black_3">
                        {index + 1}. {method}
                      </Text>
                    ))}
                  </Box>
                </Flex>
              </Flex>
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

export default MissionAccordion;
