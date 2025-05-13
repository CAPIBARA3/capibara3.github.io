function toggleMobileNavState() {
    const a=document.querySelector("body");
    a.classList.toggle("nav--active")
}
function initBurger() {
    const a=document.querySelector(".burger");
    a.addEventListener("click",toggleMobileNavState)
}
initBurger();

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal features
// function openModal(modalId) {
//     document.getElementById(modalId).style.display = 'block';
// }
// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = 'none';
// }
// window.onclick = function(event) {
//     const modals = document.getElementsByClassName('modal');
//     for (let modal of modals) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }
// }

// Burger menu toggle
// const burger = document.getElementById('burger');
// const nav = document.getElementById('nav');
// burger.addEventListener('click', () => {
//     document.body.classList.toggle('nav--active');
//     nav.classList.toggle('nav--active');
//     burger.classList.toggle('nav--active');
// });
// burger.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//         e.preventDefault();
//         burger.click();
//     }
// });

// FAQ toggle
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            // Close all answers before opening the selected one
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-toggle").forEach(toggle => toggle.innerHTML = "&#x25BC;");

            if (!isOpen) {
                answer.style.display = "block";
                question.querySelector(".faq-toggle").innerHTML = "&#x25B2;"; // Change icon to up arrow
            }
        });
    });
});