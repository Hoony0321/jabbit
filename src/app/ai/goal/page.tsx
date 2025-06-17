import { redirect } from 'next/navigation';
import { IDENTIFIER_TO_PATH_MAP } from '../_constants/routes';

function GoalPage() {
  redirect(IDENTIFIER_TO_PATH_MAP['GOAL_ROUTINE']);

  // NOTE: 출시 알림 받기 페이지로 이동
  // redirect(IDENTIFIER_TO_PATH_MAP['GOAL_LAUNCH']);
}

export default GoalPage;
