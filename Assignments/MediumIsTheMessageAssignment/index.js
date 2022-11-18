const playButton = document.getElementById("playButton")
const earEye = document.getElementById("earEye")

playButton.addEventListener("click",playButtonClicked);
let current = 1

function playButtonClicked() {
    playButton.style.animation = "vanish 5s";
    playButton.style.opacity = 0;
    playButton.addEventListener("animationend",playEarEye);
}

function playEarEye() {
    let middleFrameObj = document.getElementById("middleFrame");
    middleFrameObj.style.display = "None";
    earEye.style.display = "Block";
    earEye.style.animation = "appear 5s";
    earEye.style.opacity = 1;
    earEye.addEventListener("animationend",playEarEyeText);
}

// https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var speed = 50;
let text = "Until writing was invented, man lived in acoustic space: boundless, directionless, horizonless, in the dark of the mind, in the world of emotion, by primordial intuition, by terror. Speech is a social chart of this bog."
function playEarTextType(obj) {
    if (i < text.length) {
        document.getElementById("earEyeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(playEarTextType, speed);
    }
}

var audio = new Audio("CrowdTalking.mp3");

function playEarEyeText() {
    let earEyeTextObj = document.getElementById("earEyeText");
    earEyeTextObj.style.display= "Block";
    audio.play();
    playEarTextType();
    setTimeout(()=>{endOfAudio()},15000);
}

function playVisualTextType(obj) {
    if (i < text.length) {
        document.getElementById("visualsText").innerHTML += text.charAt(i);
        i++;
        setTimeout(playVisualTextType, speed);
    }
}

var imgIndex = 0;
let imagesSpeed = 500;

function playImages() {
    let imageVisual = document.getElementById("visualsBoxImg");
    imageVisual.src=(imgIndex%6+".png");
    imgIndex++;
    setTimeout(playImages, imagesSpeed);
}

function infiniteImages() {
    document.getElementById("visualsBox").style.display = "Block";
    playImages();
}

function endOfAudio() {
    audio.pause()
    document.getElementById("visualsText").style.display = "Block";
    i = 0;
    text = "The phonetic alphabet forced the magic world of the ear to yield to the neutral world of the eye. Man was given an eye for an ear."
    playVisualTextType();
    setTimeout(()=>{infiniteImages()},10000);
}





