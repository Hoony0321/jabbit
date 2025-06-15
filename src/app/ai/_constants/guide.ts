import { IDENTIFIER_TO_PATH_MAP } from './routes';

export const GUIDE_BUTTONS = {
  goal: {
    title: '루틴 생성 기준',
    description: '이 루틴, 왜 따라야 하나요?',
    link: IDENTIFIER_TO_PATH_MAP['GOAL_GUIDE'],
  },
  'account-book': {
    title: '가계부 작성 이유',
    description: '가계부, 귀찮은데 왜 써야 하나요?',
    link: IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_GUIDE'],
  },
};

export interface GuideContent {
  title: string;
  description: string;
  questions: { title: string; description?: string; list?: string[] }[];
}

export const ROUTINE_GUIDE_CONTENT: GuideContent = {
  title: '📌 이 루틴, 왜 따라야 하나요?',
  description:
    '재무 목표를 더 빠르고 효율적으로 달성하기 위해\n전문가와 AI가 함께 설계한 맞춤 루틴이에요.',
  questions: [
    {
      title: 'Q. 어떻게 만들어졌나요?',
      description:
        '입력한 정보를 모두 반영해 AI가 최적의 루틴을\n설계해요. 당신에게만 딱 알맞는, 초개인화 루틴이에요.',
      list: [
        '월 현금흐름, 자산/부채 등 재무 데이터',
        '재무 목표, 고민, 투자성향 등 비재무 정보',
        '전문가와의 1:1 상담 결과 및 평가',
      ],
    },
    {
      title: 'Q. 이 루틴을 꾸준히 하면?',
      list: [
        '현금흐름 개선으로 투자·저축은 늘고 소비는 안정돼요',
        '시간이 지날수록 자산은 증가하고, 부채는 줄어들어요',
        '재무목표 달성률이 눈에 띄게 올라가요',
        '그 과정에서의 불안과 막막함도 점차 사라질 거예요',
      ],
    },
  ],
};

export const ACCOUNT_BOOK_GUIDE_CONTENT: GuideContent = {
  title: '📌 가계부, 귀찮은데 왜 써야 하나요?',
  description:
    'AI 재무 리포트를 받기 위해서예요.\n\n 매주 한 번, AI가 당신의 재무 습관을 분석해\n개인 맞춤형 피드백 리포트를 보내드립니다.',
  questions: [
    {
      title: 'Q. 리포트는 무엇이 담겨있나요?',
      list: [
        '주간 소비 분석',
        '재무 목표 달성 현황',
        '향후 예상 흐름 등이 담겨있어요',
      ],
    },
    {
      title: 'Q. 리포트 예시를 알려줄 수 있나요?',
      list: [
        '이번 주 외식이 많았어요. 다음 주엔 식비 예산을 조절 해볼까요?',
        '이번 달 저축률은 12%에요. 지난달보다 4% 상승했어요.',
        '현재 목표 달성률은 65%에요. 이 흐름이면 6개월 후 목표 달성 가능해요.',
      ],
    },
    {
      title: 'Q. 리포트를 더 정확하게 받고 싶다면?',
      description:
        '소비 데이터를 꾸준히 기록해야 합니다.\n소비 내역이 쌓일수록 AI는 당신의 목표와 소비 패턴의 관계를 더 정밀하게 분석할 수 있어요.',
    },
    {
      title: 'Q. 리포트를 받으면 무엇이 달라지나요?',
      list: [
        '소비를 조절할 타이밍을 놓치지 않게 돼요',
        '잘한 부분을 즉시 확인하고 동기부여 받을 수 있어요',
        '부족한 부분은 다음주에 개선할 수 있어요',
        '당신에게 맞는 새로운 재무 루틴이 제안돼요',
      ],
    },
  ],
};
