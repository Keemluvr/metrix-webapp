import clsx from "clsx";

interface SearchProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Search = ({ className, width = 18, height = 18, color }: SearchProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      className={clsx("transition-colors", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.80541"
        cy="8.30553"
        r="7.49047"
        className={clsx("stroke-gray", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0151 13.9043L16.9518 16.8334"
        className={clsx("stroke-gray", color)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
