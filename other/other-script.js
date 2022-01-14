function readCookie() {
    console.log(document.cookie)
}

function setCookie() {
    document.cookie = 'test-other-script'
}

readCookie()
setCookie()