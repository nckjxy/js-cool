import type { AnyFunction } from '../typings/common'

/**
 * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
 *
 * @param fn - 需要调用的函数
 * @param delay - 延迟时间，单位毫秒
 * @param immediate - 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
 * @return 实际调用函数
 */
function throttle(fn: AnyFunction, delay: number, immediate: boolean, debounce: boolean) {
	let curr = +new Date(), // 当前事件
		last_call = 0,
		last_exec = 0,
		timer: any,
		diff: number, // 时间差
		context: any, // 上下文
		args: any,
		exec = function () {
			last_exec = curr
			fn.apply(context, args)
		}
	return function () {
		curr = +new Date()
		// @ts-expect-error
		;(context = this as any),
			(args = arguments),
			(diff = curr - (debounce ? last_call : last_exec) - delay)
		clearTimeout(timer)
		if (debounce) {
			if (immediate) {
				timer = setTimeout(exec, delay)
			} else if (diff >= 0) {
				exec()
			}
		} else {
			if (diff >= 0) {
				exec()
			} else if (immediate) {
				timer = setTimeout(exec, -diff)
			}
		}
		last_call = curr
	}
}

export default throttle
