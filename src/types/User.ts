import { Address } from "./Address";
import { Contact } from "./Contact";
import { Physical } from "./Physical";

export namespace User {
  export type Profile = Contact & {
    id: number;
    name: string;
    age: number;
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

  export type Edit = Profile;

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
