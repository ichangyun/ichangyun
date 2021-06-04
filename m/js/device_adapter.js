//判断访问终端
var os = function () {
  var ua = navigator.userAgent,
    isQB = /(?:MQQBrowser|QQ)/.test(ua),
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isIpad = /(?:iPad|PlayBook)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isSafari = /(?:Safari)/.test(ua),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isOpen = /(?:OperaMini) /.test(ua),
    isUC = /(?:UCWEB|UCBrowser)/.test(ua),
    isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isQB: isQB,
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isOpen: isOpen,
    isUC: isUC,
    isIpad: isIpad
  }
}()
if (os.isPc) {
  var href = window.location.href
  window.location.replace(href.replace('/html/1/m/', '/html/1/'))
}