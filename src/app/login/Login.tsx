'use client';

import { useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Box, Flex, Text } from '@chakra-ui/react';

import KakaoLoginBtnSVG from '@/public/assets/KakaoLoginBtn.svg';
import NaverLoginBtnSVG from '@/public/assets/NaverLoginBtn.svg';
import { TERMS_OF_SERVICE_URL } from '@/src/client/constants/URL';
import { PRIVACY_POLICY_URL } from '@/src/client/constants/URL';
import { OAUTH } from '@/src/client/config/auth';

import Footer from '../components/Footer/Footer';
import Logo from '../common/Logo/Logo';
import BaseLink from '../common/BaseLink/BaseLink';

const Login = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const handleKakaoLogin = () => {
    const statePayload = {
      redirectTo,
    };

    const state = encodeURIComponent(btoa(JSON.stringify(statePayload)));
    window.location.href = OAUTH.KAKAO.AUTH_URL(state);
  };

  const handleNaverLogin = () => {
    const statePayload = {
      redirectTo,
      csrfToken: uuidv4(),
    };

    const state = encodeURIComponent(btoa(JSON.stringify(statePayload)));
    window.location.href = OAUTH.NAVER.AUTH_URL(state);
  };

  return (
    <Flex width="100%" height="100vh" flexDirection="column">
      <Box width="1920px" padding="38px 320px" borderTop="2px solid #f2f3f5">
        <Logo />
      </Box>
      <Flex mx="auto" width="100%" height="100%" flexDirection="column">
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="40px" fontWeight="600" color="main.black_1">
            로그인 / 회원가입
          </Text>
          <Flex flexDirection="column" gap="20px" mt="52px">
            <KakaoLoginBtnSVG onClick={handleKakaoLogin} cursor="pointer" />
            <NaverLoginBtnSVG onClick={handleNaverLogin} cursor="pointer" />
          </Flex>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="main.black_2"
            mt="36px"
            textAlign="center"
            maxWidth="333px"
            wordBreak="keep-all"
          >
            신규 회원가입시{' '}
            <BaseLink href={TERMS_OF_SERVICE_URL}>서비스 이용 약관</BaseLink> 및{' '}
            <BaseLink href={PRIVACY_POLICY_URL}>개인정보 수집</BaseLink>에
            동의한 것으로 간주됩니다.
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Login;
