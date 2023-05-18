/**
 * 读取sessionStorage
 *
 * @param name - 名称
 * @returns 返回sessionStorage
 */
export function getSession(name: string): any {
	const str = sessionStorage.getItem(name)
	const exp = new Date()
	if (str) {
		const obj = JSON.parse(str)
		if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {
			return null
		} else {
			if (!obj.expires || obj.expires > exp.getTime()) {
				return obj.value
			} else {
				sessionStorage.removeItem(name)
				return null
			}
		}
	} else {
		return null
	}
}

export default getSession
