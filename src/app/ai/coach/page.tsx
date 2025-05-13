'use client';

import { Stack } from '@chakra-ui/react';
import ChatbotMessage from './_components/ChatbotMessage';
import { useRouter } from 'next/navigation';

function CoachPage() {
  const { push } = useRouter();

  return (
    <Stack direction="column" gap="20px" px="20px">
      <ChatbotMessage
        message="이번 주 재무리포트가 도착했어요."
        buttonText="확인하기"
        onButtonClick={() => push('/ai/coach/form')}
      />
      <ChatbotMessage
        message="전문가의 코칭 보고서가 도착했어요."
        buttonText="확인하기"
        onButtonClick={() => console.log('코칭 보고서 확인하기')}
      />
      <ChatbotMessage
        message="목표를 이루기 위한 루틴이 도착했어요. 작지만 꾸준히 실천할 수 있는 루틴을 추천드려요."
        buttonText="읽어보기"
        onButtonClick={() => console.log('루틴 읽어보기')}
      />
      <ChatbotMessage
        message="이번 주 재무리포트가 도착했어요."
        buttonText="확인하기"
        onButtonClick={() => console.log('재무리포트 확인하기')}
      />
      <ChatbotMessage
        message="전문가의 코칭 보고서가 도착했어요."
        buttonText="확인하기"
        onButtonClick={() => console.log('코칭 보고서 확인하기')}
      />
      <ChatbotMessage
        message="목표를 이루기 위한 루틴이 도착했어요. 작지만 꾸준히 실천할 수 있는 루틴을 추천드려요."
        buttonText="읽어보기"
        onButtonClick={() => console.log('루틴 읽어보기')}
      />
    </Stack>
  );
}

export default CoachPage;
