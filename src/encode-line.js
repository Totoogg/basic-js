const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str
  let a = str.split('')
  let res = []
  let b = []
  a.map(x => {
    if (x !== b[0] && b[0] !== undefined) {
      res.push(b.length > 1 ? `${b.length}${b[0]}` : `${b[0]}`)
      b = []
      b.push(x)
    } else {
      b.push(x)
    }
  })
  res.push(b.length > 1 ? `${b.length}${b[0]}` : `${b[0]}`)
  return res.join('')
}

module.exports = {
  encodeLine
};
