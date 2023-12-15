const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(domains[0] === undefined) {
    return {}
  }
  let res = []
  let a = domains.map((x) => {
    let a = x.split('.').reverse().map((m,i,arr) => {
      let c = JSON.parse(JSON.stringify(arr))
      let b = c.splice(0 , i+1).map((x,i) => {
        if(i === 0) return `.${x}`
        return x
      }).join('.')
      res.push(b)
    })
  })
  let setB = Array.from(new Set(res))

  return setB.reduce((acc, cur) => {
    acc[cur] = res.filter(x => x === cur).length
    return acc
  }, {})
}

module.exports = {
  getDNSStats
};
