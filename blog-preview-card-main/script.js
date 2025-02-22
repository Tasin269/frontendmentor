document.addEventListener( "DOMContentLoaded", () => {
   const wrapper = document.querySelectorAll( ".description" )
   const options = {
     ellipsis: "\u2026 ",
     truncate: "word",
     keep: "a",
     watch: "window",
   };
   
   const option_one = {height: 100}
   Object.assign(option_one, options)
   let dot_one = new Dotdotdot( wrapper[0], option_one );
   dot_one.API.truncate()
   dot_one.API.watch()
   
   const option_two = {height: 120}
   Object.assign(option_two, options)
  if (matchMedia("(max-width: 340px)").matches) {
    option_two.height = 160
  }
   let dot_two = new Dotdotdot( wrapper[1], option_two );
   dot_two.API.truncate()
   dot_two.API.watch()
});

let isCardOne = true
$("button").click(function(){
  if (isCardOne)
  {
    $("body").css("animation", "firstCardBgAnim 1s forwards")
    $(".card-container").css("transform", "rotateY(180deg)")
    $("button").css("color", "#000")
    $("button").css("background-color", "var(--button-color-two)")
    $("button").text("Previous blog")
    isCardOne = false
  } else {
    $(".card-container").css("transform", "rotateY(0deg)")
    $("body").css("animation", "secondCardBgAnim 1s forwards")
    $("button").css("background-color", "var(--button-color-one)")
    $("button").css("color", "#fff")
    $("button").text("Next blog")
    isCardOne = true
  }
})