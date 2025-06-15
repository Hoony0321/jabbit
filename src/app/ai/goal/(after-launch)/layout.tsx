'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Tab from '@/src/app/components/Tab/Tab';
import { GOAL_TABS } from '@/src/client/modules/Goal/constants/tabMenus';

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
