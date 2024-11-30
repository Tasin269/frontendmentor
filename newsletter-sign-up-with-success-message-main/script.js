let form = document.getElementById("form")
let emailBox = document.getElementById("email")
let errMsg = document.getElementById("error_msg")
let tomato = "hsl(4, 100%, 67%)"
let tomatoLight = "hsl(4, 100%, 67%, 0.3)"
let timeEvent

form.addEventListener("submit", function(e){
  e.preventDefault()
  let emailData = emailBox.value
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(emailData)) {
    clearTimeout(timeEvent)
    errMsg.style.display = "block"
    emailBox.style.borderColor = tomato
    emailBox.style.color = tomato
    emailBox.style.background = tomatoLight
    timeEvent = setTimeout(function() {
      errMsg.style.display = ""
      emailBox.style.borderColor = ""
      emailBox.style.color = ""
      emailBox.style.background = ""
    }, 5000);
  } else {
    window.location.href = "./successMsg.html"
  }
})