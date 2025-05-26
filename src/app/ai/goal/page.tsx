import { redirect } from 'next/navigation';

function GoalPage() {
  // redirect('/ai/goal/routine');

  // NOTE: 출시 알림 받기 페이지로 이동
  redirect('/ai/goal/launch');
}

export default GoalPage;
