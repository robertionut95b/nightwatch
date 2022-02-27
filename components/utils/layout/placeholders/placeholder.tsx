export const Placeholder = ({
  width = 180,
  height = 250,
  label = 'No poster',
}: {
  width: number;
  height: number;
  label?: string;
}): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <rect
        fill="var(--color-background-secondary)"
        width={width}
        height={height}
      />
      <text
        fill="#fff"
        fontSize="30"
        dy="10.5"
        fontWeight="bold"
        x="50%"
        y="50%"
        textAnchor="middle"
      >
        {label}
      </text>
    </svg>
  );
};
