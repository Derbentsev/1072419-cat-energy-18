var navMain = document.querySelector(".header__navigation-list");
var navButton = document.querySelector(".header__button");

navMain.classList.remove(".header__nav--nojs");

navButton.addEventListener("click", function () {
  if (navMain.classList.contains(".header__navigation-list--closed")) {
    navMain.classList.remove(".header__navigation-list--closed");
    navMain.classList.add(".header__navigation-list--opened");
  } else {
    navMain.classList.add(".header__navigation-list--closed");
    navMain.classList.remove(".header__navigation-list--opened");
  }
})
