let body = $("body")
let button = $("#theme-toggler")
let root = $("[data-theme]")
let img = $("#theme-toggler > img")
const mediaQueryList = matchMedia("(prefers-color-scheme: dark)")

// Theme toggler function
function themeChanger(theme) {
  root.attr("data-theme", theme)
  
  button.css("transform", "translateY(20px)")
  button.css("opacity", "0")
  setTimeout(function() {
    button.css("transform", "translateY(0)")
    button.css("opacity", "1")
  }, 300);
  
  if (theme === "dark") {
    img.attr("src", "./images/sun.png")
  } else {
    img.attr("src", "./images/moon.png")
  }
}

// theme toggler button
button.click(function(){
  let theme = root.attr("data-theme") == "dark" ? "light" : "dark"
  themeChanger(theme)
  localStorage.setItem("theme", theme)
})


// theme setter based on system settings
mediaQueryList.addListener(systemThemePrefChecker)
systemThemePrefChecker()
function systemThemePrefChecker() {
  if (!localStorage.getItem("theme")) {
    let theme = mediaQueryList.matches ? "dark" : "light"
    themeChanger(theme)
  } else {
    let theme = localStorage.getItem("theme")
    themeChanger(theme)
  }
}

