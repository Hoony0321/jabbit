import AccountBookHistoryCreate from '@/src/client/modules/AccountBook/AccountBookHistoryCreate';
import { TransactionTabType } from '@/src/client/modules/AccountBook/constants/tabMenus';

interface AccountBookHistoryCreatePageProps {
  params: Promise<{ type: TransactionTabType }>;
}

export default async function AccountBookHistoryCreatePage({
  params,
}: AccountBookHistoryCreatePageProps) {
  const { type } = await params;

  return <AccountBookHistoryCreate type={type} />;
}
