import { FC } from 'react';

interface ChevronBoldProps {
  color?: string;
  title?: string;
}

const ChevronBold: FC<ChevronBoldProps> = ({
  color = '#ff7d32',
  title = 'seta',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.422"
      height="10.539"
      viewBox="0 0 15.422 10.539"
      aria-labelledby={`chevron-bold-${title}`}
    >
      <title id={`chevron-bold-${title}`}>{title}</title>

      <path
        id="Caminho_1124"
        data-name="Caminho 1124"
        d="M8676.9,1100.272l-6.3,6.3-6.3-6.3"
        transform="translate(-8662.889 -1098.858)"
        fill="none"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};

export default ChevronBold;
