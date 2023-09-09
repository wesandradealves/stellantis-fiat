import sanitizeString from '@/prox/utils/sanitizeString';
import { FC } from 'react';

const Arrow: FC<{
  color?: string;
  title?: string;
  id?: string;
}> = ({ color = '#FF001E', title = 'Próximo' }) => {
  return (
    <svg
      id="arrow-bto"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="24"
      viewBox="0 0 32 24"
    >
      <rect
        id="Retângulo_2631"
        data-name="Retângulo 2631"
        width="32"
        height="24"
        opacity="0"
      />
      <path
        id="Caminho_1019"
        data-name="Caminho 1019"
        d="M0,0,6.385,5.938,12,0"
        transform="translate(13.031 18) rotate(-90)"
        fill="none"
        stroke={color ? color : '#891039'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Arrow;
