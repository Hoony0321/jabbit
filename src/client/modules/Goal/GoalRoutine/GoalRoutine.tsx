'use client';

import { Stack, Text } from '@chakra-ui/react';

import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';

import { formatDate } from '../utils/date';
import { useGetRoutine } from '../hooks/routine.query';
import EmptyView from '../components/EmtyView';

import RoutineItem from './components/RoutineItem';
import {
  ROUTINE_CATEGORY_LIST,
  ROUTINE_TITLE_MAP,
} from './constants/routineMap';

function GoalRoutine() {
  const { data } = useGetRoutine();
  const currentDate = new Date();

  console.log('data', data);

  const isEmpty = !data.body;

  return (
    <Stack p="20px" gap="20px" flex={1}>
      <GuideLinkButton data={GUIDE_BUTTONS.goal} />

      {isEmpty ? (
        <EmptyView
          title="아직 루틴이 없어요"
          description={`재무코치와 함께 재무 목표를 설계하고\n나만의 루틴을 생성해보세요!`}
        />
      ) : (
        <>
          <Text textStyle="mobile_h3" color="font.800">
            {formatDate(currentDate)}
          </Text>
          <Stack gap="32px">
            {ROUTINE_CATEGORY_LIST.map((category) => {
              const categoryTitle = ROUTINE_TITLE_MAP[category];
              const routineList = data.body?.[category];

              return (
                routineList && (
                  <Stack gap="12px" key={category}>
                    <Text textStyle="mobile_h3">{categoryTitle}</Text>
                    <Stack gap="12px">
                      {routineList.map(({ id, name, isCompleted }) => (
                        <RoutineItem
                          key={id}
                          id={id}
                          title={name}
                          checked={isCompleted}
                        />
                      ))}
                    </Stack>
                  </Stack>
                )
              );
            })}
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default GoalRoutine;
