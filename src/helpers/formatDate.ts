/**
 * Calculates the age based on the given birthdate.
 *
 * @param {string} birthdate - The birthdate in the format "YYYY-MM-DD".
 * @return {number} The calculated age.
 */
export const formatAge = (birthdate: string) => {
  const birthdateDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthdateDate.getFullYear();

  const isBeforeBirthdayMonth = today.getMonth() < birthdateDate.getMonth();
  const isSameBirthdayMonth = today.getMonth() === birthdateDate.getMonth();
  const isBeforeBirthdayDate = today.getDate() < birthdateDate.getDate();
  if (isBeforeBirthdayMonth || (isSameBirthdayMonth && isBeforeBirthdayDate)) age--;

  return age;
};

export const formatDateByLocale = (date: string, locale = "pt-BR") => {
  return new Date(date).toLocaleDateString(locale);
};
