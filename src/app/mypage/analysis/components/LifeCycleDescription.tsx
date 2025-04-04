interface LifeCycleDescriptionProps {
  lifeCycle: string;
  strategy: string;
  issues: string[];
}

const LifeCycleDescription = ({
  lifeCycle,
  strategy,
  issues,
}: LifeCycleDescriptionProps) => {
  return (
    <ul>
      <li
        style={{
          fontSize: '16px',
          color: '#868686',
          listStyle: 'disc',
          marginLeft: '22px',
          fontWeight: '500',
        }}
      >
        현재{' '}
        <span style={{ color: '#000000', textDecorationLine: 'underline' }}>
          {lifeCycle}
        </span>
        에 속해있어요
      </li>
      <li
        style={{
          fontSize: '16px',
          color: '#868686',
          listStyle: 'disc',
          marginLeft: '22px',
          fontWeight: '500',
        }}
      >
        핵심투자 전략은{' '}
        <span style={{ color: '#000000', textDecorationLine: 'underline' }}>
          {strategy}
        </span>
        가 중요해요
      </li>
      <li
        style={{
          fontSize: '16px',
          color: '#868686',
          listStyle: 'disc',
          marginLeft: '22px',
          fontWeight: '500',
        }}
      >
        주요 재무 이슈로{' '}
        <span style={{ color: '#000000', textDecorationLine: 'underline' }}>
          {issues.join(', ')}
        </span>
        이 발생할 수 있어요.
      </li>
    </ul>
  );
};

export default LifeCycleDescription;
