const CustomRadiusTick = ({
  payload,
  x,
  y,
}: {
  payload: any;
  x: number;
  y: number;
}) => {
  if (payload.value === 75) return null;
  return (
    <text
      x={x}
      y={y}
      style={{ fontSize: '14px', fill: '#5D5D5D', fontWeight: 500 }}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {payload.value}
    </text>
  ) as any;
};

export default CustomRadiusTick;
