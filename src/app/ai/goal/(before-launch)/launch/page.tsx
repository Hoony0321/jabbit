import LaunchPage from '@/src/app/ai/_components/LaunchPage';

const GOAL_LAUNCH_PAGE_CONTENT = {
  mainTitle: '뭘 해야할지 막막하다면?\nAI가 루틴을 짜드려요',
  contents: [
    {
      title: '매일 루틴 제안',
      description: '오늘 할 일을 자동으로 제안해줘요',
      image: '/assets/goal_launch_1.png',
    },
    {
      title: '재무 목표 트래킹',
      description: '재무 목표를 달성하기 위한 루틴을 제안해요',
      image: '/assets/goal_launch_2.png',
    },
    {
      title: '맞춤 피드백 제공',
      description: '매일 맞춤 피드백을 제공해요',
      image: '/assets/goal_launch_3.png',
    },
  ],
};

function GoalLauchPage() {
  return <LaunchPage launchData={GOAL_LAUNCH_PAGE_CONTENT} type="goal"/>;
}

export default GoalLauchPage;
