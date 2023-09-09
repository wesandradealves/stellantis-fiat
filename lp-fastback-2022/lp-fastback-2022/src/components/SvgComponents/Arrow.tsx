import { FC } from "react";

const Arrow: FC<{ color?: string; title?: string }> = ({
  color = "#FFFFFF",
  title = "Próximo",
}) => {
  return (
    <svg
      id="Grupo_2406"
      data-name="Grupo 2406"
      xmlns="http://www.w3.org/2000/svg"
      width="8.11"
      height="13.471"
      stroke={color}
      viewBox="0 0 8.11 13.471"
    >
      <title id="arrowTitle">{title}</title>
      <path
        id="Path_3"
        data-name="Path 3"
        d="M1.362,8.11,0,6.645,7.145,0l6.326,6.69L12.018,8.064,7.055,2.815Z"
        stroke={color}
        transform="translate(8.11 0) rotate(90)"
        fill="#fefdfe"
      />
    </svg>
  );
};

export default Arrow;
