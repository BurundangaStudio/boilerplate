//
// devices.js

const Device = {
    console: true,
    isMobile: false,
    mobile: {
        iPhone: false,
        android: false,
        orientation: {
            landscape: false,
            portrait: false
        }
    },
    isTablet: false,
    tablet: {
        iPad: false,
        android: false,
        orientation: {
            landscape: false,
            portrait: false
        }
    },
    isDesktop: false,
    desktop: {
        xs: false,
        s: false,
        m: false,
        l: false,
        xl: false,
        xxl: false
    },
    browser: {
        chrome: false,
        safari: false,
        firefox: false,
        ie: false,
        iedge: false,
        opera: false
    },
    size: {
        s: false,
        m: false,
        l: false,
        xl: false
    },
    consoleDevice() {
        let msg = ''
        if (this.isMobile) {
            if (this.mobile.iPhone) msg = 'iPhone '
            else if (this.mobile.android) msg = 'Android phone '
            else msg = 'Other phone '
            if (this.mobile.orientation.landscape) msg = msg + 'in landscape'
            else msg = msg + 'in portrait'
        } else if (this.isTablet) {
            if (this.tablet.iPad) msg = 'iPad '
            else if (this.tablet.android) msg = 'Android tablet '
            else msg = 'Other tablet '
            if (this.tablet.orientation.landscape) msg = msg + 'in landscape'
            else msg = msg + 'in portrait'
        } else if (this.isDesktop) {
            if (this.desktop.xs) msg = 'XS '
            else if (this.desktop.s) msg = 'S '
            else if (this.desktop.m) msg = 'M '
            else if (this.desktop.l) msg = 'L '
            else if (this.desktop.xl) msg = 'XL '
            else if (this.desktop.xxl) msg = 'XXL '
            msg = msg + 'Desktop with '
            if (this.browser.chrome) msg = msg + 'Chrome'
            else if (this.browser.safari) msg = msg + 'Safari'
            else if (this.browser.firefox) msg = msg + 'Firefox'
            else if (this.browser.ie) msg = msg + 'Internet Explorer'
            else if (this.browser.iedge) msg = msg + 'Internet Edge'
            else if (this.browser.opera) msg = msg + 'Opera'
        }
        console.info(msg)
    },
    setDevice() {
        this.setSize()
        this.checkMobile()
        this.checkTablet()
        this.checkDesktop()
        this.checkBrowser()
        if (this.console) this.consoleDevice()
    },
    setSize() {
        this.size.s = (window.innerWidth < 768)
        this.size.m = (window.innerWidth < 1200 && !this.size.s)
        this.size.l = (window.innerWidth < 1600 && !this.size.m)
        this.size.xl = (window.innerWidth > 1600 && !this.size.l)
    },
    checkMobile() {
        if (((window.innerWidth <= 640) && (this.isApple() || this.isAndroid())) || /iPhone/i.test(window.navigator.userAgent)) this.isMobile = true
        else this.isMobile = false
        this.mobile.iPhone = (this.isMobile) ? this.isApple() : false
        this.mobile.android = (this.isMobile) ? this.isAndroid() : false
        this.mobile.orientation.landscape = (window.innerWidth > window.innerHeight)
        this.mobile.orientation.portrait = ! this.mobile.orientation.landscape
    },
    checkTablet() {
        if ((!this.isMobile && window.innerWidth < 768 && (this.isApple() || this.isAndroid())) || /iPad/i.test(window.navigator.userAgent)) this.isTablet = true
        else this.isTablet = false
        this.tablet.iPad = (this.isTablet) ? this.isApple() : false
        this.tablet.android = (this.isTablet) ? this.isAndroid() : false
        this.tablet.orientation.landscape = (window.innerWidth > window.innerHeight)
        this.tablet.orientation.portrait = ! this.mobile.orientation.landscape
    },
    checkDesktop() {
        if (!this.isMobile && !this.isTablet) this.isDesktop = true
        else this.isDesktop = false
        this.desktop.xs = (this.isDesktop) ? (window.innerWidth < 480) : false
        this.desktop.s = (this.isDesktop && !this.desktop.xs) ? (window.innerWidth < 768) : false
        this.desktop.m = (this.isDesktop && !this.desktop.s) ? (window.innerWidth < 1280) : false
        this.desktop.l = (this.isDesktop && !this.desktop.m) ? (window.innerWidth < 1600) : false
        this.desktop.xl = (this.isDesktop && !this.desktop.l) ? (window.innerWidth > 1600) : false
        this.desktop.xxl = (this.isDesktop && !this.desktop.xl)
    },
    checkBrowser() {
        this.browser.chrome = !!window.chrome && !!window.chrome.webstore
        this.browser.safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification)
        this.browser.firefox = typeof InstallTrigger !== 'undefined'
        this.browser.ie = /*@cc_on!@*/false || !!document.documentMode
        this.browser.iedge = !this.browser.ie && !!window.StyleMedia
        this.browser.opera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
    },
    isApple() {
        return /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
    },
    isAndroid() {
        return /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i.test(window.navigator.userAgent)
    }
}

window.addEventListener('resize', () => { Device.setDevice() })

export default Device
