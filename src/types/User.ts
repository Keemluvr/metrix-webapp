import { ZonedDateTime } from "@internationalized/date";
import { Address } from "./Address";
import { Contact } from "./Contact";
import { Physical } from "./Physical";

export namespace User {
  export type Profile = Contact & {
    id: number;
    name: string;
    cpf: string;
    rg: string;
    birthdate: string;
    gender: string;
    zodiacSign: string;
    password: string;
    motherName: string;
    fatherName: string;
    address?: Address;
    physical?: Physical;
  };

  export type Create = Profile;

  export type Edit = Profile & {
    birthdate: string | ZonedDateTime;
    updatedAt?: ZonedDateTime;
    createdAt?: ZonedDateTime;
  };

  export type List = Profile[];
}

export namespace Auth {
  export type SignUp = {
    name: string;
    email: string;
    password: string;
  };

  export type SignIn = {
    email: string;
    password: string;
  };
}
