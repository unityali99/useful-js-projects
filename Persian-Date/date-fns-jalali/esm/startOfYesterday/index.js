/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
import coreGetMonth from "../_core/getMonth/index.js";
import coreGetDate from "../_core/getDate/index.js";
import coreGetFullYear from "../_core/getFullYear/index.js";
import coreSetFullYear from "../_core/setFullYear/index.js";
import coreNewDate from "../_core/newDate/index.js";
export default function startOfYesterday() {
  var now = coreNewDate();
  var year = coreGetFullYear(now);
  var month = coreGetMonth(now);
  var day = coreGetDate(now);
  var date = coreNewDate(0);
  coreSetFullYear(date, year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}