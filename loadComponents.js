function loadComponents() {
    // Load navigation
    fetch('./nav.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const navElement = doc.querySelector('nav');

            if (navElement) {
                document.body.insertAdjacentHTML('afterbegin', navElement.outerHTML);
                initNavbar();
                console.log('Navigation loaded successfully');
            }
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            // Fallback navigation
            document.body.insertAdjacentHTML('afterbegin', `
                <nav class="navbar" style="background: var(--header-gradient); padding: 1rem;">
                    <div class="navbar-container">
                        <a href="./" class="navbar-logo" style="color: white; text-decoration: none;">
                            Capibara Collaboration
                        </a>
                    </div>
                </nav>
            `);
        });

    // Load footer
    fetch('./footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const footerElement = doc.querySelector('footer');

            if (footerElement) {
                document.body.insertAdjacentHTML('beforeend', footerElement.outerHTML);
                console.log('Footer loaded successfully');
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback footer
            document.body.insertAdjacentHTML('beforeend', `
                <footer style="background: var(--dark-bg); color: white; padding: 2rem; text-align: center;">
                    <p>&copy; ${new Date().getFullYear()} Capibara Collaboration</p>
                </footer>
            `);
        });
}

function initNavbar() {
    // Mobile menu toggle
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }

    // Dropdown functionality
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const menu = toggle.parentElement.querySelector('.dropdown-menu');
            if (menu) menu.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath ||
            (currentPath === '' && linkPath === 'index.html') ||
            (currentPath === 'index.html' && linkPath === '')) {
            link.classList.add('active');
        }
    });
}

// Start loading components
loadComponents();