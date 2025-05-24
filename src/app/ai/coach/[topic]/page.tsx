'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

export default function GuidePage() {
  const { topic } = useParams();
  const { push } = useRouter();

  const topicStr = typeof topic === 'string' ? topic : '';
  console.log('topic', topic);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [buttonText, setButtonText] = useState('');

  const buttonTextMap: Record<string, string> = {
    scenario: '시나리오 추가하기',
    plan: '플랜으로 설정하기',
    routine: '루틴으로 설정하기',
  };

  const handleButtonClick = () => {
    push('/ai/coach');
  };

  useEffect(() => {
    if (!topicStr) return;

    setButtonText(buttonTextMap[topicStr] || '');

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/coach/guide/${topicStr}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching guide:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [buttonTextMap, topicStr]);

  if (loading)
    return (
      <Flex
        align="center"
        gap="8px"
        padding="24px 30px"
        justifyContent="flex-start"
      >
        <Image
          src="/assets/ico_money.svg"
          alt="돈 아이콘"
          width={24}
          height={24}
        />
        <Text textStyle="mobile_b2" color="font.800">
          재무코치가 나만을 위한 플랜을 만들고 있어요...
        </Text>
      </Flex>
    );
  //   if (!data) return <p>No data found for topic: {topicStr}</p>;

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px">
        <pre>{JSON.stringify(data)}</pre>
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="14px"
        height="60px"
        color="white"
        backgroundColor="brand.blue"
        borderWidth="2px"
        borderColor="gray.100"
        minWidth="335px"
        onClick={handleButtonClick}
      >
        <Text textStyle="mobile_b1_semi" color="white">
          {buttonText}
        </Text>
      </Button>
    </Box>
  );
}
