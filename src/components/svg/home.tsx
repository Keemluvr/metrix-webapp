import clsx from "clsx";

interface HomeProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Home = ({ className, width = 16, height = 16, color }: HomeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09566 13.8548V11.8102C6.09565 11.2921 6.51695 10.8712 7.03879 10.8679H8.95491C9.47909 10.8679 9.90402 11.2898 9.90402 11.8102V13.8489C9.904 14.2982 10.2692 14.6634 10.7218 14.6667H12.0291C12.6396 14.6683 13.2257 14.4286 13.6579 14.0005C14.0902 13.5725 14.3332 12.9912 14.3332 12.3851V6.57727C14.3332 6.08763 14.1145 5.62318 13.7362 5.30904L9.29516 1.78289C8.51885 1.16612 7.41009 1.18605 6.65676 1.8303L2.31118 5.30904C1.915 5.61392 1.67821 6.07975 1.6665 6.57727V12.3791C1.6665 13.6425 2.69809 14.6667 3.97062 14.6667H5.24803C5.46595 14.6683 5.6755 14.5834 5.83015 14.431C5.98481 14.2786 6.07179 14.0711 6.07178 13.8548H6.09566Z"
        className={clsx("fill-primary", color)}
      />
    </svg>
  );
};

export default Home;
