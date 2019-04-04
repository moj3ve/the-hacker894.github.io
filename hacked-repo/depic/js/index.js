(function(a){"use strict";navigator.userAgent.indexOf("Cydia")!=-1?(a.title=a.title.split(" \u00b7 ")[0],a.documentElement.classList.add("cydia")):a.documentElement.classList.remove("cydia","depiction")})(document)

function iOSVersion() {
    var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
        version;
    console.log(navigator.appVersion)
    console.log(match)
    if (match !== undefined && match !== null) {
        version = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3] || 0, 10)
        ];
        return `<p>You are running iOS <strong>${parseFloat(version.join('.'))}</strong><p>`
    }
    return `<p style="color: red;">iOS version not detected<p>`;
}