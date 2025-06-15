import { redirect } from 'next/navigation';
import { IDENTIFIER_TO_PATH_MAP } from '../_constants/routes';

export default function AccountBookPage() {
  // redirect(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_BUDGET']);

  // NOTE: 출시 알림 받기 페이지로 이동
  redirect(IDENTIFIER_TO_PATH_MAP['ACCOUNT_BOOK_LAUNCH']);
}
