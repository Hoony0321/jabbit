import { Fragment } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';

import { typedObjectEntries } from '@/src/client/utils/type';
import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';

import { EXPENSE_CATEGORY_MAP } from '../../constants/category';
import { useGetBudget } from '../../hooks/accountBook.query';
import BudgetBalanceGraph from './BudgetBalanceGraph';

function BudgetStatus() {
  const { data } = useGetBudget();

  return (
    <Fragment>
      <BudgetBalanceGraph />
      <Stack gap="30px">
        {typedObjectEntries(EXPENSE_CATEGORY_MAP).map(([key, item]) => {
          const { budget, spent } = data.body.categoryBudgets[key];
          const progress = Math.min(
            Math.round((spent / budget) * 100) || 0,
            100,
          );

          return (
            <Stack key={item.name} gap="7px">
              <Flex alignItems="center" gap="8px">
                <Text textStyle="mobile_b1_semi">{`${item.icon} ${item.name}`}</Text>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bgColor="blue.200"
                  color="blue_gray.400"
                  borderRadius="4px"
                  pl="6px"
                  pr="4px"
                  py="2px"
                  textStyle="mobile_cap"
                  fontWeight="600"
                >
                  {progress}%
                </Flex>
              </Flex>
              <ProgressBar
                progress={progress}
                backgroundColor="blue_gray.100"
              />
              <Flex alignItems="center" justifyContent="space-between">
                <Text textStyle="mobile_cap">
                  {spent?.toLocaleString() || 0}원
                </Text>
                <Text textStyle="mobile_cap">
                  {budget?.toLocaleString() || 0}원
                </Text>
              </Flex>
            </Stack>
          );
        })}
      </Stack>
    </Fragment>
  );
}

export default BudgetStatus;
