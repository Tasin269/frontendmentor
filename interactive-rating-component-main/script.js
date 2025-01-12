let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let rating_msg = document.getElementById("rating")
let form = document.querySelector("form")
let errorMsg = document.getElementById("error")

function submit() {
  try {
    let selectedValue = document.querySelector('label:has(input[type="radio"]:checked)').innerText
    card1.style.opacity = "0"
    card2.style.opacity = "1"
    rating_msg.innerText = `You selected ${selectedValue} out of 5`
  } catch(err) {
    errorMsg.style.opacity = "1"
    setTimeout(()=>{
      errorMsg.style.opacity = "0"
    }, 4000)
  }
}

form.addEventListener("submit", submit)
