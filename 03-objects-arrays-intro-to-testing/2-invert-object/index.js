/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) return undefined;
  
  const object = obj;
  let entries = Object.entries(object);
  entries = entries.map(([key, val]) => [val, key]);
  
  return Object.fromEntries(entries);
}
