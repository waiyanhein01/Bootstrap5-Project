//loading
window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none"
})

// nav-animation
const wayPoint = document.querySelector(".waypoint")
var waypoint = new Waypoint({
  element: document.getElementById('services'),
  handler: function (direction) {
    if (direction === "down") {
      wayPoint.classList.add("nav-bar", "shadow", "animate__fadeInDown")
    } else {
      wayPoint.classList.remove("nav-bar", "shadow", "animate__fadeInDown")
    }
  },
  offset: '5%'
})

//  up icon
const icon = document.querySelector(".icon")
var waypoint = new Waypoint({
  element: document.getElementById('contact'),
  handler: function (direction) {
    if (direction === "down") {
      icon.classList.add("arrow", "animate__bounce")
    } else {
      icon.classList.remove("arrow", "animate__bounce")
    }
  },
  offset: '5%'
})

// Theme
const toggleB = document.getElementById("toggleB")

const changeThemeToDark = () => {
  document.documentElement.setAttribute('data-theme', "dark")
  localStorage.setItem("data-theme", "dark")
}

const changeThemeToLight = () => {
  document.documentElement.setAttribute('data-theme', "light")
  localStorage.setItem("data-theme", "light")
}

toggleB.addEventListener("change", () => {
  const theme = localStorage.getItem("data-theme", "dark")
  if (theme === "dark") {
    changeThemeToLight()
  } else {
    changeThemeToDark()
  }
})

const theme = localStorage.getItem("data-theme", "dark")
if (theme === "dark") {
  changeThemeToDark()
  toggleB.setAttribute("checked", "checked")
} else {
  changeThemeToLight()
}

// Menu Icon
const menuIcon = document.querySelector(".menu-icon")
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("show")
})

// scroll reveal
ScrollReveal().reveal('.scrollstart', {
  delay: 200,
  origin: 'top',
  interval: 200,
  distance: '100px',
  reset: 'true'
});

ScrollReveal().reveal('.scrollend', {
  delay: 200,
  origin: 'bottom',
  interval: 200,
  distance: '100px',
  reset: 'true'
});