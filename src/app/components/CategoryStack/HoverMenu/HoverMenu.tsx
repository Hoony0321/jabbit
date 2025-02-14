import { Box, Flex, Text } from '@chakra-ui/react';

const HOVER_MENU_ITEMS = [
  {
    tag: '종합재무상담',
    title: '재무상담이 처음이라면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '자산/부채 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '재무 관련 Q&A',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '소비현황 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '기본 재테크 방법 설명',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
  {
    tag: '보험진단',
    title: '상세한 고민이 있다면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
  {
    tag: '부채상환',
    title: '부채 상환이 처음이라면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
  {
    tag: '투자점검',
    title: '투자 점검이 처음이라면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
  {
    tag: '종잣돈 마련',
    title: '종잣돈 마련이 처음이라면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
  {
    tag: '지출관리',
    title: '주거 상황이 처음이라면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
  {
    tag: '부동산',
    title: '소비 상황이 처음이라면?',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
      {
        title: '급여 관리 점검',
        description:
          '매월 소득을 적절하게 쓰는지 점검 해드려요매월 소득을 적절하게 쓰는지 점검 해드려요',
      },
    ],
  },
];

interface HoverMenuProps {
  tag: string;
  hover: boolean;
}

const HoverMenu = ({ tag, hover }: HoverMenuProps) => {
  const selectedTag = HOVER_MENU_ITEMS.find((item) => item.tag === tag);

  return (
    <Flex
      padding="64px 5%"
      flexDirection="column"
      justifyContent="flex-start"
      width="110%"
      height="466px"
      zIndex="100"
      backgroundColor="#fdfdfd"
      opacity={hover ? 1 : 0}
      transition="all 0.3s ease-in-out"
      position="absolute"
      top="400px"
      left="-5%"
      right="0"
      bottom="0"
      borderRadius="56px"
    >
      {selectedTag && (
        <Flex flexDirection="column" gap="56px" height="100%">
          <Text fontSize="25px" fontWeight={600}>
            {selectedTag.title}
          </Text>
          <Flex
            gap="48px"
            columnGap="180px"
            width="100%"
            height="100%"
            flexWrap="wrap"
            alignContent="space-between"
            justifyContent="flex-start"
          >
            {selectedTag.contents.map((content, index) => (
              <Flex key={index} flexDirection="column" gap="20px">
                <Text fontSize="25px" color="main.black_2">
                  {content.title}
                </Text>
                <Box width="304px">
                  <Text textStyle="md" color="main.black_4">
                    {content.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default HoverMenu;
