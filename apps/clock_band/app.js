Bangle.on('accel', function(acc) {
  var magnitude = acc.mag.toFixed(1);
  if(magnitude != 1.0) {
    console.log(acc.mag.toFixed(1));
  }
});

// Two variables to update
var heartrateDrum = false;
var accel = false;
// First menu
var mainmenu = {
  "" : {
    "title" : "-- clock_band --"
  },
  "Hjerterytme drums" : {
    value : heartrateDrum,
    format : v => v?"På":"Av",
    onchange : v => { 
      heartrateDrum=v; 
      Bangle.setHRMPower(v ? 1 : 0);
Bangle.on('HRM',function(hrm) {
  /*hrm is an object containing:
    { "bpm": number,             // Beats per minute
      "confidence": number,      // 0-100 percentage confidence in the heart rate
      "raw": Uint8Array,         // raw samples from heart rate monitor
   */
  console.log(hrm.bpm, hrm.confidence);
});
    }
  },
  "Accel" : {
    value : accel,
    format : v => v?"På":"Av",
    onchange : v => { accel=v; }
  },
  "Exit" : function() { E.showMenu(); },
};


E.showMenu(mainmenu);