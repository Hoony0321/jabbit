'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Tab from '@/src/app/components/Tab/Tab';
import { TRANSACTION_TABS } from '@/src/client/modules/AccountBook/constants/tabMenus';

function AccountBookHistoryCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Fragment>
      <Tab
        menuList={TRANSACTION_TABS}
        onClick={(v) => router.push(v.link)}
        position="sticky"
        top="0"
        left="0"
        zIndex="100"
        bgColor="brand.white"
      />
      {children}
    </Fragment>
  );
}

export default AccountBookHistoryCreateLayout;
