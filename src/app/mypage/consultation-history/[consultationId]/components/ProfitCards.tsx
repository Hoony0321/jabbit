import { Box, Flex, Text } from '@chakra-ui/react';
import ProfitSVG from '@/public/assets/profit.svg';
import ChickenSVG from '@/public/assets/chicken.svg';
import CoffeeSVG from '@/public/assets/coffee.svg';
import { formatKoreanCurrency } from '@/src/client/utils/currency';
import { calculateByItem } from '@/src/client/utils/number';

interface ProfitCardsProps {
  profits: {
    today: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  profitInfo: {
    title: string;
    contents: string[];
  };
}

const ProfitCards = ({ profits, profitInfo }: ProfitCardsProps) => {
  return (
    <Flex w="100%" gap="18px" flexDir="column">
      <Flex gap="18px">
        <Flex
          p="28px"
          w="220px"
          h="220px"
          bg="#dfe3fd"
          borderRadius="10px"
          boxShadow="9px 4px 28px 0px rgba(0, 0, 0, 0.05)"
          flexDir="column"
          justifyContent="space-between"
        >
          <Box alignSelf="flex-start">
            <Text fontSize="18px" fontWeight="600" color="#8d8daf">
              오늘 당장 실행하면
            </Text>
            <Text fontSize="18px" fontWeight="600" color="primary">
              +{formatKoreanCurrency(profits.today)}원 만큼
            </Text>
            <Text fontSize="18px" fontWeight="600" color="#8d8daf">
              가치있어요
            </Text>
          </Box>
          <Box alignSelf="flex-end">
            <ProfitSVG />
          </Box>
        </Flex>

        <Flex flexDir="column" gap="18px">
          <Flex
            p="28px"
            w="234px"
            h="101px"
            bg="#f3f5ff"
            borderRadius="10px"
            boxShadow="9px 4px 28px 0px rgba(0, 0, 0, 0.05)"
            justifyContent="space-between"
          >
            <Box>
              <Text fontSize="18px" fontWeight="600" color="primary">
                치킨 {calculateByItem('chicken', profits.today)}마리 만큼
              </Text>
              <Text fontSize="18px" fontWeight="600" color="#8d8daf">
                가치있어요
              </Text>
            </Box>
            <ChickenSVG />
          </Flex>
          <Flex
            p="28px"
            w="234px"
            h="101px"
            bg="#f3f5ff"
            borderRadius="10px"
            boxShadow="9px 4px 28px 0px rgba(0, 0, 0, 0.05)"
            justifyContent="space-between"
          >
            <Box>
              <Text fontSize="18px" fontWeight="600" color="primary">
                커피 {calculateByItem('coffee', profits.today)}잔 만큼
              </Text>
              <Text fontSize="18px" fontWeight="600" color="#8d8daf">
                가치있어요
              </Text>
            </Box>
            <CoffeeSVG />
          </Flex>
        </Flex>

        <Flex
          p="28px"
          w="309px"
          h="220px"
          bg="#fff"
          borderRadius="10px"
          boxShadow="9px 4px 28px 0px rgba(0, 0, 0, 0.05)"
          border="1px solid var(--chakra-colors-main-line)"
          flexDir="column"
          justifyContent="space-between"
          gap="36px"
        >
          <Box>
            <Text fontSize="18px" fontWeight="600" color="main.black_1">
              미래로 환산하면
              <br />더 가치 있어요
            </Text>
          </Box>
          <Flex flexDir="column" gap="6px">
            <Flex justifyContent="space-between">
              <Text fontSize="16px" color="#868181">
                이번 주
              </Text>
              <Text fontSize="16px" color="main.black_2">
                <Text as="span">+{formatKoreanCurrency(profits.weekly)}</Text>{' '}
                원 이득
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontSize="16px" color="#868181">
                이번 달
              </Text>
              <Text fontSize="16px" color="main.black_2">
                <Text as="span">+{formatKoreanCurrency(profits.monthly)}</Text>{' '}
                원 이득
              </Text>
            </Flex>
            <Flex justifyContent="space-between" fontWeight="600">
              <Text fontSize="16px" color="#868181">
                올 해
              </Text>
              <Text fontSize="16px" color="main.black_2">
                <Text as="span" color="main.black_1" fontWeight="600">
                  +{formatKoreanCurrency(profits.yearly)}
                </Text>{' '}
                원 이득
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="132px"
        flexDir="column"
        gap="20px"
        borderRadius="10px"
        border="1px solid var(--chakra-colors-main-line)"
        boxShadow="9px 4px 28px 0px rgba(0, 0, 0, 0.05)"
        p="28px"
      >
        <Text fontSize="16px" fontWeight="600" color="#222">
          {profitInfo.title}
        </Text>
        <ul>
          {profitInfo.contents.map((content) => (
            <li
              key={content}
              style={{
                fontSize: '14px',
                color: '#868686',
                listStyle: 'disc',
                marginLeft: '22px',
              }}
            >
              {content}
            </li>
          ))}
        </ul>
      </Flex>
    </Flex>
  );
};

export default ProfitCards;
