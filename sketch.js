var sliderA;
var sliderB;
var sliderC;
var sliderD;
var funktion;
var Dsign = '+';
var Csign = '-';

function setup() {
  createCanvas(800,400);
  noFill();
  sliderA = createSlider(-100,100,10);
  sliderB = createSlider(-100,100,10);
  sliderC = createSlider(-200,200,0);
  sliderD = createSlider(-350,350,0);
  funktion = createElement('h1','f(x)=sin(x*'+sliderA.value()+')');
}

function draw() {
  translate(width/2,height/2);
  background(255);
  if(sliderD.value()<0){Dsign = '-';}else{Dsign = '+';}
  if(sliderC.value()<0){Csign = '+';}else{Csign = '-';}
  funktion.html('f(x)='+sliderA.value()/10+'*sin('+sliderB.value()/10+'*x'+Csign+abs(sliderC.value())+')'+Dsign+abs(sliderD.value()/100));
  strokeWeight(2);
  line(0,height,0,-height);
  line(-width,0,width,0);
  var a = sliderA.value()/10,b = sliderB.value()/10,c = sliderC.value(),d = sliderD.value()/100;
 strokeWeight(4);
  beginShape()
  for(var x = -width; x < width/2 ; x+=2){
  var output=(-a*sin(radians(b*x-c))-d)*(100-4*2);
  vertex(x,output);
  }
  endShape();
}
