const { NotImplementedError } = require("../extensions/index.js");

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
  str = String(str);
  let addition = "addition" in options ? String(options.addition) : "";

  let repeatTimes = options.repeatTimes || 1;
  let separator = "separator" in options ? options.separator : "+";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator =
    "additionSeparator" in options ? options.additionSeparator : "|";

  let repeatedAddition = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  let repeatedStr = new Array(repeatTimes)
    .fill(str + repeatedAddition)
    .join(separator);

  return repeatedStr;
}

module.exports = {
  repeater,
};
