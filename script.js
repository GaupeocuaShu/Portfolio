


const menu = document.querySelector(".icon-bar");
const navbar = document.querySelector("nav");
let isShow = false;
menu.addEventListener('click', function () {
    if (!isShow) {
        navbar.style.left = "0";
        menu.style.transform = "rotate(90deg)";
    }
    else {
        navbar.style.left = "-100%";
        menu.style.transform = "rotate(0deg)";

    }
    isShow = !isShow;
})