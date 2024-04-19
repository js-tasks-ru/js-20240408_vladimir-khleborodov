/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const strArr = Array.from(string);
  const obj = {};

  for (let char of strArr) {
    if (!obj[char]) {
      obj[char] = [char];
    } else {
      obj[char].push(char);
    }
  }
  
  for (let key in obj) {
    if (obj[key].length > size) obj[key].length = size;
  }

  const result = Object.values(obj).flat().join('');
  return result;
}
