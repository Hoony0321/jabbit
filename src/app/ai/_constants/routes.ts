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
  '/ai/goal/guide': 'GOAL_GUIDE',
  '/ai/goal/launch': 'GOAL_LAUNCH',

  '/ai/money-tracker': 'MONEY_TRACKER_MAIN',
  '/ai/money-tracker/budget': 'MONEY_TRACKER_BUDGET',
  '/ai/money-tracker/budget/setting': 'MONEY_TRACKER_BUDGET_SETTING',
  '/ai/money-tracker/income-expense': 'MONEY_TRACKER_INCOME_EXPENSE',
  '/ai/money-tracker/income-expense/create':
    'MONEY_TRACKER_INCOME_EXPENSE_CREATE',
  '/ai/money-tracker/income-expense/:id': 'MONEY_TRACKER_INCOME_EXPENSE_DETAIL',
  '/ai/money-tracker/guide': 'MONEY_TRACKER_GUIDE',
  '/ai/money-tracker/launch': 'MONEY_TRACKER_LAUNCH',
} as const;

type RoutePathMap = typeof ROUTE_PATH_MAP;
type RouteIdentifier = RoutePathMap[keyof RoutePathMap];

export const IDENTIFIER_TO_PATH_MAP: {
  [K in RouteIdentifier]: Extract<keyof RoutePathMap, string>;
} = Object.entries(ROUTE_PATH_MAP).reduce(
  (acc, [path, identifier]) => {
    acc[identifier as RouteIdentifier] = path as keyof RoutePathMap;
    return acc;
  },
  {} as { [K in RouteIdentifier]: keyof RoutePathMap },
);

export type Route = {
  path: string;
  header?: {
    title?: string;
    hasPrev: boolean;
    rightButton?: {
      label: string;
    };
  };
  hasNav: boolean;
  bgColor?: string;
};

export const ROUTES: Record<
  (typeof ROUTE_PATH_MAP)[keyof typeof ROUTE_PATH_MAP],
  Route
> = {
  // 코치
  COACH_MAIN: {
    path: '/ai/coach',
    hasNav: true,
    bgColor: 'app_background',
  },

  COACH_FORM_BUY_HOME: {
    path: '/ai/coach/form/buy-home',
    hasNav: false,
    bgColor: 'app_background',
  },

  COACH_FORM_FINANCIAL_GOAL: {
    path: '/ai/coach/form/financial-goal',
    hasNav: false,
    bgColor: 'app_background',
  },

  COACH_SCENARIO: {
    path: '/ai/coach/scenario',
    header: {
      title: '시나리오',
      hasPrev: true,
    },
    hasNav: false,
  },

  COACH_PLAN: {
    path: '/ai/coach/plan',
    header: {
      title: '플랜',
      hasPrev: true,
    },
    hasNav: false,
  },

  COACH_ROUTINE: {
    path: '/ai/coach/routine',
    header: {
      title: '루틴',
      hasPrev: true,
    },
    hasNav: false,
  },

  // 루틴
  GOAL_MAIN: {
    path: '/ai/goal',
    hasNav: true,
  },

  GOAL_ROUTINE: {
    path: '/ai/goal/routine',
    hasNav: true,
  },

  GOAL_STATUS: {
    path: '/ai/goal/status',
    hasNav: true,
  },

  GOAL_GUIDE: {
    path: '/ai/goal/routine/guide',
    header: {
      hasPrev: true,
    },
    hasNav: false,
  },

  GOAL_LAUNCH: {
    path: '/ai/goal/launch',
    hasNav: true,
  },

  // 가계부
  MONEY_TRACKER_MAIN: {
    path: '/ai/money-tracker',
    hasNav: true,
  },

  MONEY_TRACKER_BUDGET: {
    path: '/ai/money-tracker/budget',
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

  MONEY_TRACKER_GUIDE: {
    path: '/ai/money-tracker/guide',
    header: {
      hasPrev: true,
    },
    hasNav: false,
  },

  MONEY_TRACKER_LAUNCH: {
    path: '/ai/money-tracker/launch',
    hasNav: true,
  },
};
