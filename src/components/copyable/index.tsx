"use client";

import { SlotsToClasses, Snippet, SnippetSlots } from "@nextui-org/react";
import { classNames as defaultClassNames } from "./styles";
import Copy from "../svg/copy";

type CopyableProps = {
  label: string | JSX.Element;
  className?: string;
  classNames?: SlotsToClasses<SnippetSlots>;
};

const Copyable = ({ label, className, classNames }: CopyableProps) => {
  return (
    <Snippet
      variant="flat"
      copyIcon={<Copy />}
      className={className}
      classNames={{ ...defaultClassNames, ...classNames }}
    >
      {label}
    </Snippet>
  );
};

export default Copyable;
