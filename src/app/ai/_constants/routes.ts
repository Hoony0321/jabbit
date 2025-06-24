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
  '/ai/goal/status/:goalId/connect': 'GOAL_STATUS_CONNECT',
  '/ai/goal/guide': 'GOAL_GUIDE',
  '/ai/goal/launch': 'GOAL_LAUNCH',

  '/ai/account-book': 'ACCOUNT_BOOK_MAIN',
  '/ai/account-book/budget': 'ACCOUNT_BOOK_BUDGET',
  '/ai/account-book/budget/setting': 'ACCOUNT_BOOK_BUDGET_SETTING',
  '/ai/account-book/history': 'ACCOUNT_BOOK_HISTORY',
  '/ai/account-book/history/create/income': 'ACCOUNT_BOOK_CREATE_INCOME',
  '/ai/account-book/history/create/expense': 'ACCOUNT_BOOK_CREATE_EXPENSE',
  '/ai/account-book/history/:historyId': 'ACCOUNT_BOOK_EDIT',
  '/ai/account-book/guide': 'ACCOUNT_BOOK_GUIDE',
  '/ai/account-book/launch': 'ACCOUNT_BOOK_LAUNCH',
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

  GOAL_STATUS_CONNECT: {
    path: '/ai/goal/status/:goalId/connect',
    hasNav: false,
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
  ACCOUNT_BOOK_MAIN: {
    path: '/ai/account-book',
    hasNav: true,
  },

  ACCOUNT_BOOK_BUDGET: {
    path: '/ai/account-book/budget',
    hasNav: true,
  },

  ACCOUNT_BOOK_BUDGET_SETTING: {
    path: '/ai/account-book/budget/setting',
    hasNav: false,
  },

  ACCOUNT_BOOK_HISTORY: {
    path: '/ai/account-book/history',
    hasNav: true,
  },

  ACCOUNT_BOOK_CREATE_INCOME: {
    path: '/ai/account-book/history/create/income',
    header: {
      title: '내역 추가',
      hasPrev: true,
    },
    hasNav: false,
  },

  ACCOUNT_BOOK_CREATE_EXPENSE: {
    path: '/ai/account-book/history/create/expense',
    header: {
      title: '내역 추가',
      hasPrev: true,
    },
    hasNav: false,
  },

  ACCOUNT_BOOK_EDIT: {
    path: '/ai/account-book/history/expense/:historyId',
    hasNav: false,
  },

  ACCOUNT_BOOK_GUIDE: {
    path: '/ai/account-book/guide',
    header: {
      hasPrev: true,
    },
    hasNav: false,
  },

  ACCOUNT_BOOK_LAUNCH: {
    path: '/ai/account-book/launch',
    hasNav: true,
  },
};
