/*!
 * js-cool v2.2.4
 * 一些常用的JS方法，支持按需引入
 * (c) 2019-2021 saqqdy 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 根据路径字符串获取数组、对象属性值
 *
 * @example
 * ```js
 * const target = {
 *      a: 1,
 *      b: [{
 *          c: 2
 *      }]
 * }
 * getProperty(target, 'a') // 1
 * getProperty(target, 'b[0].c') // 2
 * getProperty(target, () => 'a') // 1
 * ```
 * @param target - 目标数组、对象
 * @param prop - 查询目标，可传function
 * @returns 返回对应的值
 */
function getProperty(target, prop) {
    if (!target)
        throw new Error('请传入target');
    if (prop instanceof Function)
        prop = prop();
    const arr = prop.split('.');
    for (const p of arr) {
        let index = -1;
        p.replace(/\[(\d+)\]$/, (str, num) => ((index = parseInt(num)), ''));
        if (p)
            target = target[p];
        if (index !== -1 && target)
            target = target[index];
    }
    return target;
}

exports["default"] = getProperty;
exports.getProperty = getProperty;
