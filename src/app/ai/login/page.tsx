'use client';

import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { Flex, Stack, Text } from '@chakra-ui/react';

import LogoSVG from '@/public/assets/logo.svg';
import KakaoLoginBtnSVG from '@/public/assets/KakaoLoginBtn.svg';
import NaverLoginBtnSVG from '@/public/assets/NaverLoginBtn.svg';
import { OAUTH } from '@/src/client/config/auth';

const handleKakaoLogin = () => {
  const redirectTo = '/ai';
  const statePayload = {
    csrfToken: uuidv4(),
    redirectTo,
  };

  const state = encodeURIComponent(btoa(JSON.stringify(statePayload)));
  window.location.href = `${OAUTH.KAKAO.AUTH_URL}&state=${state}`;
};

const handleNaverLogin = () => {
  const redirectTo = '/ai';
  const statePayload = {
    csrfToken: uuidv4(),
    redirectTo,
  };

  const state = encodeURIComponent(btoa(JSON.stringify(statePayload)));
  window.location.href = `${OAUTH.NAVER.AUTH_URL}&state=${state}`;
};

const Login = () => {
  return (
    <Flex
      height="100vh"
      px="20px"
      mx="auto"
      flexDir="column"
      alignItems="center"
      bg="app_background"
    >
      <Stack gap="67px">
        <Stack px="16px" alignItems="center" mt="85px">
          <LogoSVG />
          <Text
            textStyle="mobile_b1_semi"
            color="brand.blue"
            whiteSpace="pre-wrap"
            textAlign="center"
          >
            {`10분 안에 전문가와 AI가\n재무 플랜을 완성해드려요!`}
          </Text>
        </Stack>
        <Image
          src="/assets/banner_image.svg"
          alt="login_bg"
          width={335}
          height={317}
        />
        <Stack flexDir="column" gap="12px" mt="20px">
          <KakaoLoginBtnSVG onClick={handleKakaoLogin} cursor="pointer" />
          <NaverLoginBtnSVG onClick={handleNaverLogin} cursor="pointer" />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Login;
