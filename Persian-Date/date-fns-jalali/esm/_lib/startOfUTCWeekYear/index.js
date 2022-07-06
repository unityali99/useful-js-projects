import toInteger from "../toInteger/index.js";
import getUTCWeekYear from "../getUTCWeekYear/index.js";
import startOfUTCWeek from "../startOfUTCWeek/index.js";
import requiredArgs from "../requiredArgs/index.js";
import coreSetUTCFullYear from "../../_core/setUTCFullYear/index.js";
import coreNewDate from "../../_core/newDate/index.js"; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

export default function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = coreNewDate(0);
  coreSetUTCFullYear(firstWeek, year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}