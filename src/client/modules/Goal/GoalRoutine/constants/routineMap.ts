export const ROUTINE_TITLE_MAP = {
  DAILY: '🗓️ 매일해야 할 루틴',
  MANAGEMENT: '💼 돈 관리 루틴',
  INVESTMENT: '💸 돈 굴리기 루틴',
  REVIEW: '🔍 지출 점검 & 피드백 루틴',
  EDUCATION: '🧠 금융 지식 & 성장 루틴',
} as const;

export type RoutineCategory = keyof typeof ROUTINE_TITLE_MAP;
export const ROUTINE_CATEGORY_LIST = Object.keys(
  ROUTINE_TITLE_MAP,
) as RoutineCategory[];
