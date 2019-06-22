function process() {
    var msg = document.getElementById("msg").value
    msg = btoa(msg);
    
    url=window.location.href
    url=url.substring(0, url.length - 10);
    window.location.href=`${url}msg/index.html#${msg}`
}

setInterval( () => {
    if(window.location.hash.length > 1) {
        window.location.href="https://skylarmccauley.xyz/paperboat"
    }
}, 1000)
