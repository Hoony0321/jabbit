'use client';

import { useAuthStore } from '../../../client/store/authStore';
import LogoutBtn from './LogoutBtn';
import LoginBtn from './LoginBtn';

const AuthBtn = () => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <LogoutBtn /> : <LoginBtn />;
};

export default AuthBtn;
