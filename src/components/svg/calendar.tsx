import clsx from "clsx";

interface CopyProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Calendar = ({ className, width = 20, height = 20, color }: CopyProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={clsx("transition-colors", className)}
      fill="none"
      viewBox="0 0 20 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.09277 8.40445H18.9167"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.442 12.3097H14.4512"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0045 12.3097H10.0137"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.55818 12.3097H5.56744"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.442 16.1964H14.4512"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0045 16.1964H10.0137"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.55818 16.1964H5.56744"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0433 1V4.29078"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.96515 1V4.29078"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2383 2.5791H5.77096C2.83427 2.5791 1 4.21504 1 7.22213V16.2718C1 19.3261 2.83427 20.9999 5.77096 20.9999H14.229C17.175 20.9999 19 19.3545 19 16.3474V7.22213C19.0092 4.21504 17.1842 2.5791 14.2383 2.5791Z"
        className={clsx("stroke-black-300", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar;
