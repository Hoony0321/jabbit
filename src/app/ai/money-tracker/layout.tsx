'use client';

import { useRouter } from 'next/navigation';
import Tab from '../../components/Tab/Tab';

const MONEY_TRACKER_TABS = [
  {
    label: '예산',
    value: 'budget',
    content: <div>예산</div>,
  },
  {
    label: '수입/지출',
    value: 'income-expense',
    content: <div>수입/지출</div>,
  },
];

function MoneyTrackerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div>
      <Tab
        menuList={MONEY_TRACKER_TABS}
        onClick={(value) => router.push(`/ai/money-tracker/${value}`)}
      />
      {children}
    </div>
  );
}

export default MoneyTrackerLayout;
