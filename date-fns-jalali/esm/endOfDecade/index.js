import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
import coreGetFullYear from "../_core/getFullYear/index.js";
import coreSetFullYear from "../_core/setFullYear/index.js";
/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a decade
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */

export default function endOfDecade(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = coreGetFullYear(date);
  var decade = 9 + Math.floor(year / 10) * 10;
  coreSetFullYear(date, decade + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}