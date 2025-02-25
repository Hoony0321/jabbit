import ConsultingSVG from '@/public/assets/consulting.svg';
import InsuranceSVG from '@/public/assets/insurance.svg';
import DebtSVG from '@/public/assets/debt.svg';
import ExpenditureSVG from '@/public/assets/expenditure_management.svg';
import InvestmentSVG from '@/public/assets/invest_consulting.svg';
import RealEstateSVG from '@/public/assets/realestate.svg';
import SeedMoneySVG from '@/public/assets/seed_money.svg';
import { Flex, Text } from '@chakra-ui/react';

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

const Specialties = ({ specialty }: { specialty: string }) => {
  const item = CATEGORY_ITEMS.find((item) => item.title === specialty);

  return (
    <Flex
      gap="14px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        width="80px"
        height="80px"
        justifyContent="center"
        alignItems="center"
      >
        {item?.image}
      </Flex>
      <Text textStyle="md" color="main.black_1">
        {item?.title}
      </Text>
    </Flex>
  );
};

export default Specialties;
