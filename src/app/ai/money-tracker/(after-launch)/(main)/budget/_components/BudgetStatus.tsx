import { Fragment } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { EXPENSE_CATEGORY_MAP } from '@/src/app/ai/money-tracker/_ constants/category';
import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';
import BudgetBalanceGraph from './BudgetBalanceGraph';

function BudgetStatus() {
  return (
    <Fragment>
      <BudgetBalanceGraph />
      <Stack gap="30px">
        {Object.values(EXPENSE_CATEGORY_MAP).map((item) => (
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
                50%
              </Flex>
            </Flex>
            <ProgressBar progress={50} backgroundColor="blue_gray.100" />
            <Flex alignItems="center" justifyContent="space-between">
              <Text textStyle="mobile_cap">50만원</Text>
              <Text textStyle="mobile_cap">100만원</Text>
            </Flex>
          </Stack>
        ))}
      </Stack>
    </Fragment>
  );
}

export default BudgetStatus;
