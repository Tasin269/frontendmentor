// mobile navbar logic
$("#menu-btn").click(function(){
  $("#mobile-nav").css("left", "0%")
  $("#black-overlay").css("z-index", "99")
  $("#black-overlay").css("opacity", "1")
})
$("#menu-close-btn").click(function(){
  $("#mobile-nav").css("left", "-100%")
  $("#black-overlay").css("opacity", "0")
  $("#black-overlay").css("z-index", "-1")
})
$("#black-overlay").click(function(){
  $("#mobile-nav").css("left", "-100%")
  $("#black-overlay").css("opacity", "0")
  $("#black-overlay").css("z-index", "-1")
})

// main hero image navigation logic
$("#next-btn").click(function(){
  $("#block-overlay").css("z-index", "1")
  
  let value = parseInt(parseFloat($("#layer-2").css("right")) / $("#layer-2").innerWidth() * 100) + 100
  value = value == 400 ? 0 : value
  
  $("#layer-2").css("right", `${value}%`)
  setTimeout(function() {
    $("#block-overlay").css("z-index", "-1")
  }, 550);
})
$("#previous-btn").click(function(){
  $("#block-overlay").css("z-index", "1")
  
  let value = parseInt(parseFloat($("#layer-2").css("right")) / $("#layer-2").innerWidth() * 100) - 100
  value = value == -100 ? 300 : value
  
  $("#layer-2").css("right", `${value}%`)
  setTimeout(function() {
    $("#block-overlay").css("z-index", "-1")
  }, 550);
})

// image slider logic
$(".image-slider div").click(function(e){
  if (e.target.src) {
    let value = e.target.src.replace(/.*product-([1-4]).*/, "$1") * 100 - 100
    $("#layer-2").css("transition", `none`)
    $("#layer-2").css("right", `${value}%`)
    setTimeout(function() {
      $("#layer-2").css("transition", ``)
    }, 10);
    
    $(".active").removeClass("active")
    $(e.currentTarget).addClass("active")
  }
})

// items counter logic
$("#plus-btn").click(function(){
  let value = parseInt($("#show-counter").text())
  $("#show-counter").text(value + 1)
})
$("#minus-btn").click(function(){
  let value = parseInt($("#show-counter").text())
  value = value - 1 === -1 ? 0 : value - 1
  $("#show-counter").text(value)
})

// add to cart logic
$("#add-to-cart-btn").click(function(){
  let newValue = parseInt($("#show-counter").text())
  let oldValue = parseInt($("#cart-number").text())
  let totalValue = oldValue + newValue
  if (totalValue !== 0) {
    $("#cart-number").text(totalValue)
    $("#empty-cart-btn").hide()
    $("#filled-cart-btn").show()
    $("#show-counter").text("0")
    $("#empty-msg").css("opacity", "0")
    $("#count").text(totalValue)
    $("#total-price").text(`$${totalValue * 125}.00`)
  }
})

// cart container logic
$("#empty-cart-btn").click(function(){
  $("#empty-msg").css("opacity", "1")
  $("#empty-msg").css("z-index", "1")
  if ($("#cart-container").css("opacity") == "0")
  {
    $("#cart-container").css("z-index", "1")
    $("#cart-container").css("opacity", "1")
  } else {
    $("#cart-container").css("opacity", "0")
    $("#cart-container").css("z-index", "-1")
  }
})
$("#filled-cart-btn").click(function(){
  $("#empty-msg").css("opacity", "0")
  $("#empty-msg").css("z-index", "-1")
  if ($("#cart-container").css("opacity") == "0")
  {
    $("#cart-container").css("z-index", "1")
    $("#cart-container").css("opacity", "1")
  } else {
    $("#cart-container").css("opacity", "0")
    $("#cart-container").css("z-index", "-1")
  }
})
$("#delete-btn").click(function(){
  $("#empty-msg").css("opacity", "1")
  $("#empty-msg").css("z-index", "0")
  $("#cart-number").text("0")
  $("#empty-cart-btn").show()
  $("#filled-cart-btn").hide()
  console.log(1)
})
