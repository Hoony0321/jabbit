'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/client/store/authStore';
import { IDENTIFIER_TO_PATH_MAP } from './_constants/routes';

function AIMainPage() {
  const { user } = useAuthStore();
  const router = useRouter();

  if (!user) {
    console.log('redirecting to login');
    router.replace('/ai/login');
  } else {
    console.log('redirecting to coach');
    router.replace(IDENTIFIER_TO_PATH_MAP['COACH_MAIN']);
  }
}

export default AIMainPage;
