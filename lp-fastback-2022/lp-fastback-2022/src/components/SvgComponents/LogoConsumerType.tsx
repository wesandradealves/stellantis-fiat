import { FC } from "react";

const LogoConsumerType: FC<{ color?: string; title?: string }> = ({
  color = "#FFFFFF",
  title = "Próximo",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="186.236"
      height="135.301"
      viewBox="0 0 186.236 135.301"
    >
      <path
        id="Caminho_4626"
        data-name="Caminho 4626"
        d="M49.77,0,5.857,135.3H26.174L70.1,0Z"
        transform="translate(34.81 0)"
        fill="#edede3"
      />
      <path
        id="Caminho_4627"
        data-name="Caminho 4627"
        d="M43.92,0,0,135.3H20.353L64.266,0Z"
        transform="translate(0 0)"
        fill="#268f52"
      />
      <path
        id="Caminho_4628"
        data-name="Caminho 4628"
        d="M55.631,0,11.711,135.3H32.043L75.963,0Z"
        transform="translate(69.607 0)"
        fill="#edede3"
      />
      <path
        id="Caminho_4629"
        data-name="Caminho 4629"
        d="M61.487,0,17.567,135.3H37.892L81.819,0Z"
        transform="translate(104.417 0)"
        fill="#ff1430"
      />
    </svg>
  );
};

export default LogoConsumerType;
