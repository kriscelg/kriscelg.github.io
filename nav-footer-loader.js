// Navigation and Footer Templates
// Update these templates to change navigation/footer across all pages

const NAV_TEMPLATE = `
<header class="main-header">
    <div class="container">
        <div class="header-content">
            <h1 class="logo">WDT Intranet</h1>
            <nav class="main-nav">
                <div class="nav-item">
                    <a href="index.html" class="nav-link" data-page="index">HOME</a>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">DIVISION INFO</a>
                    <div class="dropdown-menu">
                        <a href="about-us.html">About Us</a>
                        <a href="about-us.html#organization-charts">Organization Charts</a>
                        <a href="about-us.html#mandates">Mandates</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">DOCUMENTS</a>
                    <div class="dropdown-menu">
                        <a href="#">Policy</a>
                        <a href="#">Manuals/Directives</a>
                        <a href="#">Tools & Templates</a>
                        <a href="#">Forms & Instructions</a>
                        <a href="#">FAQ & Resources</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="reporting.html" class="nav-link" data-page="reporting">REPORTING</a>
                    <div class="dropdown-menu">
                        <a href="reporting.html">Dashboards</a>
                        <a href="#">Data Checks</a>
                        <a href="#">Analytics</a>
                        <a href="#">Reports</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">TRAINING & DEVELOPMENT</a>
                    <div class="dropdown-menu">
                        <a href="videos-presentations.html">Videos & Presentations</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link" data-page="communications">COMMUNICATIONS</a>
                    <div class="dropdown-menu">
                        <a href="communications.html">Bulletins & Newsletters</a>
                        <a href="events.html">Events</a>
                        <a href="#">Announcements</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">CONTACT</a>
                    <div class="dropdown-menu">
                        <a href="contact-resources.html">Contact & Resources</a>
                        <a href="#">Help Center</a>
                        <a href="#">Support</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
                <button class="search-btn"><i class="fas fa-search"></i></button>
            </nav>
        </div>
    </div>
</header>
`;

const FOOTER_TEMPLATE = `
<footer class="main-footer">
    <div class="footer-top">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h4>DIVISION INFO</h4>
                    <ul>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="about-us.html#organization-charts">Organization Charts</a></li>
                        <li><a href="about-us.html#mandates">Mandates</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>DOCUMENTS</h4>
                    <ul>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Manuals/Directives</a></li>
                        <li><a href="#">Tools & Templates</a></li>
                        <li><a href="#">Forms & Instructions</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>REPORTING</h4>
                    <ul>
                        <li><a href="reporting.html">Dashboards</a></li>
                        <li><a href="#">Data Checks</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>TRAINING</h4>
                    <ul>
                        <li><a href="videos-presentations.html">Videos & Presentations</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>COMMUNICATIONS</h4>
                    <ul>
                        <li><a href="communications.html">Bulletins & Newsletters</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="#">Announcements</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>SUPPORT</h4>
                    <ul>
                        <li><a href="contact-resources.html">Contact & Resources</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <div class="footer-logo">WDT Intranet</div>
                <div class="footer-info">&copy; 2025 WDT. All rights reserved.</div>
                <div class="footer-social">
                    <a href="#" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link" aria-label="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Scroll to Top Button -->
<button class="scroll-top" id="scrollTop">
    <i class="fas fa-chevron-up"></i>
</button>
`;

// Load navigation and footer components
(function() {
    // Function to load HTML content into a container
    function loadComponent(html, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
        }
    }

    // Function to highlight active page in navigation
    function setActivePage() {
        const currentPage = document.body.getAttribute('data-page');
        if (!currentPage) return;

        // Find all nav links with data-page attribute
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Function to initialize search functionality
    function initializeSearch() {
        const searchBtn = document.querySelector('.search-btn');
        const searchOverlay = document.getElementById('searchOverlay');
        const closeSearch = document.getElementById('closeSearch');
        const searchInput = document.getElementById('searchInput');

        if (!searchBtn || !searchOverlay) return;

        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 300);
        });

        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
            });
        }

        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });

        // Close search on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // Function to initialize scroll to top functionality
    function initializeScrollTop() {
        const scrollTopBtn = document.getElementById('scrollTop');
        if (!scrollTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize when DOM is ready
    function init() {
        // Load navigation and footer from templates
        loadComponent(NAV_TEMPLATE, 'nav-container');
        loadComponent(FOOTER_TEMPLATE, 'footer-container');

        // Initialize functionality after components are loaded
        setActivePage();
        initializeSearch();
        initializeScrollTop();
    }

    // Run initialization when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
