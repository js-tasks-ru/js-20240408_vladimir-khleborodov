/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let pathArr = path.split('.');
  
  return function(obj) {
    let result = obj;
    
    for (const elem of pathArr) {
      if (!result.hasOwnProperty(elem)) return;
      if (result[elem] === null) return null;
      result = result[elem];
    }
    
    return result;
  }
}
