/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let arr = Array.from(arguments);
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'string') break;
    return obj;
  }
  
  let absentItems = [];
  
  for (let item of Object.entries(obj)) {
    if (!fields.includes(item[0])) absentItems.push(item);
  }
  
  return Object.fromEntries(absentItems);
};
