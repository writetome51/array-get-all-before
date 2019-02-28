"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_all_before_after_index_1 = require("@writetome51/array-get-all-before-after-index");
// Returns everything before last instance of `value` in `array`.  Does not modify `array`.
// `value` cannot be an object. Arrays are OK.
function getAllBeforeLast(value, array) {
    var index = array_get_indexes_1.getLastIndexOf(value, array);
    return array_get_all_before_after_index_1._getAllBeforeIndex(index, array);
}
exports.getAllBeforeLast = getAllBeforeLast;
