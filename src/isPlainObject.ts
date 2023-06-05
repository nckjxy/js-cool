function isWindow(obj: any) {
	return obj !== null && obj === obj.window
}

/**
 * is PlainObject
 *
 * @param arr -
 */
function isPlainObject(obj: unknown) {
	return (
		Object.prototype.toString.call(obj) === '[object Object]' &&
		!isWindow(obj) &&
		Object.getPrototypeOf(obj) === Object.prototype
	)
}

export default isPlainObject
