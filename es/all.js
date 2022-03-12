/*!
 * js-cool v2.3.2
 * 这是一个纯原生ES6开发的Javascript常用方法库
 * (c) 2019-2022 saqqdy 
 * Released under the MIT License.
 */
/**
 * 如果所提供的谓词函数对一个集合中的所有元素都返回true，则返回true，否则返回false。
 *
 * @example
 * ```js
 * all([4, 2, 3], x => x > 1); // true
 * ```
 * @example
 * ```js
 * all([1, 2, 3]); // true
 * ```
 * @param arr - 目标数组
 * @param fn - 判断方法
 * @returns 返回判断结果
 */
const all = (arr, fn) => arr.every(fn);

export { all as default };
