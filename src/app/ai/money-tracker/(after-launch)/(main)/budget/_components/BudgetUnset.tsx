import { useRouter } from 'next/navigation';
import { Button, Stack, Text } from '@chakra-ui/react';
import CuationSVG from '@/src/client/assets/caution.svg';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

function BudgetUnset() {
  const router = useRouter();

  return (
    <Stack
      alignItems="center"
      gap="32px"
      px="35px"
      py="42px"
      borderRadius="10px"
      bgColor="blue.200"
    >
      <CuationSVG width="87px" height="87px" color="#C3C2C2" />
      <Stack
        gap="8px"
        textStyle="mobile_b1_med"
        color="font.900"
        textAlign="center"
      >
        <Text>예산 데이터가 없습니다</Text>
        <Text>예산 설정 버튼을 눌러 예산을 설정해주세요</Text>
      </Stack>
      <Button
        borderRadius="8px"
        bgColor="brand.blue"
        color="brand.white"
        textStyle="mobile_b1_med"
        height="46px"
        width="100%"
        px="20px"
        py="12px"
        onClick={() =>
          router.push(IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_BUDGET_SETTING'])
        }
      >
        예산 설정
      </Button>
    </Stack>
  );
}

export default BudgetUnset;
