/**
 * Transforms a string into kebab case.
 *
 * @param {string} string - The input string to be transformed.
 * @return {string} The transformed string in kebab case.
 */
export const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

/**
 * Returns a string with all non-digit characters removed.
 *
 * @param {string} value - The input string.
 * @return {string} The input string with all non-digit characters removed.
 */
export const onlyNumbers = (value: string) => {
  return value.replace(/\D/g, "");
};

export const formatCPF = (cpf: string) => {
  let formattedCPF: string = onlyNumbers(cpf);

  formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, "$1.$2");
  formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, "$1.$2");
  formattedCPF = formattedCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return formattedCPF;
};

export const formatCEP = (cep: string) => {
  const formattedCEP: string = onlyNumbers(cep);

  return formattedCEP.replace(/(\d{5})(\d{3})/, "$1-$2");
};

export function formatPhone(phone: string): string {
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
