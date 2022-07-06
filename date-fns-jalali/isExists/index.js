"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isExists;

var _index = _interopRequireDefault(require("../_core/getMonth/index.js"));

var _index2 = _interopRequireDefault(require("../_core/getDate/index.js"));

var _index3 = _interopRequireDefault(require("../_core/getFullYear/index.js"));

var _index4 = _interopRequireDefault(require("../_core/newDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {Number} year of the date to check
 * @param {Number} month of the date to check
 * @param {Number} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * var result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isExists(2018, 1, 31)
 * //=> false
 */
function isExists(year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError('3 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index4.default)(year, month, day);
  return (0, _index3.default)(date) === year && (0, _index.default)(date) === month && (0, _index2.default)(date) === day;
}

module.exports = exports.default;