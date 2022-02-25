/*!
 * js-cool v2.3.1
 * 一些常用的JS方法，支持按需引入
 * (c) 2019-2022 saqqdy 
 * Released under the MIT License.
 */
/**
 * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
 *
 * @param fn - 需要调用的函数
 * @param delay - 延迟时间，单位毫秒
 * @param immediate - 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
 * @return 实际调用函数
 */
function throttle(fn, delay, immediate, debounce) {
    var curr = +new Date(), //当前事件
    last_call = 0, last_exec = 0, timer, diff, // 时间差
    context, //上下文
    args, exec = function () {
        last_exec = curr;
        fn.apply(context, args);
    };
    return function () {
        curr = +new Date();
        (context = this),
            (args = arguments),
            (diff = curr - (debounce ? last_call : last_exec) - delay);
        clearTimeout(timer);
        if (debounce) {
            if (immediate) {
                timer = setTimeout(exec, delay);
            }
            else if (diff >= 0) {
                exec();
            }
        }
        else {
            if (diff >= 0) {
                exec();
            }
            else if (immediate) {
                timer = setTimeout(exec, -diff);
            }
        }
        last_call = curr;
    };
}

export { throttle as default };
