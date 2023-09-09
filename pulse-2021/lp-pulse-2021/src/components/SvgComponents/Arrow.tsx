import { FC } from 'react';

const Arrow: FC<{ color?: string; title?: string }> = ({ color = '#FFFFFF', title = 'Próximo' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18.708" height="15.383" viewBox="0 0 18.708 15.383" role="img" aria-labelledby="arrowTitle">
      <title id="arrowTitle">{title}</title>
      <g id="Group_2406" data-name="Group 2406" transform="translate(0 0.681)">
        <path id="Path_3" data-name="Path 3" d="M0,6.916,7.436,0l6.539,6.916" transform="translate(17.3 0) rotate(90)" fill="none" stroke={color} strokeWidth="2" />
        <path id="Path_4" data-name="Path 4" d="M0,0V17.4" transform="translate(17.397 6.976) rotate(90)" fill="none" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  )
}

export default Arrow;
