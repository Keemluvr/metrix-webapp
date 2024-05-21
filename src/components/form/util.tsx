import { FieldError } from "react-hook-form";

export const identifyColorForTheState = (error: FieldError | undefined): string => {
  return error ? "stroke-danger" : "stroke-black-400";
};
