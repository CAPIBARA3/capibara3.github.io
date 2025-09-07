document.addEventListener('DOMContentLoaded', function() {
    // Load components
    const componentsScript = document.createElement('script');
    componentsScript.src = './loadComponents.js';
    document.head.appendChild(componentsScript);


    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});