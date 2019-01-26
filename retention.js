var submit = document.querySelector("#submittwo");
var daysinmonthtwo = document.querySelector("#daysinmonthtwo");
var dayslefttwo = document.querySelector("#dayslefttwo");
var actneeded = document.querySelector("#activitiesneeded");
var currentaph = document.querySelector("#currentaph");
var reset = document.querySelector("#resettwo");
var actgoal = 64;
var hours = 8;
var actneed;

currentaph.addEventListener("change", function() {
  currentaph.textContent = currentaph.value;
  currentaph = Number(currentaph.value);
});

daysinmonthtwo.addEventListener("change", function() {
  daysinmonthtwo.textContent = daysinmonthtwo.value;
  daysinmonthtwo = Number(daysinmonthtwo.value);
});
dayslefttwo.addEventListener("change", function() {
  dayslefttwo.textContent = dayslefttwo.value;
  dayslefttwo = Number(dayslefttwo.value);
});

submit.addEventListener("click", function() {
  actneed = (
    (daysinmonthtwo * actgoal -
      currentaph * hours * (daysinmonthtwo - dayslefttwo)) /
    dayslefttwo
  ).toFixed(2);

  actneeded.textContent = actneed;
});
reset.addEventListener("click", function() {
  window.location.reload();
});
