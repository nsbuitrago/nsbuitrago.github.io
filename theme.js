function getStyleSheet() {
    var currentTime = new Date().getHours();
    if (6 <= currentTime&&currentTime < 21) {
        document.write("<link rel='stylesheet' href='css/screen-light.css'></link>")
    }
    else {
        document.write("<link rel='stylesheet' href='css/screen-dark.css'></link>")
    }
}

getStyleSheet()