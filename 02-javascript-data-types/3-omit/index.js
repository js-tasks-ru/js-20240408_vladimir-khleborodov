/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  if (fields.length === 0) return obj;
  
  const absentItems = [];
  
  for (const item of Object.entries(obj)) {
    if (!fields.includes(item[0])) absentItems.push(item);
  }
  
  return Object.fromEntries(absentItems);
};
