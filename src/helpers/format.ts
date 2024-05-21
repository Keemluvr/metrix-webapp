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

export const onlyNumbers = (value: string) => {
  return value.replace(/\D/g, "");
};
