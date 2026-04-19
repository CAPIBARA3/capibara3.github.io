document.addEventListener('DOMContentLoaded', function() {
    // Load components
    const componentsScript = document.createElement('script');
    componentsScript.src = './loadComponents.js';
    document.head.appendChild(componentsScript);

    // Initialize mobile navigation after a short delay to ensure nav is loaded
    setTimeout(initMobileNav, 100);

    // Initialize back to top button
    initBackToTop();

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

// Back to Top Button
function initBackToTop() {
    // Create button if it doesn't exist
    if (!document.querySelector('.back-to-top')) {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);

        // Show/hide on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Scroll to top on click
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Mobile Navigation Handler
function initMobileNav() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (!navbarToggle || !navbarMenu) {
        // Retry if nav not loaded yet
        setTimeout(initMobileNav, 100);
        return;
    }

    // Toggle mobile menu
    navbarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Handle dropdown clicks on mobile
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.nav-link');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // Close menu when clicking a link (not dropdown toggle)
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown .nav-link), .dropdown-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            }
        });
    });

    // Fix sticky hover states by ensuring blur on mouse leave
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseleave', function() {
            this.blur();
        });
    });
}