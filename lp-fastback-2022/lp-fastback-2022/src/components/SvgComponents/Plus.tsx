import { FC } from "react";

const Plus: FC<{ color?: string; title?: string }> = ({
  color = "#ff1430",
  title = "Próximo",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.536"
      height="11.536"
      viewBox="0 0 11.536 11.536"
    >
      <title id="Plus">{title}</title>

      <g
        id="Grupo_4247"
        data-name="Grupo 4247"
        transform="translate(11.536 11.536) rotate(180)"
      >
        <line
          id="Linha_17"
          data-name="Linha 17"
          y2="11.536"
          transform="translate(5.732)"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
        <line
          id="Linha_18"
          data-name="Linha 18"
          y2="11.536"
          transform="translate(11.536 5.623) rotate(90)"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default Plus;
