import { GroupComparison } from '@/src/client/types/financial';

import { GroupComparisonItem } from '@/src/client/types/financial';

const CustomAngleTick =
  (data: GroupComparisonItem[]) =>
  ({
    payload,
    x,
    y,
    cx,
    cy,
  }: {
    payload: any;
    x: number;
    y: number;
    cx?: number;
    cy?: number;
    data: GroupComparison;
  }) => {
    const { value } = payload;
    const item = data.find((d: GroupComparisonItem) => d.category === value);
    if (!item) return null;

    const deltaX = x - (cx ?? 0);
    const deltaY = y - (cy ?? 0);
    const distance = 50;
    const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const labelX = x + (deltaX / length) * distance;
    const labelY = y + (deltaY / length) * distance;

    const isTopLabel = value === '소득';
    const offsetY = isTopLabel ? 16 : 0;

    return (
      <g transform={`translate(${labelX},${labelY})`}>
        <text
          y={-16 + offsetY}
          style={{
            fontWeight: '500',
            fontSize: '14px',
            textAnchor: 'middle',
            fill: '#334195',
          }}
        >
          {`${item.user.toLocaleString()}만원 | `}
          <tspan fill="#aaa">{`${item.average.toLocaleString()}만원`}</tspan>
        </text>
        <text
          y={6 + offsetY}
          style={{
            fontWeight: '500',
            fontSize: '14px',
            textAnchor: 'middle',
            fill: '#000000',
          }}
        >
          {value}
        </text>
      </g>
    ) as any;
  };

export default CustomAngleTick;
