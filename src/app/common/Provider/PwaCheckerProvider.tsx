'use client';

import { useEffect } from 'react';
import { usePwaStore } from '@/src/client/store/pwaStore';

export default function PwaCheckerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setIsPwa } = usePwaStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isPwa = window.matchMedia('(display-mode: standalone)').matches;
      if (isPwa) {
        setIsPwa(true);
      }
      setIsPwa(false);
    }
  }, []);

  return <>{children}</>;
}
