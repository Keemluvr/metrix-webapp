import clsx from "clsx";

interface LockProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Lock = ({ className, width = 18, height = 20, color }: LockProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4232 7.4478V5.3008C13.4232 2.7878 11.3852 0.7498 8.87225 0.7498C6.35925 0.7388 4.31325 2.7668 4.30225 5.2808V5.3008V7.4478"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.683 19.2496H5.042C2.948 19.2496 1.25 17.5526 1.25 15.4576V11.1686C1.25 9.0736 2.948 7.3766 5.042 7.3766H12.683C14.777 7.3766 16.475 9.0736 16.475 11.1686V15.4576C16.475 17.5526 14.777 19.2496 12.683 19.2496Z"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.86279 12.2027V14.4237"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lock;
