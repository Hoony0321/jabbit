import LaunchPage from '@/src/app/ai/_components/LaunchPage';

const MONEY_TRACKER_LAUNCH_PAGE_CONTENT = {
  mainTitle: '소비관리 어렵다면?\nAI가 매주 점검해드려요',
  contents: [
    {
      title: '소비 한도 관리',
      image: '/assets/money_tracker_launch_1.png',
    },
    {
      title: '소비 흐름 보기',
      image: '/assets/money_tracker_launch_2.png',
    },
    {
      title: '맞춤 피드백 제공',
      image: '/assets/money_tracker_launch_3.png',
    },
  ],
};

function MoneyTrackerLaunchPage() {
  return (
    <LaunchPage
      launchData={MONEY_TRACKER_LAUNCH_PAGE_CONTENT}
      type="money-tracker"
    />
  );
}

export default MoneyTrackerLaunchPage;
