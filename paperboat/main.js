function applyVerText() {
    document.getElementById("ver").innerHTML = `v0.2.4-alpha`;
    document.getElementById("msg").placeholder =`Type your stupid message here :P`;
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
    try {
        msg = btoa(msg);
    } catch (ex) {
        alert(ex + "\n\nTry not including emoji?")
        return;
    }
    
    
    url=window.location.href
    // url=url.substring(0, url.length - 10); 
    window.location.href=`${url}msg/index.html#${msg}`

}