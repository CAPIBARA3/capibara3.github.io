class ThemeManager {
    constructor() {
        this.themes = ['auto', 'light', 'dark'];
        this.currentTheme = localStorage.getItem('theme') || 'auto';
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');

        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.cycleTheme());
        }

        // Listen for system theme changes when in auto mode
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.currentTheme === 'auto') {
                this.applyTheme('auto');
            }
        });
    }

    cycleTheme() {
        const currentIndex = this.themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % this.themes.length;
        this.currentTheme = this.themes[nextIndex];

        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);

        // Add animation class
        this.themeToggle.classList.add('active');
        setTimeout(() => {
            this.themeToggle.classList.remove('active');
        }, 600);
    }

    applyTheme(theme) {
        const root = document.documentElement;

        // Remove all theme attributes first
        root.removeAttribute('data-theme');

        if (theme === 'auto') {
            // Let CSS media query handle it
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        } else {
            root.setAttribute('data-theme', theme);
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }

        this.updateThemeDisplay(theme);
    }

    updateThemeDisplay(theme) {
        const icons = {
            auto: 'fas fa-adjust',
            light: 'fas fa-sun',
            dark: 'fas fa-moon'
        };

        this.themeIcon.className = icons[theme];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load components
    const componentsScript = document.createElement('script');
    componentsScript.src = './loadComponents.js';
    document.head.appendChild(componentsScript);

    // Initialize theme with system preference awareness
    const themeManager = new ThemeManager();

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