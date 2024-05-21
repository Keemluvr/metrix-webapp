import clsx from "clsx";

interface UsersProps {
  className?: string;
  color?: string;
  selected?: boolean;
  width?: number;
  height?: number;
}

const Users = ({ className, width = 20, height = 20, color, selected }: UsersProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.59102 13.207C11.28 13.207 14.433 13.766 14.433 15.999C14.433 18.232 11.301 18.807 7.59102 18.807C3.90102 18.807 0.749023 18.253 0.749023 16.019C0.749023 13.785 3.88002 13.207 7.59102 13.207Z"
        className={clsx(selected ? "fill-white" : "stroke-black-600 fill-none", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.59108 10.02C5.16908 10.02 3.20508 8.057 3.20508 5.635C3.20508 3.213 5.16908 1.25 7.59108 1.25C10.0121 1.25 11.9761 3.213 11.9761 5.635C11.9851 8.048 10.0351 10.011 7.62208 10.02H7.59108Z"
        className={clsx(selected ? "fill-white opacity-50" : "stroke-black-600 fill-none", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4824 8.88226C16.0834 8.65726 17.3164 7.28326 17.3194 5.62026C17.3194 3.98126 16.1244 2.62126 14.5574 2.36426"
        className={clsx(selected ? "fill-white opacity-50" : "stroke-black-600 fill-none", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5947 12.7324C18.1457 12.9634 19.2287 13.5074 19.2287 14.6274C19.2287 15.3984 18.7187 15.8984 17.8947 16.2114"
        className={clsx(selected ? "fill-white" : "stroke-black-600 fill-none", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Users;
