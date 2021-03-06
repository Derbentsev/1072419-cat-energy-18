var navMain = document.querySelector(".header__nav");
var navButton = document.querySelector(".header__button");

/* navMain.classList.remove("header__nav--nojs"); */
navMain.classList.remove("header__nav--opened");
navMain.classList.add("header__nav--closed");

navButton.classList.remove("header__button-nojs");

navButton.addEventListener("click", function () {
  if (navMain.classList.contains("header__nav--closed")) {
    navMain.classList.remove("header__nav--closed");
    navMain.classList.add("header__nav--opened");
  } else {
    navMain.classList.add("header__nav--closed");
    navMain.classList.remove("header__nav--opened");
  }
})
