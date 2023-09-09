import { FC } from 'react';

const Trapezoid: FC<{ color?: string; className?: string; }> = ({ color, className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="654.55" height="368.786" viewBox="0 0 654.55 368.786" className={className}>
      <g transform="translate(282 -187.413)">
        <path d="M8367.021,1942.214,8260.572,2311h-419.1V1942.214Z" transform="translate(-7994.472 -1754.801)" fill={color ?? 'currentColor'} />
        <path d="M525.549,0,419.1,368.786H0V0Z" transform="translate(243.549 556.199) rotate(180)" fill={color ?? 'currentColor'} />
      </g>
    </svg>
  );
};

export default Trapezoid;