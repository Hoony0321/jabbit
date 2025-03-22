'use client';

import { useAuthStore } from '@/src/client/store/authStore';
import { redirect } from 'next/navigation';

interface ConsultationAuthWrapperProps {
  children: React.ReactNode;
  targetUserId: string;
}

const ConsultationAuthWrapper = ({
  children,
  targetUserId,
}: ConsultationAuthWrapperProps) => {
  const { user } = useAuthStore();
  if (!user || user.id != targetUserId) {
    redirect('/');
  }
  return children;
};

export default ConsultationAuthWrapper;
