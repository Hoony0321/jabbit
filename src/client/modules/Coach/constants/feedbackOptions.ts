export enum WeeklyFeeling {
  STABLE = 'STABLE',
  THINKING_ABOUT_MONEY = 'THINKING_ABOUT_MONEY',
  UNSURE = 'UNSURE',
  DISAPPOINTED = 'DISAPPOINTED',
  PROUD = 'PROUD',
}

export enum Achievement {
  CONSISTENT_ROUTINE = 'CONSISTENT_ROUTINE',
  CONTROLLED_SPENDING = 'CONTROLLED_SPENDING',
  FINANCIAL_GOAL_FOCUS = 'FINANCIAL_GOAL_FOCUS',
  DETAILED_EXPENSE_RECORDING = 'DETAILED_EXPENSE_RECORDING',
  REDUCED_MONEY_ANXIETY = 'REDUCED_MONEY_ANXIETY',
}

export enum Failure {
  MISSED_ROUTINE = 'MISSED_ROUTINE',
  IMPULSE_SPENDING = 'IMPULSE_SPENDING',
  FORGOT_GOAL = 'FORGOT_GOAL',
  OVERSPENDING = 'OVERSPENDING',
  MONEY_WORRIES = 'MONEY_WORRIES',
}

export enum NextWeekRoutine {
  CONSISTENT_ROUTINE = 'CONSISTENT_ROUTINE',
  STICK_TO_SPENDING_PLAN = 'STICK_TO_SPENDING_PLAN',
  BUILD_RECORDING_HABIT = 'BUILD_RECORDING_HABIT',
  REFRESH_GOALS = 'REFRESH_GOALS',
  CHECK_BUDGET = 'CHECK_BUDGET',
}

export const WEEKLY_FEELING_MAP: Record<
  WeeklyFeeling,
  { name: string; icon: string }
> = {
  [WeeklyFeeling.STABLE]: {
    name: '안정적이었어요',
    icon: '😌',
  },
  [WeeklyFeeling.THINKING_ABOUT_MONEY]: {
    name: '돈 생각이 머릿속을 맴돌았어요',
    icon: '💭',
  },
  [WeeklyFeeling.UNSURE]: {
    name: '조금 불안했어요',
    icon: '😕',
  },
  [WeeklyFeeling.DISAPPOINTED]: {
    name: '계획대로 안 돼서 속상했어요',
    icon: '🥲',
  },
  [WeeklyFeeling.PROUD]: {
    name: '스스로 뿌듯했어요',
    icon: '😁',
  },
};

export const ACHIEVEMENT_MAP: Record<
  Achievement,
  { name: string; icon: string }
> = {
  [Achievement.CONSISTENT_ROUTINE]: {
    name: '루틴을 꾸준히 지켰어요',
    icon: '💪',
  },
  [Achievement.CONTROLLED_SPENDING]: {
    name: '소비를 잘 조절했어요',
    icon: '💸',
  },
  [Achievement.FINANCIAL_GOAL_FOCUS]: {
    name: '재무 목표에 집중했어요',
    icon: '🎯',
  },
  [Achievement.DETAILED_EXPENSE_RECORDING]: {
    name: '지출을 꼼꼼히 기록했어요',
    icon: '✍️',
  },
  [Achievement.REDUCED_MONEY_ANXIETY]: {
    name: '돈에 대한 불안이 줄었어요',
    icon: '🧘',
  },
};

export const FAILURE_MAP: Record<Failure, { name: string; icon: string }> = {
  [Failure.MISSED_ROUTINE]: {
    name: '루틴을 자주 놓쳤어요',
    icon: '⏰',
  },
  [Failure.IMPULSE_SPENDING]: {
    name: '충동 소비가 있었어요',
    icon: '🛍️',
  },
  [Failure.FORGOT_GOAL]: {
    name: '목표를 잊고 지냈어요',
    icon: '💭',
  },
  [Failure.OVERSPENDING]: {
    name: '예산보다 많이 썼어요',
    icon: '📉',
  },
  [Failure.MONEY_WORRIES]: {
    name: '돈 생각이 너무 많았어요',
    icon: '😵',
  },
};

export const NEXT_WEEK_ROUTINE_MAP: Record<
  NextWeekRoutine,
  { name: string; icon: string }
> = {
  [NextWeekRoutine.CONSISTENT_ROUTINE]: {
    name: '루틴을 꾸준히',
    icon: '🔄',
  },
  [NextWeekRoutine.STICK_TO_SPENDING_PLAN]: {
    name: '소비 계획 지키기',
    icon: '💳',
  },
  [NextWeekRoutine.BUILD_RECORDING_HABIT]: {
    name: '기록 습관 만들기',
    icon: '✏️',
  },
  [NextWeekRoutine.REFRESH_GOALS]: {
    name: '목표 다시 새기기',
    icon: '🎯',
  },
  [NextWeekRoutine.CHECK_BUDGET]: {
    name: '예산 점검하기',
    icon: '🔍',
  },
};
