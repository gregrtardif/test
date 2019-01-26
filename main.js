var submit = document.querySelector("#submit");
var currentocc = document.querySelector("#currentocc");
var callsinmonth = document.querySelector("#callsinmonth");
var daysleft = document.querySelector("#daysleft");
var talkneeded = document.querySelector("#talkneeded");
var reset = document.querySelector("#reset");
var callsaday = document.querySelector("#callsaday");
var currentdph = document.querySelector("#currentdph");
var czechbox = document.querySelector("#czechbox");
var occ = 28;
var occtotime = 0.08;
var talkgoal = 2.24;
var dialgoal = 56;
var talktotal;
var dayssofar;
var talksofar;
var talksofartotal;
var difference;
var talkneed;
var callsneeded;
let daysworked;
let hoursleft;

currentocc.addEventListener("change", function() {
  currentocc.textContent = currentocc.value;
  currentocc = Number(currentocc.value);
});
currentdph.addEventListener("change", function() {
  currentdph.textContent = currentdph.value;
  currentdph = Number(currentdph.value);
});
callsinmonth.addEventListener("change", function() {
  callsinmonth.textContent = callsinmonth.value;
  callsinmonth = Number(callsinmonth.value);
});
daysleft.addEventListener("change", function() {
  daysleft.textContent = daysleft.value;
  daysleft = Number(daysleft.value);
});
submit.addEventListener("click", function() {
  if (isNaN(currentocc, currentdph, callsinmonth, daysleft)) {
    alert("Looks like we are missing a field. Please reset and try again");
  } else {
    daysworked = callsinmonth / currentdph / 8;
    talkneed = (
      (60 *
        ((daysworked + daysleft) * talkgoal -
          currentocc * occtotime * daysworked)) /
      daysleft
    ).toFixed(2);

    talkneeded.textContent = talkneed;
    callsneeded = (
      ((daysworked + daysleft) * dialgoal - currentdph * 8 * daysworked) /
      daysleft
    ).toFixed(2);
    callsaday.textContent = callsneeded;
  }
});
reset.addEventListener("click", function() {
  window.location.reload();
});

function isChecked() {
  if (czechbox.checked) {
    document.querySelector(".sales").style.display = "none";
    document.querySelector(".retention").style.display = "flex";
    document.querySelector(".salesheader").style.color = "gray";
    document.querySelector(".retentionheader").style.color = "black";
  } else {
    document.querySelector(".sales").style.display = "flex";
    document.querySelector(".retention").style.display = "none";
    document.querySelector(".retentionheader").style.color = "gray";
    document.querySelector(".salesheader").style.color = "black";
  }
}
