"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfYear;

var _index = _interopRequireDefault(require("../toDate/index.js"));

var _index2 = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));

var _index3 = _interopRequireDefault(require("../_core/getFullYear/index.js"));

var _index4 = _interopRequireDefault(require("../_core/setFullYear/index.js"));

var _index5 = _interopRequireDefault(require("../_core/newDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(dirtyDate) {
  (0, _index2.default)(1, arguments);
  var cleanDate = (0, _index.default)(dirtyDate);
  var date = (0, _index5.default)(0);
  (0, _index4.default)(date, (0, _index3.default)(cleanDate), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;