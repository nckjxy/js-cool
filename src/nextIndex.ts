/**
 * 返回下一个zIndex值
 *
 * @param min - 可选，最小值
 * @param max - 可选，最大值
 * @returns 数字
 */
function nextIndex(min: number = 5000, max: number = 10000): number {
	let doms = [min]
	Array.prototype.forEach.call(document.querySelectorAll('body > *'), e => {
		let n = +window.getComputedStyle(e).zIndex || 0
		n > min && n < max && doms.push(n)
	})
	doms.sort((a, b) => b - a)
	return doms[0] + 1
}

export default nextIndex
