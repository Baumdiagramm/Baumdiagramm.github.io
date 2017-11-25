var N;//depth
var tN;//paragraph depth
var a;//branches
var ta;//paragraph branches
var pic;//buttun
var STEP_SIZE;
var STROKE;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);

  N = createInput();//depth
  N.position(width/4*3, 100);
  N.size(20, 30);
  N.value(2);
  tN = createP("Depth").position(N.position().x+N.size().width+5,N.position().y-N.size().height/1);

   a = createInput();//branches
   a.position(width/4*3, N.position().y+N.size().height+5);
   a.size(0,0);
   // a.size(20, 30);
  // a.value(2);
  // ta = createP("Branches").position(a.position().x+a.size().width+5,a.position().y-a.size().height/1);

  pic = createButton('save Picture');
  pic.position(width/4*3, a.position().y+a.size().height+5);
  pic.mousePressed(capture);

  STROKE = 2;
  STEP_SIZE = height/N.value()-(1+STROKE);
}

function draw() {
  STEP_SIZE = height/N.value()-(1+STROKE);
  background(255);
  strokeWeight(STROKE);
  translate(width/2, STROKE);
  baum(1,STEP_SIZE,a.value(),N.value());
}

function baum(level,stepSize,branches,depth) {
  if(level<=depth){
    line(0,0,(width/pow(2,floor(level)+1)),stepSize);
    push();
    translate((width/pow(2,floor(level)+1)),stepSize);
    baum(level+1,stepSize,branches,depth);
    pop();

    line(0,0,-(width/pow(2,floor(level)+1)),stepSize);
    push();
    translate(-(width/pow(2,floor(level)+1)),stepSize);
    baum(level+1,stepSize,branches,depth);
    pop();
  }
}
function windowResized() {
	createCanvas(window.innerWidth, window.innerHeight);
  N.position(width/4*3, 100);
  tN.position(N.position().x+N.size().width+5,N.position().y-N.size().height/1.5);
  a.position(width/4*3, N.position().y+N.size().height+5);
  ta.position(a.position().x+a.size().width+5,a.position().y-a.size().height/1.5);
  pic.position(width/4*3, a.position().y+a.size().height+5);
}
function capture(){
  saveCanvas("Baumdiagram"+"_"+day()+"_"+month()+"_"+year(), 'jpg');
}
