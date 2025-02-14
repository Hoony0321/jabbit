'use client';

import { Flex, HStack, Text } from '@chakra-ui/react';
import ConsultingSVG from '@/public/assets/consulting.svg';
import InsuranceSVG from '@/public/assets/insurance.svg';
import DebtSVG from '@/public/assets/debt.svg';
import ExpenditureSVG from '@/public/assets/expenditure_management.svg';
import InvestmentSVG from '@/public/assets/invest_consulting.svg';
import RealEstateSVG from '@/public/assets/realestate.svg';
import SeedMoneySVG from '@/public/assets/seed_money.svg';
import { useState } from 'react';
import HoverMenu from './HoverMenu/HoverMenu';

const CATEGORY_ITEMS = [
  {
    title: '종합재무상담',
    image: <ConsultingSVG />,
  },
  {
    title: '보험진단',
    image: <InsuranceSVG />,
  },
  {
    title: '부채상환',
    image: <DebtSVG />,
  },
  {
    title: '투자점검',
    image: <InvestmentSVG />,
  },
  {
    title: '종잣돈 마련',
    image: <SeedMoneySVG />,
  },
  {
    title: '지출관리',
    image: <ExpenditureSVG />,
  },

  {
    title: '부동산',
    image: <RealEstateSVG />,
  },
];

const CategoryStack = () => {
  const [hover, setHover] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');

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
