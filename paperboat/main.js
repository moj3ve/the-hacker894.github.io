function applyVerText() {
    document.getElementById("ver").innerHTML = `v0.2.2-alpha`;
}
function init() {
    applyVerText()
}
function process() {
    var msg = document.getElementById("msg").value
    if(msg.length < 1) {
        alert("You must write a message!")
        return
    }
    msg = btoa(msg);
    
    url=window.location.href
    // url=url.substring(0, url.length - 10); 
    window.location.href=`${url}msg/index.html#${msg}`

}
