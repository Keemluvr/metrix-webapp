"use client";

import { User } from "@nextui-org/react";

type AvatarProps = {
  name: string;
  src?: string;
};

const Avatar = ({ name, src = "" }: AvatarProps) => {
  return (
    <User avatarProps={{ radius: "lg", src: `data:image/jpeg;base64,${src}` }} name={name}>
      {name}
    </User>
  );
};

export default Avatar;
