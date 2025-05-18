'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Box, Flex, Text } from '@chakra-ui/react';

import CoachSVG from '@/src/client/assets/coach.svg';
import CoachActiveSVG from '@/src/client/assets/coach-active.svg';
import RoutineSVG from '@/src/client/assets/routine.svg';
import RoutineActiveSVG from '@/src/client/assets/routine-active.svg';
import MoneyTrackerSVG from '@/src/client/assets/money-tracker.svg';
import MoneyTrackerActiveSVG from '@/src/client/assets/money-tracker-active.svg';

const NAVIGATION_LIST = [
  {
    label: '코치',
    url: '/ai/coach',
    icon: <CoachSVG width="28" height="28 " />,
    activeIcon: <CoachActiveSVG width="28" height="28" />,
  },
  {
    label: '루틴',
    url: '/ai/goal',
    icon: <RoutineSVG width="28" height="28" />,
    activeIcon: <RoutineActiveSVG width="28" height="28" />,
  },
  {
    label: '가계부',
    url: '/ai/money-tracker',
    icon: <MoneyTrackerSVG width="28" height="28" />,
    activeIcon: <MoneyTrackerActiveSVG width="28" height="28" />,
  },
];

function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Box
        py="11px"
        maxW="480px"
        w="100%"
        alignSelf="center"
        justifyContent="center"
        borderTop="1px solid"
        borderColor="line.gray"
        bgColor="brand.white"
      >
        <Flex justifyContent="space-between" alignItems="center">
          {NAVIGATION_LIST.map((item) => {
            const isActive = pathname.includes(item.url);

            return (
              <Flex
                key={item.url}
                flex={1}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap="4px"
                cursor="pointer"
                onClick={() => {
                  router.push(item.url);
                }}
              >
                {isActive ? item.activeIcon : item.icon}
                <Text
                  textStyle="mobile_menu"
                  color={isActive ? 'brand.blue' : 'gray.500'}
                >
                  {item.label}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navigation;
