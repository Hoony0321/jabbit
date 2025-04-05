const CustomDot = ({
  cx,
  cy,
  index,
}: {
  cx: number;
  cy: number;
  index: number;
}) => (
  <circle key={index} cx={cx} cy={cy} r={3} fill="#82869D" strokeWidth={1} />
);

export default CustomDot;
