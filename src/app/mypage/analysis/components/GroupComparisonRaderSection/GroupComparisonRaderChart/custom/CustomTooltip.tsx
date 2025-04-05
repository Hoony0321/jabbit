import { GroupComparisonItem } from '@/src/client/types/financial';

type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
  data: GroupComparisonItem[];
};

const CustomTooltip = ({ active, payload, data }: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const { category } = payload[0].payload;
  const item = data.find((d) => d.category === category);

  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        color: '#333',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: '6px' }}>{category}</div>
      <div style={{ marginBottom: '4px', color: '#334195' }}>
        나 : {item?.user.toLocaleString()}만원
      </div>
      <div style={{ color: '#666' }}>
        평균 : {item?.average.toLocaleString()}만원
      </div>
    </div>
  );
};

export default CustomTooltip;
