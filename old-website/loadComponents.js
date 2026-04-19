function loadComponents() {
    // Load navigation
    fetch('/assets/nav.html')
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
                        <a href="" class="navbar-logo" style="color: white; text-decoration: none;">
                            Capibara Collaboration
                        </a>
                    </div>
                </nav>
            `);
        });

    // Load footer
    fetch('/assets/footer.html')
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
    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'earth.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath ||
            (currentPath === '' && linkPath === 'earth.html') ||
            (currentPath === 'earth.html' && linkPath === '')) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu initialization is handled in assets/script.js
    // to avoid duplicate event listeners
}

// Start loading components
loadComponents();