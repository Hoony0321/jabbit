'use client';

import { Stack } from '@chakra-ui/react';
import { useGetGoalStatus } from '../hooks/goal.query';
import GoalStatusCard from './components/GoalStatusCard';

function GoalStatus() {
  const { data: goalStatusData } = useGetGoalStatus();

  return (
    <Stack gap="20px" p="20px">
      {goalStatusData.body.map((goal) => (
        <GoalStatusCard key={goal.id} data={goal} />
      ))}
    </Stack>
  );
}

export default GoalStatus;
