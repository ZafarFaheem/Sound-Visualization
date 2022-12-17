let button;
// let volHistory = [];
let w;
function preload(){
  sound = loadSound('faded.mp3');
}

function setup(){
  createCanvas(720, 480);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('play');
  button.mousePressed(togglePlay);
  fft = new p5.FFT(0.9, 64);
  w = width / 64;
}

function draw(){
  background(0);
  let spectrum = fft.analyze();
  console.log(spectrum);
  noStroke();
  for (let i = 0; i< spectrum.length; i++){
    let ampl = spectrum[i];
    let y = map(ampl, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w-2, height - y);
  }
  stroke(255);
  noFill();
}

function togglePlay() {
  if (sound.isPlaying()) {
    button.html('play');
    sound.pause();
  } else {
    button.html('pasue');
    sound.play();
    // sound.pause();
  }
}
