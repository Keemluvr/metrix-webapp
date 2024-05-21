export const classNames = {
  table: "min-h-[200px]",
  loadingWrapper: "flex justify-center items-center h-full pt-40 pb-16",
  wrapper: ["max-h-full"],
  th: [
    "bg-transparent",
    "text-black-900",
    "font-normal",
    "text-sm",
    "border-b",
    "border-t",
    "border-gray",
    "border-divider",
    "py-4"
  ],
  tr: ["group-data-[hover=true]:before:opacity-100"],
  td: ["text-black-400", "text-sm", "font-normal", "group-data-[hover=true]:before:opacity-100", "py-2"]
};

export const checkboxClassNames = {
  wrapper: "before:border-gray"
};

export const copyableClassName = "font-inter text-black-400 text-sm font-normal";

export const tableActionsClassName = "relative flex justify-center items-center gap-2";

export const tableHeaderClassName = {
  wrapper: "flex justify-end gap-3",
  search: "w-full sm:max-w-44"
};
