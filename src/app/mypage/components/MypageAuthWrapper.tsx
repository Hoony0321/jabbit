'use client';

import { useAuthStore } from '@/src/client/store/authStore';
import { redirect } from 'next/navigation';

const MypageAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();
  if (!user) redirect('/');
  return children;
};

export default MypageAuthWrapper;
