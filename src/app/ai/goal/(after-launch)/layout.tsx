'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Tab from '@/src/app/components/Tab/Tab';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

const GOAL_TABS = [
  {
    label: '루틴',
    value: 'routine',
    link: IDENTIFIER_TO_PATH_MAP['GOAL_ROUTINE'],
  },
  {
    label: '현황',
    value: 'status',
    link: IDENTIFIER_TO_PATH_MAP['GOAL_STATUS'],
  },
];

function GoalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Fragment>
      <Tab
        menuList={GOAL_TABS}
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

export default GoalLayout;
