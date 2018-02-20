var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;

var nums = [30, 45, 50, 70];

function setup() {
  createCanvas(500, 350);
  backgroundColor = color(0);

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
  background(0);
  if (playing) {
      stroke(255);
      fill(205, 80, 107);
      ellipse(n * 100 + 100, 200, nums[n], nums[n]);
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    n =0;
    } else if (key == 'S') {
    osc = oscS;
    n =1;
    //ellipse(n * 10 + 10, 20, nums[n], nums[n]);
  } else if (key == 'D') {
    osc = oscD;
    n =2;
   
  } else if (key == 'F') {
    osc = oscF;
    n =3;
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
