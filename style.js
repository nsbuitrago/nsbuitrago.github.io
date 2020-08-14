function getStylesheet() {
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19) {
        document.write("<link rel='stylesheet' href='light.css' type='text/css'>")
    }
    else {
        document.write("<link rel='stylesheet' href='dark.css' type='text/css'>")
    }
}

getStylesheet();