'use client';
import { MYPAGE_SIDEBAR_DATA } from '@/src/client/constants/MYPAGE';
import { useAuthStore } from '@/src/client/store/authStore';
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathname = usePathname();
  const { user } = useAuthStore();

  return (
    <Flex maxWidth="1280px" position="sticky" top="35px" h="fit-content">
      <Box w="320px">
        <VStack align="stretch" gap="20px">
          {MYPAGE_SIDEBAR_DATA.map((item) => (
            <Link
              textDecoration="none"
              key={item.slug}
              href={`/mypage/${item.slug}?userId=${user?.id}`}
              cursor="pointer"
              p="20px"
              borderRadius="10px"
              bgColor={
                pathname.startsWith(`/mypage/${item.slug}`)
                  ? '#F3F5FF'
                  : 'main.white_1'
              }
            >
              <Text
                fontSize="md"
                fontWeight="600"
                color={
                  pathname.startsWith(`/mypage/${item.slug}`)
                    ? 'main.black_1'
                    : 'main.black_4'
                }
              >
                {item.title}
              </Text>
            </Link>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default SideBar;
