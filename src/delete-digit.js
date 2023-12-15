const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = []
  let arr = String(n).split('')
  arr.forEach((x, i) => {
    let a = JSON.parse(JSON.stringify(arr))
    let b = a.splice(i , 1)
    result.push(a.join(''))
  })
  let a = result
  return Math.max(...a)
}

module.exports = {
  deleteDigit
};
