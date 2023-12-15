const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0
  let generalStr = s1 + s2
  let setStr = Array.from(new Set(generalStr))
  let arrStr = generalStr.split('')
  setStr.forEach(x => {
    let str1 = s1.split('').filter(z => z === x).length
    let str2 = s2.split('').filter(z => z === x).length
    if (str1 > 0 && str2 > 0) {
      sum += Math.min(str1, str2)
    }
  })
  return sum
}

module.exports = {
  getCommonCharacterCount
};
