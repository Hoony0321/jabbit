import { Flex, Stack, Text } from '@chakra-ui/react';
import {
  IncomeCategoryKey,
  ExpenseCategoryKey,
  EXPENSE_CATEGORY_MAP,
  INCOME_CATEGORY_MAP,
  PAYMENT_METHOD_MAP,
  PaymentMethodKey,
} from '@/src/app/ai/money-tracker/_ constants/category';

export interface IncomeTransaction {
  category: IncomeCategoryKey;
  amount: number;
  type: 'income';
  memo: string;
}

export interface ExpenseTransaction {
  category: ExpenseCategoryKey;
  paymentMethod: PaymentMethodKey;
  amount: number;
  type: 'expense';
  memo: string;
}

interface TransactionItemProps {
  data: IncomeTransaction | ExpenseTransaction;
}

function TransactionItem({ data }: TransactionItemProps) {
  const isIncome = data.type === 'income';
  const dataMap = isIncome
    ? INCOME_CATEGORY_MAP[data.category as keyof typeof INCOME_CATEGORY_MAP]
    : EXPENSE_CATEGORY_MAP[data.category as keyof typeof EXPENSE_CATEGORY_MAP];

  const paymentMethodMap = !isIncome
    ? PAYMENT_METHOD_MAP[data.paymentMethod as keyof typeof PAYMENT_METHOD_MAP]
    : undefined;

  return (
    <Flex gap="10px">
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
  );
}

export default TransactionItem;
