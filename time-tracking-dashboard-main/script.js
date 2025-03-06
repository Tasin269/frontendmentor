let ctimeElems = document.getElementsByClassName("ctime");
let ltimeElems = document.getElementsByClassName("ltime");
let buttons = document.getElementsByClassName("buttons");
let selectedElm = document.getElementsByClassName("selected")[0];

function timeShower() {
  let selectedPeriod;
  let timeframeKey;

  switch (selectedElm.innerHTML) {
    case "Daily":
      selectedPeriod = "Day";
      timeframeKey = "daily";
      break;
    case "Monthly":
      selectedPeriod = "Month";
      timeframeKey = "monthly";
      break;
    default:
      selectedPeriod = "Week";
      timeframeKey = "weekly";
  }

  fetch("./data.json")
    .then((data) => {
      if (!data.ok) console.error("Oops! Something bad happened");
      return data.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        ctimeElems[i].innerHTML = data[i].timeframes[timeframeKey].current + "hrs";
        ltimeElems[i].innerHTML = `Last ${selectedPeriod} - ` + data[i].timeframes[timeframeKey].previous + "hrs";
      }
    });
}

timeShower();

buttons[0].addEventListener("click", function (e) {
  if (
    e.target.innerText === "Daily" ||
    e.target.innerText === "Weekly" ||
    e.target.innerText === "Monthly"
  ) {
    let previousSelectedElemText = selectedElm.innerHTML
    selectedElm.classList.remove("selected");
    e.target.classList.add("selected");
    selectedElm = document.getElementsByClassName("selected")[0];
    let currentSelectedElemText = selectedElm.innerHTML
    if (previousSelectedElemText !== currentSelectedElemText) {
      for (let i = 0; i < ctimeElems.length; i++) {
        ctimeElems[i].classList.add("change")
        ltimeElems[i].classList.add("change")
      }
    }
    timeShower();
    if (previousSelectedElemText !== currentSelectedElemText) {
      setTimeout(function() {
        for (let i = 0; i < ctimeElems.length; i++) {
          ctimeElems[i].classList.remove("change")
          ltimeElems[i].classList.remove("change")
        }
      }, 200);
    }
  }
});
