/*!
 * js-cool v2.3.2
 * 这是一个纯原生ES6开发的Javascript常用方法库
 * (c) 2019-2022 saqqdy 
 * Released under the MIT License.
 */
/**
 * 读取完整IPv6
 *
 * @example
 * ```js
 * fillIPv6('2409:8005:800::2'); // '2409:8005:0800:0000:0000:0000:0000:0002'
 * fillIPv6('2409:8005:800::1c'); // '2409:8005:0800:0000:0000:0000:0000:001c'
 * ```
 * @returns string
 */
function fillIPv6(ip) {
    return ip
        .replace(/\w+/g, a => ('000' + a).substr(-4))
        .replace(/(\w*)::(\w*)/, (a, b, c) => {
        let dotLen = 8 - ip.match(/:/g).length, str = ':';
        while (dotLen--) {
            str += '0000:';
        }
        return (b || '0000') + str + (c || '0000');
    });
}

export { fillIPv6 as default };
