import clsx from "clsx";

interface ShowPassowrdProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ShowPassword = ({ className, width = 18, height = 15, color }: ShowPassowrdProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.323 8.162C13.323 9.908 11.907 11.323 10.161 11.323C8.415 11.323 7 9.908 7 8.162C7 6.415 8.415 5 10.161 5C11.907 5 13.323 6.415 13.323 8.162Z"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.998 15.355C13.806 15.355 17.289 12.617 19.25 8.05298C17.289 3.48898 13.806 0.750977 9.998 0.750977H10.002C6.194 0.750977 2.711 3.48898 0.75 8.05298C2.711 12.617 6.194 15.355 10.002 15.355H9.998Z"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShowPassword;
