
var accel = Bangle.getAccel();


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


(function (back) {
  const menu = {
    '': { 'title': 'clock_band' },
    '< Back': back,
  };
  E.showMenu(menu);
});
