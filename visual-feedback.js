var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;

var drawCircle = false;
var drawRightEye = false;
var drawMouth = false;
var nose = false;

function setup() {
  createCanvas(300,300);
  backgroundColor = color(0);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqS);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
}

function draw() {
  if (playing) {
    background(0, 255, 255);
    }
  else {
    background(255, 0, 255);
  }
  fill(0);
  text('click here,\nthen press A/S/D/F\n keys to play', width/2, 10)
  
  if(drawCircle == true){
    ellipse(width/4, height/4, 30, 30);
  }
  
  if(drawRightEye == true){
    ellipse(width/1.5, height/4, 30, 30);
  }
    if(drawMouth == true){
    line( width/3.5, height/2, width/2, width/2);
       if(nose == true){
         ellipse(130,120,10,10)
      }    
  }}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    drawCircle = true;
  } else if (key == 'S') {
    osc = oscS;
    drawRightEye = true;
  } else if (key == 'D') {
    osc = oscD;
    drawMouth = true;
  } else if (key == 'F') {
    osc = oscF;
    nose = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
