import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const type = pathname.split('/').pop()?.toUpperCase();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  type SurveyResponse = {
    strategy?: string;
    goal_type?: string;
    customer_goal?: string;
    goal_evaluation?: string;
    plan_type?: string;
    core_recommendation?: string;
    recommendation_reason?: string;
    name?: string;
    category?: string;
    frequency?: string;
    description?: string;
    statusCheckRoutine?: string;
    statusCheckBudget?: string;
    emotionCarePositive?: string;
    emotionCareNegative?: string;
    forecastAssetChange?: string;
    forecastCashFlow?: string;
    routineRecoList?: { 
      name: string;
      category: string;
      frequency: string;
      description: string;
    }[];
  };

  type SurveyBody = {
    contentType: string | undefined;
    response: SurveyResponse[];
    createdAt: string;
  };

  type SurveyAPIResponse = {
    code: string;
    message: string | null;
    body: SurveyBody;
  };

  const base: SurveyAPIResponse = {
    code: 'success',
    message: null,
    body: {
      contentType: type,
      response: [],
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
    },
  };

  if (type === 'SCENARIO') {
    base.body.response = [
      {
        strategy:
          '예금 중심 자산 일부를 ETF 등 중위험 투자 상품으로 분산. 연금저축·ISA 활용 검토 및 자동 이체 기반 정액 투자 설정. 중기 목표에 맞춘 유동성과 수익률 균형 유지. 금융교육 또는 재무 상담을 통해 투자 실행력 강화 필요.',
        goal_type: '중기 재무목표',
        customer_goal:
          '3~5년 내 전셋집 혹은 자차 마련을 위한 4천만~6천만 원 마련',
        goal_evaluation:
          '중기 목표 명시는 없지만, 응답 내용 기반 5년 내 전세자금 확보 희망. 현재 자산 구성은 예금 위주로 수익률 낮음. 중기 목표 대비 투자 성과 및 구조 부족. 연 5% 수익률 가정 시 연 1,000만 원 투자로 5년 후 약 5,800만 원 마련 가능.',
      },
      {
        strategy:
          '월 평균 지출 약 170만 원, 세후 소득 약 328만 원 기준. 월 130만 원 이상 자동 저축 설정 필요 (예: CMA 또는 단기 적금). 비상금 외 목적자금은 별도 분리. 비정기 수입 및 보너스는 예금 또는 단기채 상품에 활용. 현재 자산 + 24개월 저축으로 1억 원 달성 가능.',
        goal_type: '단기 재무목표',
        customer_goal: '2년 이내 1억 원을 모아 경제적 안정 기반 마련',
        goal_evaluation:
          '현금성 자산은 약 5,700만 원 보유 (예금, 적금, CMA 포함). 월 저축은 없으며 연초 일시불 예금 형태. 현재 소비 구조는 지출 후 잔여금 저축. 2년 내 3,000만 원 이상의 추가 저축 필요.',
      },
    ];
  } else if (type === 'PLAN') {
    base.body.response = [
      {
        plan_type: '현금흐름 계획',
        core_recommendation:
          '월 130만 원 이상을 목적형 자동 저축으로 설정하고, 비정기 소득은 별도 예금 계좌에 수시 이체하세요.',
        recommendation_reason:
          "현재 지출은 월 170만 원 내외로 비교적 안정적이며, 고정 지출 이외의 여유자금을 자동 이체 기반으로 구조화하면 '지출 후 저축'이 아닌 '저축 후 소비' 패턴으로 전환할 수 있습니다. 이를 통해 단기 및 중기 자산 형성이 실현 가능해집니다.",
      },
      {
        plan_type: '소비 최적화 계획',
        core_recommendation:
          '고정 생활비 외 여가·의복·유흥비 등 비필수 지출을 월 50만 원 수준으로 제한하고, 분기별로 소비리뷰를 하세요.',
        recommendation_reason:
          '현재 여가 및 미용, 유흥 소비가 월 100만 원 이상으로 추정되며, 명확한 소비 기준 없이 진행 중입니다. 개인 성장을 중시하는 라이프스타일을 유지하되, 소비 항목을 분류해 만족도와 가성비를 함께 점검하면 스트레스를 줄이며 소비 만족도를 높일 수 있습니다.',
      },
      {
        plan_type: '금융상품 활용 계획',
        core_recommendation:
          '청년도약계좌, 연금저축, ISA 계좌를 활용해 중기 및 장기 목표별로 상품을 분산 운용하세요.',
        recommendation_reason:
          '현재 예금 중심의 자산 구조는 수익률 한계가 있으며, 장기적으로 실질 구매력 하락 가능성이 있습니다. 세제 혜택을 받을 수 있는 연금저축과 ISA, 정부지원 상품인 청년도약계좌 등을 조합하면 목적별로 유동성과 수익률을 모두 확보할 수 있습니다.',
      },
      {
        plan_type: '금융지식 습득 계획',
        core_recommendation:
          '월 1회 이상 온라인 강의, 금융 리포트 구독, 또는 전문가 상담을 통해 기본 금융 개념과 실전 감각을 기르세요.',
        recommendation_reason:
          'ISA, 레버리지 등 금융 지식에 대한 흥미는 있으나 실행 장벽이 존재합니다. 실전 투자를 시작하기 전, 금융지식 습득 루틴을 만들면 장기적인 투자 실행력과 자신감을 높이는 데 효과적입니다.',
      },
    ];
  } else if (type === 'ROUTINE') {
    base.body.response = [
      {
        name: '매일 · 1회 – 가계부 tab에 지출내역 쓰기',
        category: 'DAILY',
        frequency: 'DAILY',
        description:
          '모든 지출을 당일 기록하세요. 작게는 커피 한 잔, 크게는 쇼핑까지 기록하는 습관이 돈 관리의 출발입니다.',
      },
      {
        name: '매일 · 1회 – 오늘의 잔액 확인하고 메모하기',
        category: 'DAILY',
        frequency: 'DAILY',
        description:
          '오늘 남은 금액을 확인하며 지출을 인식하세요. 하루 예산 안에서 소비하는 감각을 기를 수 있습니다.',
      },
      {
        name: '매일 · 1회 – 투자 계좌 수익률 한 번 훑어보기',
        category: 'DAILY',
        frequency: 'DAILY',
        description:
          '큰 판단 없이 현황만 체크하세요. 꾸준히 보는 습관이 시장 흐름과 내 자산의 상관관계를 익히는 훈련이 됩니다.',
      },
      {
        name: '매일 · 1회 – 뉴스 1개 읽고 키워드 정리하기',
        category: 'DAILY',
        frequency: 'DAILY',
        description:
          '경제나 부동산 관련 뉴스를 짧게라도 접하며, 시장과 정책 흐름을 감각적으로 익히는 데 도움이 됩니다.',
      },
      {
        name: '매주 · 1회 – 한 주간 소비 정리하고 총액 체크하기',
        category: 'MANAGEMENT',
        frequency: 'WEEKLY',
        description:
          '주간 소비 합계를 점검해 패턴을 파악하세요. 고정비와 변동비를 구분하면 개선할 부분이 보입니다.',
      },
      {
        name: '매주 · 1회 – ETF와 주식 종목 리밸런싱 검토하기',
        category: 'INVESTMENT',
        frequency: 'WEEKLY',
        description:
          '과열·저평가 구간을 판단해 비중을 조정하세요. 감정적 매매를 줄이고 계획투자를 실현하는 루틴입니다.',
      },
      {
        name: '매주 · 1회 – 지난주 불필요한 소비 1개 적어보기',
        category: 'REVIEW',
        frequency: 'WEEKLY',
        description:
          '‘안 써도 될 뻔한 소비’를 기록해보세요. 반복되는 소비 실수를 줄이는 데 효과적입니다.',
      },
      {
        name: '매주 · 1회 – 금융 콘텐츠 하나 듣고 요약 작성하기',
        category: 'EDUCATION',
        frequency: 'WEEKLY',
        description:
          '집코노미, 투교협 등 콘텐츠를 선택해 듣고 요약해보세요. 지식 정리는 곧 실행력입니다.',
      },
      {
        name: '매월 · 1회 – 고정지출 내역 검토 및 변경여부 점검',
        category: 'MANAGEMENT',
        frequency: 'MONTHLY',
        description:
          '월세, 통신비 등 고정비 항목을 검토해 개선 가능한 부분을 찾으세요. 한 번의 점검이 1년을 바꿉니다.',
      },
      {
        name: '매월 · 1회 – IRP/ISA/ETF 계좌 수익률 정리하기',
        category: 'INVESTMENT',
        frequency: 'MONTHLY',
        description:
          '수익률을 기록하고 원인 분석을 하며, 다음 투자 판단의 기준을 세울 수 있습니다.',
      },
      {
        name: '매월 · 1회 – 자산 현황 표로 정리하기',
        category: 'REVIEW',
        frequency: 'MONTHLY',
        description:
          '총자산, 총부채, 순자산을 간단한 표로 정리해보세요. 자산 흐름이 한눈에 보이면 의사결정이 쉬워집니다.',
      },
      {
        name: '매월 · 1회 – 재무 목표 진도 체크리스트 점검',
        category: 'EDUCATION',
        frequency: 'MONTHLY',
        description:
          '내 집 마련, 투자 시드금 등 목표 달성 현황을 확인하고, 진행률을 숫자로 표현해보세요.',
      },
    ];
  } else if (type === 'WEEKLY-FEEDBACK') {
    base.body.response = [
      {
        statusCheckRoutine:
          '총 8개의 주간 루틴 중 5개 수행 완료 (63%).\nETF 매수 성공 🎯.\n감정 소비 기록 작성 Good!\n소비 기준 설정은 이번 주 미수행.',
        statusCheckBudget:
          '이번 주 총 지출: ₩420,000,\n예산대비 지출률: 84% (양호).\n주요 지출: 식비(180,000), 교통(85,000), 게임 관련(50,000)',
        emotionCarePositive:
          '지난주보다 감정 소비 횟수가 2회 → 1회로 감소 🎉.\n첫 ETF 매수 경험 완료! 포트폴리오 시작에 의미를 부여했어요.',
        emotionCareNegative:
          '매달 설정했던 소비 기준(배달 5회 이하) 체크가 누락되었어요.\n감정 리포트 피드백 작성이 비어 있었어요.\n이번 주 마무리하며 짧게라도 남겨보는 건 어때요?',
        forecastAssetChange:
          'ETF 포함 투자자산이 처음으로 ₩100,000 돌파!\n학자금 부채는 아직 변동 없음 (상환 시작은 2026년 예정).',
        forecastCashFlow:
          '예상 잉여 자금: 약 ₩250,000.\n목표 비상금 300만 원까지 남은 금액: 약 ₩2,750,000',
        routineRecoList: [
          {
            name: '매일 · 1회 – 가계부 tab에 지출내역 쓰기',
            category: 'DAILY',
            frequency: 'DAILY',
            description:
              '모든 지출을 당일 기록하세요. 작게는 커피 한 잔, 크게는 쇼핑까지 기록하는 습관이 돈 관리의 출발입니다.',
          },
          {
            name: '매일 · 1회 – 감정 소비한 날 기록 남기기',
            category: 'DAILY',
            frequency: 'DAILY',
            description:
              '감정으로 지출한 날에는 무엇을, 왜 샀는지를 짧게라도 기록해보세요. 감정과 소비의 연결고리를 알 수 있어요.',
          },
          {
            name: '매주 · 1회 – ETF 샀어요 기록 남기기',
            category: 'REVIEW',
            frequency: 'WEEKLY',
            description:
              'ETF를 구매한 후 느낀 감정이나 이유를 자유롭게 기록해보세요. 투자 경험이 쌓이기 시작해요.',
          },
          {
            name: '매주 · 1회 – 소비 기준 체크 + 이모지 평가 남기기',
            category: 'REVIEW',
            frequency: 'WEEKLY',
            description:
              '이번 주 내가 설정한 소비 기준을 잘 지켰는지 돌아보세요. 이모지로 감정 상태도 함께 남겨보세요.',
          },
        ],
      },
    ];
  } else {
    return NextResponse.json(
      { code: 'error', message: 'Invalid type parameter' },
      { status: 400 },
    );
  }

  return NextResponse.json(base);
}
