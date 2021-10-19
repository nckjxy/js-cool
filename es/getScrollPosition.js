/*!
 * js-cool v2.2.3
 * 一些常用的JS方法，支持按需引入
 * (c) 2019-2021 saqqdy 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 获取滑动到顶部和底部 返回'top' 'bottom'，建议使用限流
 *
 * @returns 返回位置
 */
const getScrollPosition = () => {
    var innerH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var docScrollTop = document.documentElement.scrollTop;
    var bodyScrollTop = document.body.scrollTop;
    var docScrollHeight = document.documentElement.scrollHeight;
    var bodyScrollHeight = document.body.scrollHeight;
    var scrollT = 0, scrollH = 0;
    if (docScrollTop === 0) {
        scrollT = bodyScrollTop;
        scrollH = bodyScrollHeight;
        if (bodyScrollTop === 0) {
            return 'top';
        }
    }
    else {
        scrollT = docScrollTop;
        scrollH = docScrollHeight;
    }
    // if(bodyScrollTop === 0 && docScrollTop === 0){
    //   return 'top';
    // }
    if (innerH + Math.floor(scrollT) === scrollH || innerH + Math.ceil(scrollT) === scrollH) {
        return 'bottom';
    }
};

exports["default"] = getScrollPosition;
exports.getScrollPosition = getScrollPosition;
