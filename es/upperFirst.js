/*!
 * js-cool v2.2.1
 * 一些常用的JS方法，支持按需引入
 * (c) 2019-2021 saqqdy 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 首字母大写
 *
 * @param string - 需要转换的字符串
 * @returns 返回转换后的字符串
 */
function upperFirst(string) {
    return string.slice(0, 1).toLocaleUpperCase() + string.slice(1);
}

exports["default"] = upperFirst;
exports.upperFirst = upperFirst;
