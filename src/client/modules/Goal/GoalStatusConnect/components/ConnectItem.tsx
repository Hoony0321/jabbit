import { Flex, Checkbox, Stack, Text } from '@chakra-ui/react';
import { GoalAsset } from '../../api/goal.type';

interface ConnectItemProps extends Checkbox.RootProps {
  data: GoalAsset;
}

function ConnectItem({ data, ...props }: ConnectItemProps) {
  const { assetCategory, assetAmount, assetMemo } = data;

  return (
    <Flex
      alignItems="center"
      px="16px"
      py="12px"
      borderRadius="16px"
      bgColor="app_background"
    >
      <Checkbox.Root
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="16px"
        variant="solid"
        {...props}
      >
        <Checkbox.Label textStyle="mobile_b1_med" display="flex" flex={1}>
          <Stack gap="8px" flex={1}>
            <Flex
              textStyle="mobile_b1_semi"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>{assetCategory}</Text>
              <Text>{assetAmount.toLocaleString()}원</Text>
            </Flex>
            {!!assetMemo.length && (
              <Text textStyle="mobile_cap" color="font.700">
                {assetMemo}
              </Text>
            )}
          </Stack>
        </Checkbox.Label>
        <Checkbox.HiddenInput />
        <Checkbox.Control
          cursor="pointer"
          bgColor="brand.white"
          border="1.5px solid"
          borderColor="#C9CBCE"
          _checked={{
            bgColor: 'brand.blue',
            borderColor: 'brand.blue',
          }}
        />
      </Checkbox.Root>
    </Flex>
  );
}

export default ConnectItem;
