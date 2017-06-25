var N;//depth
var tN;//paragraph depth
var a;//branches
var ta;//paragraph branches
var STEP_SIZE;
var STROKE;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(3);

    N = createInput();//depth
    N.position(width/4*3, 100);
    N.size(10, 15);
    N.value(2);
    tN = createP("Depth").position(N.position().x+N.size().width+5,N.position().y-N.size().height/1.5);

    a = createInput();//branches
    a.position(width/4*3, N.position().y+N.size().height+5);
    a.size(10, 15);
    a.value(2);
    ta = createP("Branches").position(a.position().x+a.size().width+5,a.position().y-a.size().height/1.5);

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

    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    // if (lev > 45){//limit) {
    //
    //   //rotate(HALF_PI/3);
    //   //  for (var i = 0; i < 2; i++  && degaument() ) {
    //       for (var j = 1-(deg/PI)*1; j >=-1; j-=(deg/PI)*2) {
    //         if(j>0){stroke(255,0,0);}else{stroke(0,0,255)}
    //         push(); // Save the current state of transformation (i.e. where are we now)
    //         rotate(deg*j); // Rotate by deg
    //         baum(len); // Ok, now call myself to draw two new branches!!
    //         pop();
    //       }
    //   //  }
    //           // Whenever we get back here, we "pop" in order to restore the previous matrix state
    //
    //     // Repeat the same thing, only branch off to the "left" this time!
    //     //   push();
    //     //   rotate(-deg);
    //     //  baum(len);
    //     //   pop();
    //}
}
function windowResized() {
	createCanvas(window.innerWidth, window.innerHeight);
  N.position(width/4*3, 100);
  tN.position(N.position().x+N.size().width+5,N.position().y-N.size().height/1.5);
  a.position(width/4*3, N.position().y+N.size().height+5);
  ta.position(a.position().x+a.size().width+5,a.position().y-a.size().height/1.5);
  console.log(window.outerWidth+"X"+window.outerHeight);
}
