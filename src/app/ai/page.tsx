'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/client/store/authStore';

function AIMainPage() {
  const { user } = useAuthStore();
  const router = useRouter();

  if (!user) {
    console.log('redirecting to login');
    router.replace('/ai/login');
  } else {
    console.log('redirecting to coach');
    router.replace('/ai/coach');
  }
}

export default AIMainPage;
