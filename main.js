song1="";
song2="";
function setup(){
    canvas = createCanvas(550,500);
    canvas.position(450,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video ,0, 0,600, 500);
}
function preload(){
    song2=loadSound("music2.mp3");
    song1=loadSound("music.mp3");
}
function play(){
    song1.play();
    
    
}