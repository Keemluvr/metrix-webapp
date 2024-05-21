/**
 * Sorts an array of objects by a specified key in either ascending or descending order.
 *
 * @template T The type of objects in the array.
 * @param {T[]} items - The array of objects to be sorted.
 * @param {keyof T} key - The key to sort the objects by.
 * @param {string} [order="ascending"] - The order in which to sort the objects. Defaults to "ascending".
 * @returns {T[]} The sorted array of objects.
 */
export const orderByKey = <T>(items: T[], key: keyof T, order: "ascending" | "descending" = "ascending"): T[] => {
  return items.sort((itemA, itemB) => {
    const valueA = itemA[key] as string;
    const valueB = itemB[key] as string;

    if (order === "ascending") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
};
