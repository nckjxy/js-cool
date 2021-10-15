/*!
 * js-cool v2.2.1
 * 一些常用的JS方法，支持按需引入
 * (c) 2019-2021 saqqdy 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 获取目录形式URL参数
 *
 * @param url - 传入url地址
 * @returns 返回参数对象
 */
function getDirParam(url) {
    var urlStr = url !== '' && typeof url !== 'undefined' ? url.replace(/^http[s]?:\/\/[^\/]+([\s\S]*)/, '$1') : location.pathname; // 获取url中域名后的字串:/post/0703/a1.html
    urlStr = urlStr.replace(/^\//, '');
    var dirParam = { path: [], host: '' };
    // 获取域名，包含http://
    if (url !== '' && typeof url !== 'undefined') {
        var match = url.match(/^http[s]?:\/\/[^\/]+/);
        if (match)
            dirParam.host = match[0];
    }
    else
        dirParam.host = location.host;
    if (urlStr.includes('/')) {
        //dirParam = unescape(urlStr).split("/");
        dirParam.path = decodeURI(urlStr).split('/');
    }
    return dirParam; //{"host":"http://192.168.2.243:7004","path":["media","video","chidaoyan.mp4"]}
}

exports["default"] = getDirParam;
exports.getDirParam = getDirParam;
