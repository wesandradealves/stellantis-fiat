import {FC} from 'react';

interface ChevronProps {
  color?: string;
  title?: string;
}

const ChevronRight: FC<ChevronProps> = ({color = 'currentColor', title = 'seta'}) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="8.11" height="13.471" viewBox="0 0 8.11 13.471"
           aria-labelledby={`chevron-right-${title}`}>
        <title id={`chevron-right-${title}`}>{title}</title>
        <g id="seta-destaque" transform="translate(0.732 0.681)">
          <path id="Path_3" data-name="Path 3" d="M0,5.97,6.419,0l5.645,5.97" transform="translate(5.97 0) rotate(90)"
                fill="none" stroke={color} strokeWidth="2"/>
        </g>
      </svg>
  )
}

export default ChevronRight;
