import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { useFormContext, useWatch } from 'react-hook-form';

import ExpenditureManagementSVG from '@/src/client/assets/expenditure_management.svg';
import RealEstateSVG from '@/src/client/assets/real_estate.svg';
import DebtSVG from '@/src/client/assets/debt.svg';
import InvestmentConsultingSVG from '@/src/client/assets/invest_consulting.svg';
import ChildCareSVG from '@/src/client/assets/child_care.svg';
import InsuranceSVG from '@/src/client/assets/insurance.svg';
import SeedMoneySVG from '@/src/client/assets/seed_money.svg';  
import ConsultingSVG from '@/src/client/assets/consulting.svg';
import { UserFinancialInfo } from '@/src/client/lib/api/postUserFinancialInfo';
import { COLORS } from '@/src/client/theme/colors';
import { FINANCIAL_CONCERN_OPTIONS } from '../../_constants/financial-info-form';

const FINANCIAL_CONCERN_OPTIONS_ICON_MAP: Record<string, React.ReactNode> = {
  '소득 관리 및 지출통제': (
    <ExpenditureManagementSVG width="43px" height="43px" />
  ),
  '내 집 마련': <RealEstateSVG width="43px" height="43px" />,
  '부채 관리': <DebtSVG width="43px" height="43px" />,
  '투자 및 자산관리': <InvestmentConsultingSVG width="43px" height="43px" />,
  '노후/은퇴 준비': (
    <ConsultingSVG width="43px" height="43px" color={COLORS.brand.black.value} />
  ),
  '자녀 교육 및 양육비': <ChildCareSVG width="43px" height="43px" />,
  절세: <InsuranceSVG width="43px" height="43px" />,
  '종잣돈 마련': <SeedMoneySVG width="43px" height="43px" />,
};

const CategorySelect = ({
  maxSelectCount = 1,
  fieldName,
}: {
  maxSelectCount?: number;
  fieldName:
    | 'financial_concern.concerns'
    | 'financial_concern.concern_with_expert';
}) => {
  const { setValue } = useFormContext<UserFinancialInfo>();
  const selectedItem: string[] | string = useWatch({
    name: fieldName,
  });

  const handleSingleSelectItem = (value: string) => {
    setValue(fieldName, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleMultipleSelectItem = (value: string) => {
    const selectedItemList = (selectedItem as string[]) || [];
    const updatedList = selectedItemList.includes(value)
      ? selectedItemList.filter((item) => item !== value)
      : selectedItemList.length < maxSelectCount
        ? [...selectedItemList, value]
        : selectedItemList;

    setValue(fieldName, updatedList, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <Grid
      columnGap="10px"
      rowGap="20px"
      gridTemplateColumns="repeat(4,1fr)"
      w="100%"
    >
      {FINANCIAL_CONCERN_OPTIONS.map((item) => (
        <GridItem key={item.value}>
          <Stack
            dir="column"
            gap="15px"
            border="2px solid"
            borderRadius="10px"
            h="110px"
            p="15px"
            borderColor={
              selectedItem?.includes(item.value) ? 'primary' : 'main.line'
            }
            onClick={() =>
              maxSelectCount === 1
                ? handleSingleSelectItem(item.value)
                : handleMultipleSelectItem(item.value)
            }
          >
            {FINANCIAL_CONCERN_OPTIONS_ICON_MAP[item.value]}
            <Text textStyle="xs" fontWeight={500} paddingLeft="5px">
              {item.label}
            </Text>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CategorySelect;
