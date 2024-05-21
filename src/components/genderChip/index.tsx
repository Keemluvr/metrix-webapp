"use client";

import { Chip, ChipProps } from "@nextui-org/react";
import { GenderEnum } from "@/types/Gender";
import { useTranslations } from "next-intl";

type GenderChipProps = {
  gender: GenderEnum | "not-set";
};

const GenderChip = ({ gender }: GenderChipProps) => {
  const t = useTranslations("Gender");

  const genderColorMap: Record<string, ChipProps["color"]> = {
    [GenderEnum.FEMALE]: "danger",
    [GenderEnum.MALE]: "primary",
    "not-set": "warning"
  };

  return (
    <Chip className="capitalize" color={genderColorMap[gender]} size="sm" variant="flat">
      {t(gender?.toLowerCase() === "not-set" ? "not-set" : gender)}
    </Chip>
  );
};

export default GenderChip;
