export const ROUTE_PATH_MAP = {
  '/ai/coach': 'COACH_MAIN',
  '/ai/coach/form/buy-home': 'COACH_FORM_BUY_HOME',
  '/ai/coach/form/financial-goal': 'COACH_FORM_FINANCIAL_GOAL',
  '/ai/coach/scenario': 'COACH_SCENARIO',
  '/ai/coach/plan': 'COACH_PLAN',
  '/ai/coach/routine': 'COACH_ROUTINE',

  '/ai/goal': 'GOAL_MAIN',
  '/ai/goal/routine': 'GOAL_ROUTINE',
  '/ai/goal/status': 'GOAL_STATUS',

  '/ai/money-tracker': 'MONEY_TRACKER_MAIN',
  '/ai/money-tracker/budget': 'MONEY_TRACKER_BUDGET',
  '/ai/money-tracker/budget/setting': 'MONEY_TRACKER_BUDGET_SETTING',
  '/ai/money-tracker/income-expense': 'MONEY_TRACKER_INCOME_EXPENSE',
  '/ai/money-tracker/income-expense/create':
    'MONEY_TRACKER_INCOME_EXPENSE_CREATE',
  '/ai/money-tracker/income-expense/:id': 'MONEY_TRACKER_INCOME_EXPENSE_DETAIL',
} as const;

export type Route = {
  path: string;
  header?: {
    title: string;
    hasPrev: boolean;
    rightButton?: {
      label: string;
    };
  };
  hasNav: boolean;
  pageBgColor?: string;
  mobileBgColor?: string;
};

export const ROUTES: Record<
  (typeof ROUTE_PATH_MAP)[keyof typeof ROUTE_PATH_MAP],
  Route
> = {
  // 코치
  COACH_MAIN: {
    path: '/ai/coach',
    header: {
      title: 'AI 코치 재빗',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'white',
    mobileBgColor: 'app_background',
  },
  COACH_FORM_BUY_HOME: {
    path: '/ai/coach/form/buy-home',
    hasNav: false,
    pageBgColor: 'white',
    mobileBgColor: 'app_background',
  },
  COACH_FORM_FINANCIAL_GOAL: {
    path: '/ai/coach/form/financial-goal',
    hasNav: false,
    pageBgColor: 'white',
    mobileBgColor: 'app_background',
  },
  COACH_SCENARIO: {
    path: '/ai/coach/scenario',
    header: {
      title: '시나리오',
      hasPrev: true,
    },
    hasNav: false,
    pageBgColor: 'white',
    mobileBgColor: 'white',
  },

  COACH_PLAN: {
    path: '/ai/coach/plan',
    header: {
      title: '플랜',
      hasPrev: true,
    },
    hasNav: false,
    pageBgColor: 'white',
    mobileBgColor: 'white',
  },

  COACH_ROUTINE: {
    path: '/ai/coach/routine',
    header: {
      title: '루틴',
      hasPrev: true,
    },
    hasNav: false,
    pageBgColor: 'white',
    mobileBgColor: 'white',
  },

  // 루틴
  GOAL_MAIN: {
    path: '/ai/goal',
    header: {
      title: '루틴',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  GOAL_ROUTINE: {
    path: '/ai/goal/routine',
    header: {
      title: '루틴',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  GOAL_STATUS: {
    path: '/ai/goal/status',
    header: {
      title: '루틴',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  // 가계부
  MONEY_TRACKER_MAIN: {
    path: '/ai/money-tracker',
    header: {
      title: '가계부',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  MONEY_TRACKER_BUDGET: {
    path: '/ai/money-tracker/budget',
    header: {
      title: '가계부',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  MONEY_TRACKER_BUDGET_SETTING: {
    path: '/ai/money-tracker/budget/setting',
    header: {
      title: '예산 설정',
      hasPrev: true,
      rightButton: {
        label: '저장',
      },
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  MONEY_TRACKER_INCOME_EXPENSE: {
    path: '/ai/money-tracker/income-expense',
    header: {
      title: '가계부',
      hasPrev: false,
    },
    hasNav: true,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  MONEY_TRACKER_INCOME_EXPENSE_CREATE: {
    path: '/ai/money-tracker/income-expense/create',
    header: {
      title: '내역 추가',
      hasPrev: true,
    },
    hasNav: false,
    pageBgColor: 'blue.200',
    mobileBgColor: 'white',
  },

  MONEY_TRACKER_INCOME_EXPENSE_DETAIL: {
    path: '/ai/money-tracker/income-expense/:id',
    header: {
      title: '내역 수정',
      hasPrev: true,
      rightButton: {
        label: '삭제',
      },
    },
    hasNav: false,
    mobileBgColor: 'white',
  },
};
