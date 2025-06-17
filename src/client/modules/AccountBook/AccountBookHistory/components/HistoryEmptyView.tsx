import { COLORS } from '@/src/client/theme/colors';
import { Flex, Stack, Text } from '@chakra-ui/react';
import CautionSVG from '@/src/client/assets/caution.svg';

function HistoryEmptyView() {
  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <Stack alignItems="center" gap="32px" textAlign="center">
        <CautionSVG width="87px" height="87px" color={COLORS.font[500].value} />
        <Stack
          textStyle="mobile_b1_med"
          textAlign="center"
          gap="8px"
          color="font.900"
        >
          <Text>지출/수입 데이터가 없어요</Text>
          <Text>추가 버튼을 눌러 데이터를 설정해주세요</Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default HistoryEmptyView;
