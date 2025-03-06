$("#user-pfp").click(function(){
  $(".modal").css("z-index", 1)
  $(".modal").css("opacity", 1)
  $("#user-pfp").css("z-index", 0)
  $("#modal-img").css("transform", "rotateY(0deg)")
})
$(".modal").click(function(e){
  if (e.target == e.currentTarget) {
    $(".modal").css("z-index", -1)
    $("#modal-img").css("transform", "rotateY(90deg)")
    $("#user-pfp").css("z-index", 1)
    $(".modal").css("opacity", 0)
  }
})