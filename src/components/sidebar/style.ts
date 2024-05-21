import clsx from "clsx";

export const className = {
  wrapper: "bg-default flex flex-col items-center gap-3 sticky h-screen top-0 left-0 w-20 py-6",
  main: "h-full flex flex-col items-center gap-3",
  item: clsx(
    "w-14 h-14 font-extralight text-base sm:text-lg rounded-xl",
    "flex justify-center items-center",
    "transition-colors"
  ),
  footer: {
    signUpButton: "hover:bg-default-200 min-w-14 w-14 h-14 max-h-14 p-0"
  }
};
