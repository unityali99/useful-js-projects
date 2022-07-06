"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfTomorrow;

var _index = _interopRequireDefault(require("../_core/getMonth/index.js"));

var _index2 = _interopRequireDefault(require("../_core/getDate/index.js"));

var _index3 = _interopRequireDefault(require("../_core/getFullYear/index.js"));

var _index4 = _interopRequireDefault(require("../_core/setFullYear/index.js"));

var _index5 = _interopRequireDefault(require("../_core/newDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow() {
  var now = (0, _index5.default)();
  var year = (0, _index3.default)(now);
  var month = (0, _index.default)(now);
  var day = (0, _index2.default)(now);
  var date = (0, _index5.default)(0);
  (0, _index4.default)(date, year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

module.exports = exports.default;