var N;//depth
var a;//branches
var STEP_SIZE;
var STROKE;
function setup() {
    createCanvas(800, 400);
    frameRate(3);

    N = createInput();//depth
    N.position(width, 5);
    N.size(10, 15);
    N.value(2);
    createP("Depth").position(N.position().x+N.size().width+5,N.position().y-N.size().height/1.5);

    a = createInput();//branches
    a.position(width, N.position().y+N.size().height+5);
    a.size(10, 15);
    a.value(2);
    createP("Branches").position(a.position().x+a.size().width+5,a.position().y-a.size().height/1.5);

    STEP_SIZE = -height/N.value();
    STROKE = 4;
}

function draw() {
    STEP_SIZE = height/N.value()-(1+STROKE);
    background(255);
    for (var i = 0; i < width; i+=width/ pow(2, floor(N.value())+1) ) {
      line(i,0,i,height);
    }
    translate(width/2, STROKE);
    strokeWeight(STROKE);
    if(N.value()<10)baum(1,STEP_SIZE,a.value(),N.value());
    //console.log(mouseX,mouseY);
}

function baum(level,stepSize,branches,depth) {
    // Each branch will be 2/3rds the size of the previous one

    //float sw = map(le*n,2,120,1,10);
    //strokeWeight(sw);

    if(level<=depth){
      line(0,0,(width/(2*(level))-(width/2)/(2*(level))),stepSize);
      push();
      translate((width/(2*(level))-(width/2)/(2*(level))),stepSize);
      baum(level+1,stepSize,branches,depth);
      pop();

      line(0,0,-(width/(2*(level))-(width/2)/(2*(level))),stepSize);
      push();
      translate(-(width/(2*(level))-(width/2)/(2*(level))),stepSize);
      baum(level+1,stepSize,branches,depth);
      pop();

      // line(0,0,-(width/(level+1)-(width/2)/(level+1)),stepSize);
      // push();
      // translate(-(width/(level+1)-(width/2)/(level+1)),stepSize);
      // baum(level+1,stepSize,branches,depth);
      // pop();
    }
    // if (!first) {
    //     //stroke(random(255),random(255),random(255),random(255));
    //     line(0, 0, 0, -len);
    //     // Move to the end of that line
    //     translate(0, -len);
    // }
    //first = false;

    //len *= decrease;//
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
