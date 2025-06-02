'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Tab from '@/src/app/components/Tab/Tab';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

const MONEY_TRACKER_TABS = [
  {
    label: '예산',
    value: 'budget',
    link: IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_BUDGET'],
    content: <div>예산</div>,
  },
  {
    label: '수입/지출',
    value: 'income-expense',
    link: IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_INCOME_EXPENSE'],
    content: <div>수입/지출</div>,
  },
];

function MoneyTrackerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Fragment>
      <Tab
        menuList={MONEY_TRACKER_TABS}
        onClick={(value) => router.push(value.link)}
        position="sticky"
        top="0"
        left="0"
        zIndex="100"
        bgColor="brand.white"
        pt="32px"
      />
      {children}
    </Fragment>
  );
}

export default MoneyTrackerLayout;
