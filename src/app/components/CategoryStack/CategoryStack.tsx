'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flex, HStack, Text } from '@chakra-ui/react';

import ConsultingSVG from '@/src/client/assets/consulting.svg';
import InsuranceSVG from '@/src/client/assets/insurance.svg';
import DebtSVG from '@/src/client/assets/debt.svg';
import ExpenditureSVG from '@/src/client/assets/expenditure_management.svg';
import InvestmentSVG from '@/src/client/assets/invest_consulting.svg';
import RealEstateSVG from '@/src/client/assets/real_estate.svg';
import SeedMoneySVG from '@/src/client/assets/seed_money.svg';
import { COLORS } from '@/src/client/theme/colors';
import HoverMenu from './HoverMenu/HoverMenu';

const CATEGORY_ITEMS = [
  {
    title: '종합재무상담',
    image: (
      <ConsultingSVG
        width="100%"
        height="100%"
        color={COLORS.brand.black.value}
      />
    ),
  },
  {
    title: '보험진단',
    image: <InsuranceSVG width="100%" height="100%" />,
  },
  {
    title: '부채상환',
    image: <DebtSVG width="100%" height="100%" />,
  },
  {
    title: '투자점검',
    image: <InvestmentSVG width="100%" height="100%" />,
  },
  {
    title: '종잣돈 마련',
    image: <SeedMoneySVG width="100%" height="100%" />,
  },
  {
    title: '지출관리',
    image: <ExpenditureSVG width="100%" height="100%" />,
  },

  {
    title: '부동산',
    image: <RealEstateSVG width="100%" height="100%" />,
  },
];

const CategoryStack = () => {
  const [hover, setHover] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const router = useRouter();

  const handleCategoryClick = (title: string) => {
    router.push(`/experts?specialty=${encodeURIComponent(title)}`);
  };

  return (
    <Flex flexDirection="column" gap="114px" width="1280px" position="relative">
      <Text textStyle="xxl" color="main.black_1">
        어떤 재무고민이 있으신가요?
      </Text>

      <HStack justifyContent="space-between">
        {CATEGORY_ITEMS.map((item, index) => (
          <Flex
            flexDirection="column"
            alignItems="center"
            key={index}
            gap="24px"
            onMouseEnter={() => {
              setHover(true);
              setSelectedTag(item.title);
            }}
            onMouseLeave={() => {
              setHover(false);
              setSelectedTag('');
            }}
            onClick={() => handleCategoryClick(item.title)}
            cursor="pointer"
          >
            <Flex
              width="100px"
              height="100px"
              justifyContent="center"
              alignItems="center"
              borderRadius="15px"
              _hover={{
                backgroundColor: '#9DA3C51A',
              }}
              transition="all 0.3s ease-in-out"
            >
              {item.image}
            </Flex>
            <Text textStyle="lg" color="main.black_1">
              {item.title}
            </Text>
          </Flex>
        ))}
      </HStack>
      <HoverMenu tag={selectedTag} hover={hover} />
    </Flex>
  );
};

export default CategoryStack;
