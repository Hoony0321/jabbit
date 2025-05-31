'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';
import { mixpanelTrack } from '@/src/client/utils/mixpanelHelpers';
import { useAuthStore } from '@/src/client/store/authStore';

interface LaunchPageProps {
  type: 'money-tracker' | 'goal';
  launchData: {
    mainTitle: string;
    contents: {
      title: string;
      image: string;
    }[];
  };
}

type LaunchAlarmStatus = Record<'money-tracker' | 'goal', boolean>;

const CONTENT_BG_COLOR_MAP = ['blue.400', 'blue.200', 'blue.100'];

function LaunchPage({ launchData, type }: LaunchPageProps) {
  const [isLaunchAlaramRegistered, setIsLaunchAlaramRegistered] =
    useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    const launchAlarmStatus = localStorage.getItem('launchAlarmStatus');
    if (!launchAlarmStatus) return;

    const launchAlarmStatusObj = JSON.parse(launchAlarmStatus);
    const isLaunchAlaramRegistered = launchAlarmStatusObj[type];
    setIsLaunchAlaramRegistered(isLaunchAlaramRegistered);
  }, []);

  const onLaunchAlarmClick = () => {
    const launchAlarmStatus = localStorage.getItem('launchAlarmStatus');
    const typeMap = {
      'money-tracker': '가계부탭',
      'goal': '목표탭',
    };
    mixpanelTrack(
      `${typeMap[type]}`,
      `${typeMap[type]} 출시 알림 받기 버튼 클릭`,
      `${typeMap[type]} 출시 알림 받기 버튼`,
      user,
    );
    if (!launchAlarmStatus) {
      const launchAlarmStatusObj = {} as LaunchAlarmStatus;
      launchAlarmStatusObj[type as keyof LaunchAlarmStatus] = true;
      localStorage.setItem(
        'launchAlarmStatus',
        JSON.stringify(launchAlarmStatusObj),
      );
      setIsLaunchAlaramRegistered(true);
      return;
    }

    const launchAlarmStatusObj = JSON.parse(launchAlarmStatus);
    launchAlarmStatusObj[type] = true;
    localStorage.setItem(
      'launchAlarmStatus',
      JSON.stringify(launchAlarmStatusObj),
    );
    setIsLaunchAlaramRegistered(true);
  };

  return (
    <Stack width="100%" px="20px" gap="30px" mt="56px" mb="86px">
      <Text textStyle="mobile_h1" whiteSpace="pre-wrap" textAlign="center">
        {launchData.mainTitle}
      </Text>
      <Stack gap="35px" flexDir="column" alignItems="center">
        {launchData.contents.map((content, idx) => (
          <Stack
            key={content.title}
            flexDir="column"
            alignItems="center"
            bgColor={CONTENT_BG_COLOR_MAP[idx]}
            borderRadius="20px"
            overflow="hidden"
            w="100%"
            h="400px"
            gap="27px"
            pt="42px"
          >
            <Text textStyle="mobile_h3">{content.title}</Text>
            <Image
              src={content.image}
              alt={content.title}
              width={190}
              height={1000}
            />
          </Stack>
        ))}
      </Stack>

      {isLaunchAlaramRegistered ? (
        <Button
          position="absolute"
          bottom="83px"
          mx="20px"
          left="0px"
          right="0px"
          bgColor="blue_gray.200"
          color="blue_gray.300"
          borderRadius="10px"
          boxShadow="0px 2px 24px 0px rgba(0, 0, 0, 0.20)"
          opacity="1"
          h="60px"
          disabled
          onClick={onLaunchAlarmClick}
        >
          알림 신청 완료
        </Button>
      ) : (
        <Button
          position="absolute"
          bottom="83px"
          mx="20px"
          left="0px"
          right="0px"
          bgColor="brand.blue"
          color="white"
          borderRadius="10px"
          boxShadow="0px 2px 24px 0px rgba(0, 0, 0, 0.20)"
          h="60px"
          onClick={onLaunchAlarmClick}
        >
          출시 알림 받기
        </Button>
      )}
    </Stack>
  );
}

export default LaunchPage;
