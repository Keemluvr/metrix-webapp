import clsx from "clsx";

interface VerticalDotsProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const VerticalDots = ({ className, width = 24, height = 24, color }: VerticalDotsProps) => {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      fill="none"
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
      className={clsx("transition-colors", className)}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        className={clsx("fill-black-400", color)}
      />
    </svg>
  );
};

export default VerticalDots;
