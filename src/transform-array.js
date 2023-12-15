const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let a = JSON.parse(JSON.stringify(arr))

  let b = []

  let c = 0

  let d = 0

  a.forEach((x,i) => {
    if (x === '--discard-next') {
      c = i
    } else if (x === '--discard-prev') {
      if (b.includes(a[i - 1])) {
        b.pop()
      }
    } else if (x === '--double-next') {
      if (typeof a[i + 1] !== 'undefined') {
        b.push(a[i + 1])
      }
    } else if (x === '--double-prev') {
      if (typeof a[i - 1] !== 'undefined' && b.includes(a[i - 1])) {
        b.push(a[i - 1])
      }
    } else {
      if (!c) {
        b.push(x)
      } else {
        c = 0
      }
    }
  })
  return b
}

module.exports = {
  transform
};
