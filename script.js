const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});


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