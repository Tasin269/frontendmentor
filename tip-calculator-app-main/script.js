let input_number_fields = document.querySelectorAll("input[type='number']")
let input_radio_fields = document.querySelectorAll("input[type='radio']")
let fixedTipElms = document.querySelectorAll("input[name='tip']")
let resetBtn = document.querySelector("input[type='reset']")
let form = document.querySelector("form")
let tip_amount_elm = document.getElementById("tip-amount")
let error_msg_elm = document.getElementById("error-msg")
let total_elm = document.getElementById("total")
let tip


function input_checker(e) {
  let bill = input_number_fields[0].value
  let people = input_number_fields[2].value
  if (
    bill !== "" &&
    tip !== "" &&
    people !== ""
  ) {
    let total_without_tip = Number(bill) / Number(people)
    let tip_in_doller = total_without_tip * (Number(tip) / 100)
    let total = total_without_tip + tip_in_doller
    
    tip_amount_elm.innerHTML = "$" + tip_in_doller.toFixed(2)
    total_elm.innerHTML = "$" + total.toFixed(2)
  }
  if (bill || tip || people) {
    resetBtn.classList.add("reset-available")
  }
  if (people === "0") {
    error_msg_elm.style.display = "block"
    input_number_fields[2].style.outline = "none"
    input_number_fields[2].style.border = "solid 2px red"
    form.reset()
  }
}

function tip_checker(e) {
  if (e.target.id === "custom") {
    for (let x of fixedTipElms) {
      x.checked = false
    }
    tip = String(Math.abs(Number(e.target.value)))
    e.target.value = tip
  }
  if (e.target.name === "tip") {
    input_number_fields[1].value = ""
    tip = String(Number(e.target.id.slice(3)))
  }
}

for (let x of input_number_fields) {
  x.addEventListener("input", tip_checker)
  x.addEventListener("input", input_checker)
}
for (let x of input_radio_fields) {
  x.addEventListener("input", tip_checker)
  x.addEventListener("change", input_checker)
}
resetBtn.addEventListener("click", function(){
  tip = null
  resetBtn.classList.remove("reset-available")
  tip_amount_elm.innerHTML = "$0.00"
  total_elm.innerHTML = "$0.00"
  error_msg_elm.style.display = ""
  input_number_fields[2].style.outline = ""
  input_number_fields[2].style.border = ""
})