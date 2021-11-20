Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

Bangle.setLCDMode("doublebuffered");


function consoleDebug(message) {
  console.log(message);
}


var accel = Bangle.getAccel();


g.setFontAlign(-1,-1);


function draw(){
  // read accelerometer
  accel = Bangle.getAccel();
  consoleDebug(accel.x);
  consoleDebug(accel.y);
  consoleDebug(accel.z);

  // prepares display for new image to be drawn?
  g.flip();
  g.setFont("6x8",3);
  g.drawString(accel,13,11);
}
setInterval(draw, 100);
