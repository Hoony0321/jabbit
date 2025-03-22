'use client';
import { useAuthStore } from '@/src/client/store/authStore';
import { redirect } from 'next/navigation';

const Mypage = () => {
  const { user } = useAuthStore();

  redirect(`/mypage/consultation-history?userId=${user?.id}`);
  return null;
};

export default Mypage;
