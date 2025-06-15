import Link from 'next/link';
import { Flex, Stack, Text } from '@chakra-ui/react';

import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import {
  EXPENSE_CATEGORY_MAP,
  INCOME_CATEGORY_MAP,
  PAYMENT_METHOD_MAP,
} from '../../constants/category';
import { GroupedHistory } from '../utils/groupHistoryByDate';

interface TransactionItemProps {
  data: GroupedHistory['entries'][number];
}

function TransactionItem({ data }: TransactionItemProps) {
  const isIncome = data.type === 'income';
  const dataMap = isIncome
    ? INCOME_CATEGORY_MAP[data.category]
    : EXPENSE_CATEGORY_MAP[data.category];

  const paymentMethodMap = !isIncome
    ? PAYMENT_METHOD_MAP[data.paymentMethod]
    : undefined;

  const link = `${IDENTIFIER_TO_PATH_MAP.ACCOUNT_BOOK_HISTORY}/${data.historyId}`;

  return (
    <Link href={link}>
      <Flex gap="10px" cursor="pointer">
        <Flex
          alignItems="center"
          justifyContent="center"
          boxSize="38px"
          borderRadius="full"
          bgColor={isIncome ? 'blue.100' : 'yellow.100'}
        >
          <Text textStyle="mobile_h3">{dataMap.icon}</Text>
        </Flex>
        <Flex
          flex={1}
          alignItems="center"
          gap="10px"
          justifyContent="space-between"
        >
          <Stack textStyle="mobile_cap" gap="1px">
            <Text
              fontWeight={700}
            >{`${dataMap.name}${!isIncome ? ` | ${paymentMethodMap?.icon} ${paymentMethodMap?.name}` : ''}`}</Text>
            <Text color="font.600">{data.memo}</Text>
          </Stack>
          <Text
            textStyle="mobile_b1_semi"
            color={isIncome ? 'brand.blue' : 'font.800'}
          >
            {`${isIncome ? '+' : '-'}${data.amount.toLocaleString()} 원`}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default TransactionItem;
