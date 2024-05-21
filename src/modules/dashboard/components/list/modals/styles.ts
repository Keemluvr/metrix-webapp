export const editClassName = {
  header: "flex flex-col gap-1",
  row: "flex items-center gap-2",
  footer: "flex gap-2",
  saveButton: "w-min mx-auto"
};

export const deleteClassName = editClassName;

export const createClassName = { ...editClassName, password: "text-xs text-center", passwordLabel: "font-bold" };

export const viewClassName = {
  header: "flex flex-col gap-1",
  row: "flex items-center gap-2 text-black-400",
  label: "font-medium text-black",
  value: "text-black-400",
  skeleton: "rounded-lg",
  sectionWrapper: "flex flex-col gap-3 mb-4",
  copyable: { base: "p-0", copyButton: "h-5" },
  notSet: "text-sm text-danger",
  accordion: {
    title: "text-base font-bold"
  }
};
