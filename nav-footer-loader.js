// Load navigation and footer components
(function() {
    // Function to load HTML content into a container
    async function loadComponent(url, containerId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            const html = await response.text();
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
            }
            return true;
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
            return false;
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

    // Load components when DOM is ready
    async function init() {
        // Load navigation and footer
        await loadComponent('nav.html', 'nav-container');
        await loadComponent('footer.html', 'footer-container');

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
