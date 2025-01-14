$("form").submit(function(e){
  e.preventDefault()
  let error_msgs = $(".error-msg")
  let inputElm = $("input[type=text], input[type=radio], textarea, input[type=checkbox]")
  
  for (let i = 0; i < error_msgs.length; i++) {
    $(error_msgs[i]).css("height", "0")
  }
  
  let formOk = true
  
  for (let x of inputElm) {
    switch (true) {
      case /email/g.test(x.name):
        if (!(/.*@.*\.com$/g.test($(x).val()))) {
          $(x).next().css("height", "auto")
          formOk = false
        }
        break;
      case /text/g.test(x.type):
        if ($(x).val() === "") {
          $(x).next().css("height", "auto")
          formOk = false
        }
        break;
      case /radio/g.test(x.type):
        let result = [inputElm[3], inputElm[4]].some((x) => {
          return $(x).prop("checked")
        })
        if (!result) {
          $(error_msgs[3]).css("height", "auto")
          formOk = false
        }
        break;
      default:
        if (!($(x).prop("checked"))) {
          $(error_msgs[5]).css("height", "auto")
          formOk = false
        }
    }
  }
  
  if (formOk) {
    $(".success-msg").css("opacity", "1")
    e.target.reset()
    setTimeout(function() {
      $(".success-msg").css("opacity", "0")
    }, 3000);
  }
})