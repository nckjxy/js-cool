/**
 * 去除HTML标签及空格、换行
 * 
 * @param string - 带html标签的字符串
 * @returns newString
 */
function clearHtmlNS(string: string) {
    return string.replace(/<\/?.+?>|[\r\n\s]|(\ )/g, '')
}

export default clearHtmlNS
