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
let header__menu = document.querySelector(".header__menu");
let header__bottom = document.querySelector(".header-bottom");
let menu__list = document.querySelector(".menu__list");

header__burger.onclick = function () {
  header__burger.classList.toggle("active");
  header__menu.classList.toggle("active");
  header__bottom.classList.toggle("active");
};

menu__list.onclick = function () {
  menu__list.classList.remove("active");
  header__bottom.classList.remove("active");
};
