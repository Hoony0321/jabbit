import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

export const GOAL_TABS = [
  {
    label: '루틴',
    value: 'routine',
    link: IDENTIFIER_TO_PATH_MAP['GOAL_ROUTINE'],
  },
  {
    label: '현황',
    value: 'status',
    link: IDENTIFIER_TO_PATH_MAP['GOAL_STATUS'],
  },
];
