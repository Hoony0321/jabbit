'use client';

import { Button, Flex, Group } from '@chakra-ui/react';
import AuthBtn from '../AuthBtn/AuthBtn';
import Logo from '../../common/Logo/Logo';

const Navigation = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      maxWidth="1280px"
      width="100%"
    >
      <Logo />
      <Group>
        <Button color="main.black_1" variant="plain" textStyle="md">
          전문가 찾기
        </Button>
        <Button variant="plain" textStyle="md">
          상품 견적 요청
        </Button>
        <Button variant="plain" textStyle="md">
          AI 무료 진단
        </Button>
        <Button variant="plain" textStyle="md">
          금융 미션
        </Button>
        <Button variant="plain" textStyle="md">
          커뮤니티
        </Button>
      </Group>
      <AuthBtn />
    </Flex>
  );
};

export default Navigation;
