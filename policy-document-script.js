// Policy Document Navigation and Functionality

document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
    setupScrollSpy();
    setupMobileMenu();
});

// Generate navigation from document headings
function generateNavigation() {
    const sidebarNav = document.getElementById('sidebarNav');
    const mainContent = document.querySelector('.document-content');

    if (!sidebarNav || !mainContent) return;

    // Get all headings (h2, h3, h4) from the document content
    const headings = mainContent.querySelectorAll('h2.section-title, h3.subsection-title, h4.sub-subsection-title');

    let navHTML = '';

    headings.forEach(heading => {
        const text = heading.textContent;
        const id = heading.parentElement.id || heading.id;

        if (!id) return; // Skip if no ID

        let linkClass = 'nav-link';

        // Determine link class based on heading type
        if (heading.classList.contains('section-title')) {
            linkClass = 'nav-link';
        } else if (heading.classList.contains('subsection-title')) {
            linkClass = 'nav-link sub-link';
        } else if (heading.classList.contains('sub-subsection-title')) {
            linkClass = 'nav-link sub-sub-link';
        }

        navHTML += `
            <div class="nav-section">
                <a href="#${id}" class="${linkClass}" data-section="${id}">
                    ${text}
                </a>
            </div>
        `;
    });

    sidebarNav.innerHTML = navHTML;

    // Setup click handlers for smooth scrolling
    setupSmoothScrolling();
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');

                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    });
}

// Setup scroll spy for active navigation highlighting
function setupScrollSpy() {
    const sections = document.querySelectorAll('.section, [id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav-link[data-section="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });
}

// Setup mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');

    if (!mobileMenuBtn || !sidebar) return;

    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');

        // Change icon
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
}

// Highlight active section on initial load
window.addEventListener('load', function() {
    // Set first nav link as active by default
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
});
