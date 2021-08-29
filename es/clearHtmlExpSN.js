'use strict';

/**
 * 去除HTML标签保留空格、换行
 *
 * @param string - 带html标签的字符串
 * @returns newString
 */
function clearHtmlExpSN(string) {
    return string.replace(/<\/?[^\/?(br)][^><]*>/gi, '');
}

module.exports = clearHtmlExpSN;
