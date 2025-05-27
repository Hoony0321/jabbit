import { Stack, Text } from '@chakra-ui/react';
import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';
import RoutineItem from './_components/RoutineItem';

const MOCK_ROUTINES = {
  daily: [
    {
      title: '오전 청소 루틴',
      isChecked: false,
    },
    {
      title: '오후 청소 루틴',
      isChecked: false,
    },
    {
      title: '저녁 청소 루틴',
      isChecked: false,
    },
  ],
  moneyManagement: [
    {
      title: '커피 1잔 마시기',
      isChecked: false,
    },
    {
      title: '가계부 작성하기',
      isChecked: false,
    },
    {
      title: '카드 결제하기',
      isChecked: false,
    },
  ],
  investment: [
    {
      title: '주식 매수하기',
      isChecked: false,
    },
    {
      title: '코인 매수하기',
      isChecked: false,
    },
    {
      title: '코인 매도하기',
      isChecked: false,
    },
  ],
};

function RoutinePage() {
  return (
    <Stack p="20px" gap="20px">
      <GuideLinkButton data={GUIDE_BUTTONS.goal} />

      <Text textStyle="mobile_h3" color="font.800">
        2025년 05월 26일
      </Text>

      <Stack gap="32px">
        <Stack gap="12px">
          <Text textStyle="mobile_h3">🗓️ 매일해야 할 루틴</Text>
          <Stack gap="12px">
            {MOCK_ROUTINES.daily.map((routine) => (
              <RoutineItem key={routine.title} {...routine} />
            ))}
          </Stack>
        </Stack>
        <Stack gap="12px">
          <Text textStyle="mobile_h3">💼 돈 관리 루틴</Text>
          <Stack gap="12px">
            {MOCK_ROUTINES.moneyManagement.map((routine) => (
              <RoutineItem key={routine.title} {...routine} />
            ))}
          </Stack>
        </Stack>
        <Stack gap="12px">
          <Text textStyle="mobile_h3">💸 돈 굴리기 루틴</Text>
          <Stack gap="12px">
            {MOCK_ROUTINES.investment.map((routine) => (
              <RoutineItem key={routine.title} {...routine} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RoutinePage;
