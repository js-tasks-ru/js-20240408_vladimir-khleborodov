/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let counter = 0;
  let lastChar = null;
  
  const strArr = [...string].map((char) => {
    if (lastChar !== char) {
      lastChar = char;
      counter = 0;
    }
    if (counter >= size) {
      return null;
    }
    
    counter += 1;
    return char;
  });
  
  return strArr.join("");
}
