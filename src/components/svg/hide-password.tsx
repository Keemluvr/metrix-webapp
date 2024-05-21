import clsx from "clsx";

interface LockProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const HidePassword = ({ className, width = 18, height = 16, color }: LockProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.76094 11.3667C7.18594 10.7927 6.83594 10.0127 6.83594 9.13768C6.83594 7.38468 8.24794 5.97168 9.99994 5.97168C10.8669 5.97168 11.6649 6.32268 12.2299 6.89668"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1054 9.69873C12.8734 10.9887 11.8574 12.0067 10.5684 12.2407"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.655 14.472C3.068 13.226 1.724 11.406 0.75 9.13698C1.734 6.85798 3.087 5.02798 4.684 3.77198C6.271 2.51598 8.102 1.83398 10 1.83398C11.909 1.83398 13.739 2.52598 15.336 3.79098"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4478 5.99072C18.1358 6.90472 18.7408 7.95972 19.2498 9.13672C17.2828 13.6937 13.8068 16.4387 9.99977 16.4387C9.13677 16.4387 8.28577 16.2987 7.46777 16.0257"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8873 1.24951L2.11328 17.0235"
        className={clsx("stroke-black-400", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HidePassword;
