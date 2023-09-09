import { FC, useCallback } from "react";

interface ChevronProps {
  color?: string;
  thicker?: boolean;
  title?: string;
  direction?: "down" | "right" | "left" | "up";
}

const Chevron: FC<ChevronProps> = ({
  color = "currentColor",
  title = "seta",
  thicker = false,
  direction = "down",
}) => {
  const getAngle = useCallback(() => {
    switch (direction) {
      case "left":
        return "90deg";
      case "right":
        return "-90deg";
      default:
        return "0deg";
    }
  }, [direction]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.567"
      height="12.552"
      viewBox="0 0 17.567 12.552"
      aria-labelledby={`chevron-${title}`}
      style={{
        transform: `rotate(${getAngle()})`,
      }}
    >
      <title id={`chevron-${title}`}>{title}</title>
      {thicker ? (
        <path
          id="seta"
          d="M0,0,9.4,9.182,17.674,0"
          transform="translate(0.358 0.349)"
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      ) : (
        <path
          id="seta"
          d="M0,0,7.047,7.213,13.976,0"
          transform="translate(1.788 1.747)"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
      )}
    </svg>
  );
};

export default Chevron;
