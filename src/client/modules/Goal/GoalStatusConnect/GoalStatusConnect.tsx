'use client';

import { Fragment, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

import Header from '@/src/app/ai/_components/Header';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import {
  GOAL_QUERY_KEY,
  useGetGoalAsset,
  usePatchGoalAssetConnect,
} from '../hooks/goal.query';
import ConnectItem from './components/ConnectItem';

function GoalStatusConnect() {
  const router = useRouter();
  const { goalId } = useParams();
  const queryClient = useQueryClient();

  const { data: goalAssetData } = useGetGoalAsset(goalId as string);
  const { mutate: updateGoalAssetMutate } = usePatchGoalAssetConnect({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: GOAL_QUERY_KEY.GET_GOAL_STATUS,
      });
      router.push(IDENTIFIER_TO_PATH_MAP.GOAL_STATUS);
    },
  });

  const [selectedAssetIds, setSelectedAssetIds] = useState<number[]>([]);

  const handleAssetConnect = () => {
    updateGoalAssetMutate({
      goalId: goalId as string,
      body: {
        assetIds: selectedAssetIds,
      },
    });
  };

  const handleAssetSelect = (assetId: number) => {
    const isChecked = selectedAssetIds.includes(assetId);

    if (isChecked) {
      setSelectedAssetIds(selectedAssetIds.filter((id) => id !== assetId));
    } else {
      setSelectedAssetIds([...selectedAssetIds, assetId]);
    }
  };

  return (
    <Fragment>
      <Header hasPrev />

      <Stack gap="16px" p="20px" pt="68px">
        <Stack gap="8px">
          <Text textStyle="mobile_h2">
            이 목표와 연동할 자산을 선택해주세요
          </Text>
          <Text textStyle="mobile_cap" color="font.600">
            2025.05 업데이트
          </Text>
        </Stack>
        <Stack gap="12px">
          {goalAssetData.body.map((asset) => (
            <ConnectItem
              key={asset.id}
              data={asset}
              checked={selectedAssetIds.includes(asset.id)}
              onCheckedChange={() => handleAssetSelect(asset.id)}
            />
          ))}
        </Stack>
      </Stack>

      <Flex
        position="fixed"
        bottom="18px"
        left="0"
        right="0"
        py="20px"
        zIndex="100"
        justifyContent="center"
      >
        <Button
          bgColor="brand.blue"
          borderRadius="14px"
          w="calc(100% - 40px)"
          h="62px"
          onClick={handleAssetConnect}
        >
          설정하기
        </Button>
      </Flex>
    </Fragment>
  );
}

export default GoalStatusConnect;
