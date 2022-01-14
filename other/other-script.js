function readCookie() {
    console.log(document.cookie)
}

function setCookie() {
    document.cookie = 'Message=test-other-script;Domain=https://cdn.jsdelivr.net'
}

readCookie()
setCookie()