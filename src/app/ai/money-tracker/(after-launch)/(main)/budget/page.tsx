'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flex, Stack } from '@chakra-ui/react';
import PlusSvg from '@/src/client/assets/plus.svg';
import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import BudgetUnset from './_components/BudgetUnset';
import BudgetStatus from './_components/BudgetStatus';

function BudgetPage() {
  const router = useRouter();
  const [isBudgetSet, setIsBudgetSet] = useState(false);

  console.log(setIsBudgetSet);

  return (
    <Stack gap="20px" p="20px">
      <GuideLinkButton data={GUIDE_BUTTONS['money-tracker']} />

      {isBudgetSet ? <BudgetUnset /> : <BudgetStatus />}

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

export default BudgetPage;
