/**
 * Version number size comparison
 *
 * @example
 * ```js
 * compareVersion('1.11.0', '1.9.9') // => 1 // 1=Version 1.11.0 is newer than 1.9.9
 * compareVersion('1.11.0', '1.11.0') // => 0 // 0=Versions 1.11.0 and 1.11.0 are the same
 * compareVersion('1.11.0', '1.99.0') // => -1 // -1=Version 1.11.0 is older than 1.99.0
 * ```
 * @param input - input version
 * @param compare - compare version
 * @return 1/0/-1
 */
function compareVersion(input: string, compare: string) {
	const [inputVer, inputSubVer = ''] = input.split('-')
	const [compareVer, compareSubVer = ''] = compare.split('-')
	console.info(inputSubVer, compareSubVer)
	const v1 = inputVer.split('.')
	// const [v1SubType = '', v1SubVer = ''] = inputSubVer.split('.')
	const v2 = compareVer.split('.')
	// const [v2SubType = '', v2SubVer = ''] = compareSubVer.split('.')
	const len = Math.max(v1.length, v2.length)

	while (v1.length < len) {
		v1.push('0')
	}
	while (v2.length < len) {
		v2.push('0')
	}

	for (let i = 0; i < len; i++) {
		const num1 = parseInt(v1[i])
		const num2 = parseInt(v2[i])

		if (num1 > num2) return 1
		else if (num1 < num2) return -1
	}
	return 0
}

export default compareVersion
