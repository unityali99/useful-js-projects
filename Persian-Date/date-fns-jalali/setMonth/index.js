"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setMonth;

var _index = _interopRequireDefault(require("../_lib/toInteger/index.js"));

var _index2 = _interopRequireDefault(require("../toDate/index.js"));

var _index3 = _interopRequireDefault(require("../getDaysInMonth/index.js"));

var _index4 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));

var _index5 = _interopRequireDefault(require("../_core/setMonth/index.js"));

var _index6 = _interopRequireDefault(require("../_core/getDate/index.js"));

var _index7 = _interopRequireDefault(require("../_core/getFullYear/index.js"));

var _index8 = _interopRequireDefault(require("../_core/setFullYear/index.js"));

var _index9 = _interopRequireDefault(require("../_core/newDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(dirtyDate, dirtyMonth) {
  (0, _index4.default)(2, arguments);
  var date = (0, _index2.default)(dirtyDate);
  var month = (0, _index.default)(dirtyMonth);
  var year = (0, _index7.default)(date);
  var day = (0, _index6.default)(date);
  var dateWithDesiredMonth = (0, _index9.default)(0);
  (0, _index8.default)(dateWithDesiredMonth, year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0, _index3.default)(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  (0, _index5.default)(date, month, Math.min(day, daysInMonth));
  return date;
}

module.exports = exports.default;