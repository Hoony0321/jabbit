'use client';

import { useRouter } from 'next/navigation';
import { Flex, Stack, Text } from '@chakra-ui/react';
import PlusSvg from '@/src/client/assets/plus.svg';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import TransactionItem, {
  ExpenseTransaction,
  IncomeTransaction,
} from './_components/TransactionItem';

const MOCK_TRANSACTIONS: Record<
  string,
  (IncomeTransaction | ExpenseTransaction)[]
> = {
  '2025-06-01': [
    {
      type: 'expense',
      category: 'CAR',
      amount: 100000,
      paymentMethod: 'CREDIT_CARD',
      memo: '주유비',
    },
    {
      type: 'income',
      category: 'ETC',
      amount: 50000,
      memo: '상품 환불',
    },
    {
      type: 'expense',
      category: 'CAFE',
      amount: 2000,
      paymentMethod: 'DEBIT_CARD',
      memo: '편의점 스낵',
    },
  ],
  '2025-06-02': [
    {
      type: 'expense',
      category: 'CAFE',
      amount: 2000,
      paymentMethod: 'CREDIT_CARD',
      memo: '간식',
    },
  ],
};

function IncomeExpensePage() {
  const router = useRouter();

  return (
    <Stack gap="24px" p="20px">
      <Stack gap="16px">
        <Text textStyle="mobile_h3">2025년 6월</Text>
        <Flex gap="20px" alignItems="center">
          <Stack
            gap="4px"
            borderRadius="8px"
            bgColor="blue.200"
            p="16px"
            flex={1}
          >
            <Text textStyle="mobile_b2">이번 달 지출</Text>
            <Text textStyle="mobile_h3" color="font.800">
              204,000 원
            </Text>
          </Stack>
          <Stack
            gap="4px"
            borderRadius="8px"
            bgColor="blue.200"
            p="16px"
            flex={1}
          >
            <Text textStyle="mobile_b2">이번 달 수입</Text>
            <Text textStyle="mobile_h3" color="brand.blue">
              104,000 원
            </Text>
          </Stack>
        </Flex>
      </Stack>

      {Object.entries(MOCK_TRANSACTIONS).map(([date, transactions]) => (
        <Stack gap="10px" key={date}>
          <Text textStyle="mobile_b2">{date}</Text>
          <Stack gap="20px">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.memo} data={transaction} />
            ))}
          </Stack>
        </Stack>
      ))}

      <Flex
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        position="fixed"
        bottom="88px"
        right="0px"
        onClick={() =>
          router.push(
            IDENTIFIER_TO_PATH_MAP.MONEY_TRACKER_INCOME_EXPENSE_CREATE,
          )
        }
      >
        <PlusSvg />
      </Flex>
    </Stack>
  );
}

export default IncomeExpensePage;
