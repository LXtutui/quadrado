var canvas;
var video;
var poseNet;
var Xnariz = 0;
var Ynariz = 0;
var diferenca = 0;
var pulsoDX = 0;
var pulsoEX = 0;

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses); 
}

function modelLoaded(){
    console.log("poseNet foi iniciado");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        Xnariz = results[0].pose.nose.x;
        Ynariz = results[0].pose.nose.y;
        pulsoDX = results[0].pose.rightWrist.x;
        pulsoEX = results[0].pose.leftWrist.x;
        diferenca = floor(pulsoEX - pulsoDX);
    }
}

function draw(){
    background("gray");
    fill("white");
    stroke("white");
    square(Xnariz, Ynariz, diferenca);
    document.getElementById("quadrado").innerHTML="largura e altura ="+diferenca+"px";
}