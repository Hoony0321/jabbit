'use client';

import { useRouter } from 'next/navigation';
import Tab from '../../components/Tab/Tab';

const GOAL_TABS = [
  {
    label: '루틴',
    value: 'routine',
  },
  {
    label: '현황',
    value: 'status',
  },
];

function GoalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div>
      <Tab
        menuList={GOAL_TABS}
        onClick={(value) => router.push(`/ai/goal/${value}`)}
      />
      {children}
    </div>
  );
}

export default GoalLayout;
