export const ROUTE_PATH_MAP = {
  '/ai/coach': 'COACH_MAIN',
  '/ai/coach/goal': 'COACH_GOAL',
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
  header: {
    title: string;
    hasPrev: boolean;
    rightButton?: {
      label: string;
    };
  };
  hasNav: boolean;
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
  },

  COACH_GOAL: {
    path: '/ai/coach/goal',
    header: {
      title: '목표',
      hasPrev: true,
    },
    hasNav: true,
  },

  COACH_PLAN: {
    path: '/ai/coach/plan',
    header: {
      title: '계획',
      hasPrev: true,
    },
    hasNav: true,
  },

  COACH_ROUTINE: {
    path: '/ai/coach/routine',
    header: {
      title: '루틴',
      hasPrev: true,
    },
    hasNav: true,
  },

  // 루틴
  GOAL_MAIN: {
    path: '/ai/goal',
    header: {
      title: '루틴',
      hasPrev: false,
    },
    hasNav: true,
  },

  GOAL_ROUTINE: {
    path: '/ai/goal/routine',
    header: {
      title: '루틴',
      hasPrev: false,
    },
    hasNav: true,
  },

  GOAL_STATUS: {
    path: '/ai/goal/status',
    header: {
      title: '루틴',
      hasPrev: false,
    },
    hasNav: true,
  },

  // 가계부
  MONEY_TRACKER_MAIN: {
    path: '/ai/money-tracker',
    header: {
      title: '가계부',
      hasPrev: false,
    },
    hasNav: true,
  },

  MONEY_TRACKER_BUDGET: {
    path: '/ai/money-tracker/budget',
    header: {
      title: '가계부',
      hasPrev: false,
    },
    hasNav: true,
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
  },

  MONEY_TRACKER_INCOME_EXPENSE: {
    path: '/ai/money-tracker/income-expense',
    header: {
      title: '가계부',
      hasPrev: false,
    },
    hasNav: true,
  },

  MONEY_TRACKER_INCOME_EXPENSE_CREATE: {
    path: '/ai/money-tracker/income-expense/create',
    header: {
      title: '내역 추가',
      hasPrev: true,
    },
    hasNav: false,
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
  },
};
