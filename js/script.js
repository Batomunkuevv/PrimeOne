function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let header__burger = document.querySelector(".header__burger");
let header_menu = document.querySelector(".header__menu");
let header = document.querySelector(".header");
let header__list = document.querySelector(".header__list");

header__burger.onclick = function () {
  header__burger.classList.toggle("active");
  header_menu.classList.toggle("active");
  header.classList.toggle("active");
};

header__list.onclick = function () {
  header__list.classList.remove("active");
  header.classList.remove("active");
};