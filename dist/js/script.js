// const htmlmin = require("gulp-htmlmin");

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

$(document).ready(function() {
	var userAgent = navigator.userAgent.toLowerCase();
	
	var Mozila = /firefox/.test(userAgent);
	var Chrome = /chrome/.test(userAgent);
	var Safari = /safari/.test(userAgent);
	var Opera  = /opera/.test(userAgent);
	
	var InternetExplorer = false;
	if((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent))
		InternetExplorer = true;
});