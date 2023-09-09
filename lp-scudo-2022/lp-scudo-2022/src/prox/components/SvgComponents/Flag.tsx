import { FC } from "react";

const Flag: FC<{ color?: string; className?: string }> = ({ color = '#ff7d32', className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="87.023" height="63.25" viewBox="0 0 87.023 63.25" className={className}>
      <path d="M1053.662,240l-20.523,63.25h9.5L1063.162,240Z" transform="translate(-1014.139 -240)" fill={color} />
      <path d="M866.148,240l-20.523,63.25h9.5L875.647,240Z" transform="translate(-845.625 -240)" fill={color} />
      <path d="M1241.176,240l-20.522,63.25h9.5L1250.676,240Z" transform="translate(-1182.653 -240)" fill={color} />
      <path d="M1428.69,240l-20.523,63.25h9.5L1438.19,240Z" transform="translate(-1351.167 -240)" fill={color} />
    </svg>
  );
};

export default Flag;
