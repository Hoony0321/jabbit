import { Stack, Text } from '@chakra-ui/react';
import CompleteSVG from '@/src/client/assets/complete.svg';

function FinancialFormSubmitted() {
  return (
    <Stack
      w="100%"
      h="calc(100vh - 300px)"
      flexDir="column"
      gap="24px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <CompleteSVG width="87px" height="87px" />
      <Stack flexDir="column" textStyle="web_b3" gap="12px">
        <Text>재무 정보를 모두 작성했어요</Text>
        <Text>정보를 수정하고 싶다면 운영진에게 문의해 주세요</Text>
      </Stack>
    </Stack>
  );
}

export default FinancialFormSubmitted;
