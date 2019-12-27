"use strict";
exports.__esModule = true;
function mergeRefs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (value) {
        args.forEach(function (arg) {
            if (typeof arg === "function") {
                arg(value);
            }
            else if (arg) {
                arg.current = value;
            }
        });
    };
}
exports["default"] = mergeRefs;
