import clsx from "clsx";

interface RoleProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Role = ({ className, width = 24, height = 24, color }: RoleProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Light/Work">
        <g id="Work">
          <path
            id="Stroke 1"
            d="M11.9951 16.6771V14.1401"
            className={clsx("stroke-black-400", color)}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group 8">
            <path
              id="Stroke 2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.19 5.33057C19.88 5.33057 21.24 6.70057 21.24 8.39057V11.8306C18.78 13.2706 15.53 14.1406 11.99 14.1406C8.45 14.1406 5.21 13.2706 2.75 11.8306V8.38057C2.75 6.69057 4.12 5.33057 5.81 5.33057H18.19Z"
              className={clsx("stroke-black-400", color)}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 4"
              d="M15.4951 5.326V4.96C15.4951 3.74 14.5051 2.75 13.2851 2.75H10.7051C9.48512 2.75 8.49512 3.74 8.49512 4.96V5.326"
              className={clsx("stroke-black-400", color)}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Stroke 6"
              d="M2.77441 15.4834L2.96341 17.9924C3.09141 19.6834 4.50041 20.9904 6.19541 20.9904H17.7944C19.4894 20.9904 20.8984 19.6834 21.0264 17.9924L21.2154 15.4834"
              className={clsx("stroke-black-400", color)}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Role;
