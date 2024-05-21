import clsx from "clsx";

interface PlusProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Plus = ({ className, width = 25, height = 24, color }: PlusProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 5V19"
        className={clsx("stroke-white", color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 12H19.5"
        className={clsx("stroke-white", color)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;
