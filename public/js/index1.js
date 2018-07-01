var font;
var vehicles = [];


function preload(){
  font = loadFont('AvenirNextLTPro-Demi.otf');
}




function setup(){
  var canvas = createCanvas(1500,300);
  background(51);
  canvas.parent('sketch-holder');
  var points = font.textToPoints('Insights EmailSender', 300, 190, 110);
  for(var i = 0; i < points.length;i++){
  var pnt = points[i];
  var vehicle = new Vehicle(pnt.x, pnt.y);
  vehicles.push(vehicle);
}
}

function draw(){
  background(51);
  for(var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
    // v.arrive();
  }
}
