import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
import coreGetMonth from "../_core/getMonth/index.js";
import coreGetFullYear from "../_core/getFullYear/index.js";
import coreSetFullYear from "../_core/setFullYear/index.js";
/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

export default function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = coreGetMonth(date);
  coreSetFullYear(date, coreGetFullYear(date), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}