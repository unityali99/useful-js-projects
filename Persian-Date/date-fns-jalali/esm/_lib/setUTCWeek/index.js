import toInteger from "../toInteger/index.js";
import toDate from "../../toDate/index.js";
import getUTCWeek from "../getUTCWeek/index.js";
import requiredArgs from "../requiredArgs/index.js";
import coreGetUTCDate from "../../_core/getUTCDate/index.js";
import coreSetUTCDate from "../../_core/setUTCDate/index.js"; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  coreSetUTCDate(date, coreGetUTCDate(date) - diff * 7);
  return date;
}