var N
var a
var deg,amount;
var first;
var decrease;
var firstSize;
function setup() {
    createCanvas(800, 400);
    first = true;
    decrease=0.5;
    firstSize=120*3
    N = createInput();//depth
    N.position(width, 0);
    N.size(30, 15);
    N.value(3);

    a = createInput();//branches
    a.position(width, 20);
    a.size(30, 15);
    a.value(2);
}

function draw() {
    background(255);
    translate(width / 2, height-10);
    //rotate(PI);
    deg =PI/a.value();
    amount =.5;// PI / a.value();
    first=true;
    //firstSize*pow(decrease,x)=a;
    //var limi=(log(a/firstSize)/log(decrease))
    var limi=0;
    baum(firstSize,decrease,limi);
}

function baum(len,decrease,limit) {
    // Each branch will be 2/3rds the size of the previous one

    //float sw = map(le*n,2,120,1,10);
    //strokeWeight(sw);
    strokeWeight(1);

    if (!first) {
        //stroke(random(255),random(255),random(255),random(255));
        line(0, 0, 0, -len);
        // Move to the end of that line
        translate(0, -len);
    }
    first = false;

    len *= decrease;
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (len > 45){//limit) {

      //rotate(HALF_PI/3);
      //  for (var i = 0; i < 2; i++  && degaument() ) {
          for (var j = 1-(deg/PI)*1; j >=-1; j-=(deg/PI)*2) {
            if(j>0){stroke(255,0,0);}else{stroke(0,0,255)}
            push(); // Save the current state of transformation (i.e. where are we now)
            rotate(deg*j); // Rotate by deg
            baum(len); // Ok, now call myself to draw two new branches!!
            pop();
          }
      //  }
              // Whenever we get back here, we "pop" in order to restore the previous matrix state

        // Repeat the same thing, only branch off to the "left" this time!
        //   push();
        //   rotate(-deg);
        //  baum(len);
        //   pop();
    }
}
function degaument() {
  deg*=-1//+=amount;
}
