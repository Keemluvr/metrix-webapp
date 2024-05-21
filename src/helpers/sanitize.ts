import { onlyNumbers } from "./format";

export const sanitizeCPF = (cpf: string) => {
  let sanitizedCPF: string = onlyNumbers(cpf);

  sanitizedCPF = sanitizedCPF.replace(/(\d{3})(\d)/, "$1.$2");
  sanitizedCPF = sanitizedCPF.replace(/(\d{3})(\d)/, "$1.$2");
  sanitizedCPF = sanitizedCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return sanitizedCPF;
};

export const sanitizeCEP = (cep: string) => {
  const sanitizedCEP: string = onlyNumbers(cep);

  return sanitizedCEP.replace(/(\d{5})(\d{3})/, "$1-$2");
};

export function sanitizePhone(phone: string): string {
  const regexPhone = /^(\d{2})?(\d{4})(\d{4})$/;
  const regexCellphone = /^(\d{2})?(\d{5})(\d{4})$/;

  let type;

  if (phone.length === 10) type = "phone";
  if (phone.length === 11) type = "cellphone";
  if (!type) return phone;

  const regex = type === "phone" ? regexPhone : regexCellphone;
  if (!regex.test(phone)) return phone;

  return phone.replace(regex, function (match, ddd, parte1, parte2) {
    return ddd ? `(${ddd}) ${parte1}-${parte2}` : `${parte1}-${parte2}`;
  });
}
