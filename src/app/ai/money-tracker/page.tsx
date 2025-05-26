import { redirect } from 'next/navigation';

function MoneyPage() {
  // redirect('/ai/money-tracker/budget');

  // NOTE: 출시 알림 받기 페이지로 이동
  redirect('/ai/money-tracker/launch');
}

export default MoneyPage;
