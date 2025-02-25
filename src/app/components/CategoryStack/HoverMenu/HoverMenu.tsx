import { Box, Flex, Text } from '@chakra-ui/react';

const HOVER_MENU_ITEMS = [
  {
    tag: '종합재무상담',
    title: '재무상담이 처음이라면 추천!',
    contents: [
      {
        title: '급여 관리 점검',
        description:
          '월 급여를 기반으로 ‘소득/저축/투자/지출’이 적절히 이뤄지는지 전반적으로 점검해 드려요.',
      },
      {
        title: '자산/부채 점검',
        description:
          '현재 보유한 자산과 부채를 살펴보고 문제는 없는지, 개선사항이 있는지 확인해 드려요.',
      },
      {
        title: '소비현황 점검',
        description:
          '지출 항목을 세세하게 뜯어보며 현재 소비수준이 적절한지 점검해 드려요.',
      },
      {
        title: '기본 재무관리 방법 설명',
        description:
          '현금흐름과 자산/부채 현황을 살펴보고 놓치고 있는 기본 재무관리 방법을 알려드려요.',
      },
    ],
  },
  {
    tag: '보험진단',
    title: '보험 고민이 있다면?',
    contents: [
      {
        title: '기존 보험 점검',
        description: '기존 가입한 보험의 보장 내용이 충분한지 점검해 드려요.',
      },
      {
        title: '보험료 점검',
        description: '기존 가입한 보험의 보험료가 적절한지 점검해 드려요.',
      },
      {
        title: '보험 리모델링 검토',
        description:
          '기존 가입한 보험을 점검하고, 신규 보험으로 추가 보완이 필요한지 검토해 드려요.',
      },
      {
        title: '신규 보험 가입 검토',
        description: '가입 고민되는 보험 상품을 객관적으로 분석해 드려요.',
      },
    ],
  },
  {
    tag: '투자점검',
    title: '투자 조언을 받고 싶다면?',
    contents: [
      {
        title: '포트폴리오 점검',
        description: '현재 투자 포트폴리오를 전반적으로 점검해 드려요.',
      },
      {
        title: '포트폴리오 보완',
        description:
          '투자 포트폴리오에 필요한 보완사항(ex 자산배분, 위험분산 등)을 제시해 드려요.',
      },
      {
        title: '투자 자산군 설명',
        description: '궁금한 투자 자산군에 관해 쉽게 설명드려요.',
      },
    ],
  },
  {
    tag: '종잣돈 마련',
    title: '체계적으로 자금 마련하고 싶다면?',
    contents: [
      {
        title: '적정 목표 설정',
        description: '전문가와 함께 현재 적정한 종잣돈 목표를 설정해요.',
      },
      {
        title: '마련 계획 수립',
        description: '목표 종잣돈을 마련하기 위한 계획을 설정해 드려요.',
      },
      {
        title: '적정 자산군 추천',
        description: '목표 종잣돈을 마련하기에 적절한 자산군을 추천해 드려요.',
      },
      {
        title: '실천 계획 수립',
        description:
          '목표 종잣돈을 마련하기 위해 연/월/주 단위의 실천사항을 설정해 드려요.',
      },
    ],
  },
  {
    tag: '지출관리',
    title: '',
    contents: [
      {
        title: '소비습관 점검',
        description: '현재 월 소득대비하여 소비습관이 적절한지 확인해 드려요.',
      },
      {
        title: '개선방법 제시',
        description: '소비습관 개선을 위해 실천적인 방법을 제시해 드려요.',
      },
    ],
  },
  {
    tag: '부채상환',
    title: '부채 고민을 해결하고 싶다면?',
    contents: [
      {
        title: '상환 계획 수립',
        description:
          '현재 부채 상황을 분석하고 효율적인 상환 계획을 세워 드려요.',
      },
      {
        title: '상환 순서 결정',
        description:
          '여러 부채가 있을 경우, 우선적으로 갚아야 할 순서를 결정해 드려요.',
      },
      {
        title: '상환 방안 논의',
        description:
          '원리금 상환 방식, 조기 상환 여부 등 최적의 상환 방안을 함께 고민해 드려요.',
      },
      {
        title: '부채 관련 신용상담',
        description:
          '신용점수 관리부터 대출 재조정까지 부채 관련 신용 이슈를 상담해 드려요.',
      },
    ],
  },
  {
    tag: '부동산',
    title: '내 집마련에 고민있다면?',
    contents: [
      {
        title: '내 집 마련 방법 설명',
        description:
          '집을 사기 위해 필요한 절차와 고려해야 할 사항을 알려드려요.',
      },
      {
        title: '매입 전략 수립',
        description:
          '부동산 시장 상황을 반영한 최적의 매입 전략을 세워 드려요.',
      },
      {
        title: '매입 자금 계획 수립',
        description:
          '주택 구매를 위한 예산을 설정하고 자금 조달 방법을 점검해 드려요.',
      },
      {
        title: '대출 방안 논의',
        description:
          '주택담보대출 등 다양한 대출 상품을 비교하고 최적의 대출 방법을 찾아드려요.',
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
