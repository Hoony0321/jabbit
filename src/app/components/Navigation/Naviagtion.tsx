'use client';

import { Button, Flex, Group, Link } from '@chakra-ui/react';
import AuthBtn from '../AuthBtn/AuthBtn';
import Logo from '../../common/Logo/Logo';
import MyPageBtn from '../MyPageBtn/MyPageBtn';
import BaseLink from '../../common/BaseLink/BaseLink';

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
          <Link
            href="/experts"
            textDecor="none"
            _focus={{ outline: 'none' }}
            _active={{ outline: 'none' }}
          >
            전문가 찾기
          </Link>
        </Button>
        <Button variant="plain" textStyle="md" display="none">
          상품 견적 요청
        </Button>
        <Button variant="plain" textStyle="md">
          <BaseLink
            href="https://ludicrous-icebreaker-097.notion.site/AI-19f771a76bb580c39613ffc36259361f?pvs=4"
            isExternal={true}
            style={{ textDecoration: 'none' }}
          >
            AI 재무진단
          </BaseLink>
        </Button>
        <Button variant="plain" textStyle="md">
          <BaseLink
            href="https://ludicrous-icebreaker-097.notion.site/1d1771a76bb5809d8d5ff24d856797ab?pvs=4"
            isExternal={true}
            style={{ textDecoration: 'none' }}
          >
            재무상담 후기
          </BaseLink>
        </Button>
        <Button variant="plain" textStyle="md">
          <BaseLink
            href="https://ludicrous-icebreaker-097.notion.site/1d7771a76bb58080bc68ce76057ede42?pvs=4"
            isExternal={true}
            style={{ textDecoration: 'none' }}
          >
            멤버십
          </BaseLink>
        </Button>
      </Group>
      <Group>
        <MyPageBtn />
        <AuthBtn />
      </Group>
    </Flex>
  );
};

export default Navigation;
