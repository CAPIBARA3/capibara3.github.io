const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuOffset = menu.offsetTop; // Get the menu's initial offset from the top of the page

    window.addEventListener("scroll", () => {
        if (window.scrollY >= menuOffset) {
            menu.style.position = "fixed";
            menu.style.top = "0"; // Fix it to the top of the viewport
        } else {
            menu.style.position = "relative";
        }
    });
});