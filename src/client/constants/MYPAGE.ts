// 정식 오픈 시 사용될 데이터
// export const MYPAGE_SIDEBAR_DATA = [
//   {
//     title: '내 정보',
//     slug: 'my',
//   },
//   {
//     title: '재무 분석',
//     slug: 'analysis',
//   },
//   {
//     title: '상담 내역',
//     slug: 'consultation-history',
//   },
// ];

// 임시 데이터
export const MYPAGE_SIDEBAR_DATA = [
  {
    title: '재무 분석',
    slug: 'analysis',
  },
  {
    title: '상담 내역',
    slug: 'consultation-history',
  },
];

export const ANALYSIS_TAB_DATA = ['요약', '진단평가', '미래예측'];

export const LIFE_CYCLE_DESCRIPTION = [
  {
    lifeCycle: '사회초년기',
    strategy: '목적자금 마련을 위해 종잣돈 모으기',
    issues: ['졸업', '취직', '여행', '결혼'],
    financialGoals: ['전세 자금 마련', '결혼 자금 마련'],
  },
  {
    lifeCycle: '신혼기/자녀 양육기',
    strategy: '목적자금 마련을 위해 종잣돈 모으기',
    issues: ['자녀 출산', '육아/교육'],
    financialGoals: [
      '주택구입 자금',
      '육아 비용',
      '부채상환 계획',
      '비상예비자금',
    ],
  },
  {
    lifeCycle: '자녀 성장기',
    strategy: '안정성과 수익성의 균형을 통한 자산의 증식',
    issues: ['자녀 교육', '재산 형성'],
    financialGoals: [
      '주택 규모 확장',
      '자녀교육비 설계',
      '자녀 결혼자금 준비',
      '은퇴 자금 준비',
    ],
  },
  {
    lifeCycle: '가족 성숙기',
    strategy: '안정성과 수익성의 균형을 통한 자산의 증식',
    issues: ['자녀 결혼', '은퇴(퇴직)', '노후생활 준비'],
    financialGoals: [
      '자녀 결혼 자금 준비',
      '자녀 대학 교육비 지출',
      '은퇴 자금 준비',
    ],
  },
  {
    lifeCycle: '노후 생활기',
    strategy: '노후생활비 현금인출 전략',
    issues: ['노후생활 시작', '자녀 결혼', '해외여행'],
    financialGoals: ['노후 자금 유지', '상속/증여계획 준비'],
  },
];

export const FINANCIAL_RATIO = [
  {
    title: '지출',
    recommendedRatio: 70,
  },
  {
    title: '보험료',
    recommendedRatio: 8,
    maxRecommendedRatio: 10,
  },
  {
    title: '저축',
    recommendedRatio: 30,
  },
  {
    title: '투자',
    recommendedRatio: 40,
  },
  {
    title: '부채 상환',
    recommendedRatio: 25,
  },
  {
    title: '노후 대비',
    recommendedRatio: 50,
  },
  {
    title: '비상자금 보유',
    recommendedRatio: 3,
  },
];
