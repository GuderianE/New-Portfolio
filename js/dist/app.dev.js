"use strict";

var nav = document.querySelector("nav");
var navList = document.querySelector(".nav-list");
var links = document.querySelectorAll(".nav-list li");
var hidden = document.querySelector(".hidden");
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  navList.classList.toggle('open');
  links.forEach(function (link) {
    link.classList.toggle('fade');
  });
}); // let body = document.querySelector(".wrapper");
// body.addEventListener("wheel", () => {
//     let winScrollby = window.scrollBy(0, window.innerWidth);
//     this.style.backgroundPositionX = winScrollby + "px";
//     console.log(winScrollby);
// })