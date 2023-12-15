const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let a = arr.filter(x => x !== -1).sort((a,b) => b-a)
  let res = []
  arr.forEach(x => {
    if (x === -1) {
      res.push(x)
    } else {
      res.push(a.pop())
    }
  })
  return res
}

module.exports = {
  sortByHeight
};
