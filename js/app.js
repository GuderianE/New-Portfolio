const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");
const hidden = document.querySelector(".hidden");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navList.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle('fade');
    })
});

// let body = document.querySelector(".wrapper");

// body.addEventListener("wheel", () => {
//     let winScrollby = window.scrollBy(0, window.innerWidth);
//     this.style.backgroundPositionX = winScrollby + "px";
//     console.log(winScrollby);
// })