/*!
 * js-cool v2.3.2
 * 这是一个纯原生ES6开发的Javascript常用方法库
 * (c) 2019-2022 saqqdy 
 * Released under the MIT License.
 */
/**
 * 判断是否数组
 *
 * @param arr -
 */
function isArray(arr) {
    return Object.prototype.toString.call(arr).indexOf('Array') !== -1;
}

export { isArray as default };
