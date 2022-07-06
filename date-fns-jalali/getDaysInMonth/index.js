"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInMonth;

var _index = _interopRequireDefault(require("../toDate/index.js"));

var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));

var _index3 = _interopRequireDefault(require("../_core/getMonth/index.js"));

var _index4 = _interopRequireDefault(require("../_core/getDate/index.js"));

var _index5 = _interopRequireDefault(require("../_core/getFullYear/index.js"));

var _index6 = _interopRequireDefault(require("../_core/setFullYear/index.js"));

var _index7 = _interopRequireDefault(require("../_core/newDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var date = (0, _index.default)(dirtyDate);
  var year = (0, _index5.default)(date);
  var monthIndex = (0, _index3.default)(date);
  var lastDayOfMonth = (0, _index7.default)(0);
  (0, _index6.default)(lastDayOfMonth, year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return (0, _index4.default)(lastDayOfMonth);
}

module.exports = exports.default;