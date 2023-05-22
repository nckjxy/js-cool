export type { AnyObject, AnyFunction, ArrayOneMore } from '../typings/common'

export { default as loadSource } from 'load-source' // 动态加载资源，支持js、图片、css链接、css样式字符串
export { default as mountCss } from 'mount-css' // 动态加载css链接资源
export { default as mountImg } from 'mount-image' // 动态加载图片资源
export { default as mountJs } from 'mount-script' // 动态加载js链接资源
export { default as mountStyle } from 'mount-style' // 动态加载css样式
export { download } from 'use-downloads' // 文件下载

// 全局参数
export { default as client } from './client' // client方法返回一个浏览器判断结果对象
export { default as pattern } from './pattern' // pattern返回一些常用的正则

// String扩展、数组方法
export { default as trim } from './trim' // 根据传参来去除空格
export { default as clearAttr } from './clearAttr' // 去除HTML标签所有属性
export { default as clearHtml } from './clearHtml' // 去除HTML标签
export { default as getNumber } from './getNumber' // 获取字符串中的数字
export { default as camel2Dash } from './camel2Dash' // 将驼峰字符串转成-间隔且全小写的Dash模式
export { default as dash2Camel } from './dash2Camel' // 将-间隔且全小写的Dash模式转成驼峰字符串
export { default as upperFirst } from './upperFirst' // 首字母大写
export { default as getRandomNum } from './getRandomNum' // 获取随机整数
export { default as getRandomStr } from './getRandomStr' // 获取随机字符串
export { default as getRandomStrWidthSpecialChar } from './getRandomStrWidthSpecialChar' // 获取随机字符串带特殊符号
export { default as getCHSLength } from './getCHSLength' // 获取字符串长度，中文算2个字符
export { default as cutCHSString } from './cutCHSString' // 截取字符串，中文算2个字节
export { default as textareaInsertText } from './textareaInsertText' // textarea或input对象在指定的光标位置插入文字
export { default as textareaMoveToEnd } from './textareaMoveToEnd' // textarea或input对象将光标定位到文字尾部

// 获取一下状态
export { default as isDigitals } from './isDigitals' // 是否为由数字组成的字符串
export { default as isExitsFunction } from './isExitsFunction' // 是否存在指定函数
export { default as isExitsVariable } from './isExitsVariable' // 是否存在指定变量
export { default as windowSize, type WindowSizeObj } from './windowSize' // windowSize获取窗口大小
export { default as getAppVersion } from './getAppVersion' // 获取APP版本号
export { default as getOsVersion } from './getOsVersion' // 获取手机系统版本
export { default as getIsAppVersionLastest } from './getIsAppVersionLastest' // 版本号大小对比
export { default as getDirParam, type DirParamType } from './getDirParam' // 获取目录形式URL参数
export { default as getParameter } from './getParameter' // 获取单个URL参数
export { default as getUrlParam } from './getUrlParam' // 获取URL参数

// 缓存、cookie、session
export { default as getCache } from './getCache' // 读取localStorage
export { default as setCache } from './setCache' // 写入localStorage
export { default as delCache } from './delCache' // 删除localStorage
export { default as getSession } from './getSession' // 读取sessionStorage
export { default as setSession } from './setSession' // 写入sessionStorage
export { default as delSession } from './delSession' // 删除sessionStorage
export { default as getCookie } from './getCookie' // 读取cookie
export { default as setCookie } from './setCookie' // 写入cookie
export { default as delCookie } from './delCookie' // 删除cookie

// 编码与解码
export { default as encodeBase64 } from './encodeBase64' // 字符串、数字转base64
export { default as encodeUtf8 } from './encodeUtf8' // 编码Utf8
export { default as decodeBase64 } from './decodeBase64' // base64解码
export { default as decodeUtf8 } from './decodeUtf8' // 解码Utf8

// 事件委托、其他事件方法
export { default as stopBubble } from './stopBubble' // 阻止冒泡
export { default as stopDefault } from './stopDefault' // 阻止默认事件
export { default as addEvent } from './addEvent' // 事件委托，支持多次委托
export { default as removeEvent } from './removeEvent' // removeEvent移除由addEvent创建的事件委托
export { default as getScrollPosition } from './getScrollPosition' // 获取滑动到顶部和底部 返回'top' 'bottom'，建议使用限流

// 工具类
export { default as nextIndex } from './nextIndex' // 返回下一个zIndex值
export { default as fixNumber } from './fixNumber' // 截取小数点后几位，不足的不补0
export { default as extend, ExtendArrayData, ExtendObjectData, ExtendData } from './extend' // 深拷贝
export { default as delay } from './delay' // 防抖节流
export { default as getType } from './getType' // 获取目标类型
export { default as isArray } from './isArray' // 判断是否数组
export { default as isPlainObject } from './isPlainObject' // 判断是否PlainObject
export { default as cleanData } from './cleanData' // 清洗数据
export { default as searchTreeObject, type SearchKeySet } from './searchTreeObject' // 对象查找
export { default as openUrl } from './openUrl' // 新标签页打开链接（浏览器不能解析的文件跳转下载）
export { default as toThousands } from './toThousands' // 千分位分割方法
export { default as all } from './all' // 如果所提供的谓词函数对一个集合中的所有元素都返回true，则返回true，否则返回false。
export { default as any } from './any' // 如果所提供的谓词函数对一个集合中的至少一个元素返回true，则返回true，否则返回false。
export { default as uuid } from './uuid' // 浏览器端生成uuid，采用v4方法
export { default as CSVToArray } from './CSVToArray' // csv与json、array相互转换
export { default as arrayToCSV } from './arrayToCSV' // csv与json、array相互转换
export { default as CSVToJSON } from './CSVToJSON' // csv与json、array相互转换
export { default as JSONToCSV } from './JSONToCSV' // csv与json、array相互转换
export { default as RGBToHex } from './RGBToHex' // 将RGB组件的值转换为颜色代码。
export { default as intersect } from './intersect' // 多个数组求交集
export { default as union } from './union' // 多个数组求交集
export { default as minus } from './minus' // 多个数组求差集
export { default as complement } from './complement' // 多个数组求补集
export { default as contains } from './contains' // 数组是否包含指定元素
export { default as unique } from './unique' // 数组去重
export { default as fillIPv6 } from './fillIPv6' // ipv6地址补全
export { default as getProperty } from './getProperty' // 根据路径字符串获取数组、对象属性值
export { default as setProperty } from './setProperty' // 根据路径字符串设置数组、对象属性值

export { default } from './index.default'
export const version = '__VERSION__' as string
