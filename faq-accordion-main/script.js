$(".first").find(".icon").toggleClass("spin")
$(".first").find("img").toggleClass("opacity")
$(".first").find(".answer").toggleClass("height")

$(".item").click(function(){
  $(".item").find(".spin").removeClass("spin")
  $(".item").find(".opacity").removeClass("opacity")
  $(".item").find(".height").removeClass("height")
  $(this).find(".icon").toggleClass("spin")
  $(this).find("img").toggleClass("opacity")
  $(this).find(".answer").toggleClass("height")
})

