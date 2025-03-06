$("#menu-btn").click(function(){
  $("nav").css("right", "0vw")
  $("#menu-overlay").css("display", "block")
  setTimeout(function() {
    $("#menu-overlay").css("opacity", "0.5")
  }, 10);
})
$("#menu-btn-close").click(function(){
  $("nav").css("right", "-100vw")
  $("#menu-overlay").css("display", "none")
  setTimeout(function() {
    $("#menu-overlay").css("opacity", "0")
  }, 10);
})

