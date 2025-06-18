'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/client/store/authStore';
import { IDENTIFIER_TO_PATH_MAP } from './_constants/routes';
import { usePwaStore } from '@/src/client/store/pwaStore';

function AIMainPage() {
  const { user } = useAuthStore();
  const router = useRouter();
  const { setIsPwa } = usePwaStore();
  setIsPwa(true);
  
  if (!user) {
    console.log('redirecting to login');
    router.replace('/ai/login');
  } else {
    console.log('redirecting to coach');
    router.replace(IDENTIFIER_TO_PATH_MAP['COACH_MAIN']);
  }
}

export default AIMainPage;
