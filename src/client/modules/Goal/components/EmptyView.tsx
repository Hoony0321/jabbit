import { Flex, Stack, Text } from '@chakra-ui/react';
import ConsultingSVG from '@/src/client/assets/consulting.svg';
import { COLORS } from '@/src/client/theme/colors';

function EmptyView({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <Stack alignItems="center" gap="0px" textAlign="center">
        <ConsultingSVG
          width="100px"
          height="100px"
          color={COLORS.font[500].value}
        />
        <Text textStyle="mobile_h2" color="font.900">
          {title}
        </Text>
        {description && (
          <Text
            textStyle="mobile_b1_med"
            color="font.700"
            whiteSpace="pre-wrap"
            textAlign="center"
          >
            {description}
          </Text>
        )}
      </Stack>
    </Flex>
  );
}

export default EmptyView;
