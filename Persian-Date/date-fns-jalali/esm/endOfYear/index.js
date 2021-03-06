import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
import coreGetFullYear from "../_core/getFullYear/index.js";
import coreSetFullYear from "../_core/setFullYear/index.js";
/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

export default function endOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = coreGetFullYear(date);
  coreSetFullYear(date, year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}