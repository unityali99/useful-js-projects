"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endOfYesterday;

var _index = _interopRequireDefault(require("../_core/getMonth/index.js"));

var _index2 = _interopRequireDefault(require("../_core/getDate/index.js"));

var _index3 = _interopRequireDefault(require("../_core/getFullYear/index.js"));

var _index4 = _interopRequireDefault(require("../_core/setFullYear/index.js"));

var _index5 = _interopRequireDefault(require("../_core/newDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday() {
  var now = (0, _index5.default)();
  var year = (0, _index3.default)(now);
  var month = (0, _index.default)(now);
  var day = (0, _index2.default)(now);
  var date = (0, _index5.default)(0);
  (0, _index4.default)(date, year, month, day - 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

module.exports = exports.default;