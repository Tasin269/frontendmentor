let shareBtnfirst = document.getElementsByClassName("share-btn")[0]
let shareSection = document.getElementById("share-section")
let shareIcon = shareBtnfirst.querySelector("img")

let updown = () => {
  if (shareSection.style.bottom.includes("0px")) {
    shareSection.style.bottom = "-100%"
    shareBtnfirst.style.backgroundColor = ""
    shareBtnfirst.querySelector("img").style.filter = ""
  } else {
    shareSection.style.bottom = "0px"
    shareBtnfirst.style.backgroundColor = "hsl(214, 17%, 51%)"
    shareBtnfirst.querySelector("img").style.filter = "brightness(1000%) saturate(0%)"
  }
}
let visibilityChanger = () => {
  if (shareSection.style.display.includes("flex") && shareSection.style.opacity.includes("1")) {
    shareSection.style.opacity = "0"
    shareSection.style.display = "none"
    shareBtnfirst.style.backgroundColor = ""
    shareBtnfirst.querySelector("img").style.filter = ""
  } else {
    shareSection.style.display = "flex"
    setTimeout(function() {
      shareSection.style.opacity = "1"
    }, 10);
    shareBtnfirst.style.backgroundColor = "hsl(214, 17%, 51%)"
    shareBtnfirst.querySelector("img").style.filter = "brightness(1000%) saturate(0%)"
  }
}

function eventlistenterAdder() {
  if (window.innerWidth <= 850) {
    shareBtnfirst.addEventListener("click", function() {
      updown()
    })
    shareSection.addEventListener("click", function() {
      updown()
    })
    document.addEventListener("click", function(event) {
      if (!shareSection.contains(event.target) && event.target !== shareBtnfirst) {
        shareSection.style.bottom = "-100%"
        shareBtnfirst.style.backgroundColor = ""
        shareBtnfirst.querySelector("img").style.filter = ""
      }
    }, true);
  } else {
    shareBtnfirst.addEventListener("click", function() {
      visibilityChanger()
    })
    shareSection.addEventListener("click", function() {
      visibilityChanger()
    })
    document.addEventListener("click", function(event) {
      if (!shareSection.contains(event.target) && event.target !== shareBtnfirst && event.target !== shareIcon) {
        shareSection.style.display = "none"
        shareSection.style.opacity = "0"
        shareBtnfirst.style.backgroundColor = ""
        shareBtnfirst.querySelector("img").style.filter = ""
      }
    }, true);
  }
}

eventlistenterAdder()

window.addEventListener("resize", eventlistenterAdder)

console.log(shareIcon)