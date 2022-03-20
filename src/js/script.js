const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");

burger.addEventListener("click", function(){
    menu.classList.add("menu_active");
});

close.addEventListener("click", function(){
    menu.classList.remove("menu_active");
});

const counter = document.querySelectorAll(".skills__progress-counter");
const line = document.querySelectorAll(".skills__progress-bar span");

counter.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
});
