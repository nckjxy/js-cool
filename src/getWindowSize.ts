export interface WindowSizeObj {
    width: number
    height: number
}

/**
 * getWindowSize获取窗口大小
 *
 * @returns 返回宽高
 */
export function getWindowSize(): WindowSizeObj {
    var s: WindowSizeObj = { width: 0, height: 0 }
    if (window.innerWidth) {
        s.width = window.innerWidth
        s.height = window.innerHeight
    } else if (document.body && document.body.clientWidth) {
        s.width = document.body.clientWidth
        s.height = document.body.clientHeight
    }
    // 通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientWidth) {
        s.width = document.documentElement.clientWidth
        s.height = document.documentElement.clientHeight
    }
    return s
}

export default getWindowSize
