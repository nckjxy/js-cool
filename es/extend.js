'use strict';

var isArray = require('./isArray.js');
var getType = require('./getType.js');

function isWindow(obj) {
    return obj !== null && obj === obj.window;
}
function isPlainObject(obj) {
    return getType(obj) === 'object' && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}
//对象扩展
let extend = (function () {
    /**
     * @param target
     * @param source
     * @param deep
     */
    // @ts-ignore
    function extend(target, source, deep) {
        for (let key in source)
            if (source.hasOwnProperty(key)) {
                if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                    if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                        target[key] = {};
                    if (isArray(source[key]) && !isArray(target[key]))
                        target[key] = [];
                    extend(target[key], source[key], deep);
                }
                else if (source[key] !== undefined)
                    target[key] = source[key];
            }
    }
    // @ts-ignore
    return function (target) {
        // @ts-ignore
        let deep, args = Array.prototype.slice.call(arguments, 1);
        if (typeof target === 'boolean') {
            deep = target;
            target = args.shift();
        }
        args.forEach(function (arg) {
            // @ts-ignore
            extend(target, arg, deep);
        });
        return target;
    };
})();

module.exports = extend;
