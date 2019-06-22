function process() {
    var msg = document.getElementById("msg").value
    msg = btoa(msg);
    
    url=window.location.href
    /* url=url.substring(0, url.length - 10); Use this when debugging locally
    window.location.href=`${url}msg/index.html#${msg}`
    */
   window.location.href=`${url}msg/index.html#${msg}`
}
