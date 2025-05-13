'use client';

import { useAuthStore } from '../../../client/store/authStore';
import LogoutBtn from './LogoutBtn';
import LoginBtn from './LoginBtn';

const AuthBtn = () => {
  const { isLoggedIn } = useAuthStore();
  return isLoggedIn ? <LogoutBtn /> : <LoginBtn />;
};

export default AuthBtn;
