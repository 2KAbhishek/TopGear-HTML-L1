function black1() {
    document.getElementById("first").setAttribute("style", "background-color: black; color: white;");
}
function white1() {
    document.getElementById("first").setAttribute("style", "background-color: white;");
}
function blue1() {
    document.getElementById("first").setAttribute("style", "background-color: #1688f0;");
}
function black2() {
    document.getElementById("second").setAttribute("style", "background-color: black; color: white;");
}
function white2() {
    document.getElementById("second").setAttribute("style", "background-color: white;");
}
function blue2() {
    document.getElementById("second").setAttribute("style", "background-color: #1688f0;");
}

var myVideo = document.getElementById("video");
function togglePlay() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
}
