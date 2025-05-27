import Link from 'next/link';
import { Stack, Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import ChevronRightSVG from '@/src/client/assets/chevron-right.svg';

interface GuideLinkButtonProps {
  data: {
    title: string;
    description: string;
    link: string;
  };
}

function GuideLinkButton({ data }: GuideLinkButtonProps) {
  return (
    <Link href={data.link}>
      <Flex
        borderRadius="10px"
        bgColor="blue.200"
        py="12px"
        px="14px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack gap="4px">
          <Text textStyle="mobile_cap" color="font.700">
            {data.title}
          </Text>
          <Text textStyle="mobile_b1_semi" color="brand.blue">
            {data.description}
          </Text>
        </Stack>
        <ChevronRightSVG width="24px" height="24px" />
      </Flex>
    </Link>
  );
}

export default GuideLinkButton;
