import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

interface AccordionProps {
  goal: string;
  recommendedGoals: string[];
  advices: string[];
}

const Accordion = ({ goal, recommendedGoals, advices }: AccordionProps) => {
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
            bg="#F5F6FB"
            minWidth="67px"
            height="37px"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign="center"
              textStyle="sm"
              color="
            #83889F"
            >
              재무목표
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
                {goal}
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
              <Flex flexDirection="column" gap="20px">
                <Flex flexDirection="column" gap="12px">
                  <Text fontSize="14px" fontWeight="600" color="main.black_2">
                    ✅ 추천 재무목표
                  </Text>
                  <Flex flexDirection="column">
                    {recommendedGoals.map((goal, index) => (
                      <Text
                        key={index}
                        fontSize="14px"
                        fontWeight="500"
                        color="main.black_3"
                      >
                        {index + 1}. {goal}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
                <Flex flexDirection="column" gap="12px">
                  <Text fontSize="14px" fontWeight="600" color="main.black_2">
                    💡조언
                  </Text>
                  <Flex flexDirection="column">
                    <ul>
                      {advices.map((advice, index) => (
                        <li
                          style={{
                            listStyle: 'disc',
                            marginLeft: '22px',
                            color: '#868686',
                          }}
                          key={index}
                        >
                          <Text
                            fontSize="14px"
                            fontWeight="500"
                            color="main.black_3"
                          >
                            {advice}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </Flex>
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

export default Accordion;
