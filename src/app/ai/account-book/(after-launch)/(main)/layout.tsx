'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { ACCOUNT_BOOK_TABS } from '@/src/client/modules/AccountBook/constants/tabMenus';
import Tab from '@/src/app/components/Tab/Tab';

function AccountBookLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Fragment>
      <Tab
        menuList={ACCOUNT_BOOK_TABS}
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

export default AccountBookLayout;
