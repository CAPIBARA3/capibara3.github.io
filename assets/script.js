document.addEventListener('DOMContentLoaded', function() {
    // Load components
    const componentsScript = document.createElement('script');
    componentsScript.src = './loadComponents.js';
    document.head.appendChild(componentsScript);

    // Initialize theme with system preference awareness
    initThemeSystem();

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

function initThemeSystem() {
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
    document.body.appendChild(toggleBtn);

    // Check system preference and saved preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Set initial theme state
    function setInitialTheme() {
        if (savedTheme) {
            // Use saved preference if exists
            document.body.classList.toggle('dark-mode', savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
            toggleBtn.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        } else {
            // Fall back to system preference
            document.body.classList.toggle('dark-mode', systemPrefersDark);
            document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
            toggleBtn.innerHTML = systemPrefersDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }
    setInitialTheme();

    // Toggle theme manually
    toggleBtn.addEventListener('click', function() {
        const isDark = document.body.classList.toggle('dark-mode');
        const newTheme = isDark ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Watch for system theme changes (only when no manual preference set)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const isDark = e.matches;
            document.body.classList.toggle('dark-mode', isDark);
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    });
}