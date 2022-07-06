"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateUTC;

var _index = require("../../_jalali/index.js");

/**
 *
 * @param args
 * @returns {Date}
 */
function dateUTC() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var year = args[0],
      month = args[1],
      _args$ = args[2],
      day = _args$ === void 0 ? 1 : _args$,
      rest = args.slice(3);
  var g = (0, _index.toGregorian)(year, month + 1, day);
  return Date.UTC(...[g.gy, g.gm - 1, g.gd, ...rest]);
}

module.exports = exports.default;