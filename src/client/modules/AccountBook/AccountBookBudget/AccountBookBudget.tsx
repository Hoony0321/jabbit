'use client';

import { Stack } from '@chakra-ui/react';

import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';

import { useGetBudget } from '../hooks/accountBook.query';
import HistoryAddFloatingButton from '../components/HistoryAddFloatingButton';
import { BudgetUnset, BudgetStatus } from './components';

function AccountBookBudget() {
  const { data } = useGetBudget();
  const isBudgetSet = data.body.totalBudget !== 0;

  return (
    <Stack gap="20px" p="20px">
      <GuideLinkButton data={GUIDE_BUTTONS['account-book']} />

      {isBudgetSet ? <BudgetStatus /> : <BudgetUnset />}

      <HistoryAddFloatingButton />
    </Stack>
  );
}

export default AccountBookBudget;
