"use client";

import HidePassword from "@/components/svg/hide-password";
import ShowPassword from "@/components/svg/show-password";
import { FieldError } from "react-hook-form";
import { identifyColorForTheState } from "../util";

type VisibilityProps = {
  error: FieldError | undefined;
  isVisible: boolean;
  toggleVisibility: () => void;
};

export function Visibility({ error, isVisible, toggleVisibility }: VisibilityProps) {
  return (
    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
      {isVisible ? (
        <ShowPassword color={identifyColorForTheState(error)} />
      ) : (
        <HidePassword color={identifyColorForTheState(error)} />
      )}
    </button>
  );
}
