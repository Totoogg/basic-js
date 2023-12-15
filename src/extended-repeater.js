const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add = Array(options.additionRepeatTimes).fill(options.addition === null ? `${options.addition}` : options.addition).join(options.additionSeparator === undefined ? '|' : options.additionSeparator)
  let rep = Array(options.repeatTimes).fill(str).map(x => x + add).join(options.separator === undefined ? '+' : options.separator)
  return rep
}

module.exports = {
  repeater
};
