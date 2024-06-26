import clsx from "clsx";

interface LogOutProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const LogOut = ({ className, width = 20, height = 20, color }: LogOutProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M0 4.447C0 1.996 2.03024 0 4.52453 0H9.48564C11.9748 0 14 1.99 14 4.437V15.553C14 18.005 11.9698 20 9.47445 20H4.51537C2.02515 20 0 18.01 0 15.563V14.623V4.447Z"
        className={clsx("fill-danger", color)}
      />
      <path
        d="M19.7787 9.4548L16.9329 6.5458C16.6388 6.2458 16.1655 6.2458 15.8723 6.5478C15.5802 6.8498 15.5811 7.3368 15.8743 7.6368L17.4335 9.2298H15.9386H7.54826C7.13434 9.2298 6.79834 9.5748 6.79834 9.9998C6.79834 10.4258 7.13434 10.7698 7.54826 10.7698H17.4335L15.8743 12.3628C15.5811 12.6628 15.5802 13.1498 15.8723 13.4518C16.0194 13.6028 16.2113 13.6788 16.4041 13.6788C16.595 13.6788 16.7868 13.6028 16.9329 13.4538L19.7787 10.5458C19.9199 10.4008 19.9998 10.2048 19.9998 9.9998C19.9998 9.7958 19.9199 9.5998 19.7787 9.4548Z"
        className={clsx("fill-danger", color)}
      />
    </svg>
  );
};

export default LogOut;
