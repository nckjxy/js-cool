import contains from './contains'

/**
 * Array de-duplication
 *
 * @example
 * ```js
 * unique([1, 2, 2, '33']) // [1, 2, '33']
 * ```
 * @param arr - array data
 * @returns - new array
 */
function unique<T = unknown>(arr: T[]): T[] {
	const newArray: T[] = []
	for (const el of arr) {
		!contains(newArray, el) && newArray.push(el)
	}
	return newArray
}

export default unique
