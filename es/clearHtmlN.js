/*!
 * js-cool v2.3.2
 * 这是一个纯原生ES6开发的Javascript常用方法库
 * (c) 2019-2022 saqqdy 
 * Released under the MIT License.
 */
/**
 * 去除HTML标签及换行
 *
 * @param string - 带html标签的字符串
 * @returns newString
 */
function clearHtmlN(string) {
    return string.replace(/<\/?.+?>|[\r\n]/g, '');
}

export { clearHtmlN as default };
