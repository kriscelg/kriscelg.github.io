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
                    <a href="about-us.html" class="nav-link">DIVISION INFO</a>
                    <div class="dropdown-menu">
                        <a href="about-us.html">About Us</a>
                        <a href="about-us.html#tes">TES</a>
                        <a href="about-us.html#am">AM</a>
                        <a href="about-us.html#bits">BITS</a>
                        <a href="about-us.html#elmp">ELMP</a>
                        <a href="about-us.html#sib">SIB</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="documents.html" class="nav-link">DOCUMENTS</a>
                    <div class="dropdown-menu">
                        <a href="policy-documents.html">Policy Documents</a>
                        <a href="jobaids-guidelines.html">Job Aids & Guidelines</a>
                        <a href="forms-templates.html">Forms & Templates</a>
                        <a href="financial-operations.html">Financial Operations</a>
                        <a href="resources.html">Resources</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="reporting.html" class="nav-link" data-page="reporting">REPORTING</a>
                    <div class="dropdown-menu">
                        <a href="tes-reporting.html">TES Reports and Dashboards</a>
                        <a href="#">SIB Reports and Dashboards</a>
                        <a href="#">AM Reports and Dashboards</a>
                        <a href="#">BITS Reports and Dashboards</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="#" class="nav-link">TRAINING & DEVELOPMENT</a>
                    <div class="dropdown-menu">
                        <a href="videos-presentations.html">TES Videos and Presentations</a>
                        <a href="#">AM Videos and Presentations</a>
                        <a href="#">BITS Videos and Presentations</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="communications.html" class="nav-link" data-page="communications">COMMUNICATIONS</a>
                    <div class="dropdown-menu">
                        <a href="bulletins-newsletters.html">Bulletins</a>
                        <a href="events.html">Events</a>
                        <a href="memos.html">Memos</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="contact-resources.html" class="nav-link">CONTACT & RESOURCES</a>
                    <div class="dropdown-menu">
                        <a href="contact-resources.html#sib-support">SIB Support</a>
                        <a href="contact-resources.html#key-contacts">Key Contacts</a>
                        <a href="contact-resources.html#staff-resources">Staff Resources</a>
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
                        <li><a href="about-us.html#tes">TES</a></li>
                        <li><a href="about-us.html#am">AM</a></li>
                        <li><a href="about-us.html#bits">BITS</a></li>
                        <li><a href="about-us.html#elmp">ELMP</a></li>
                        <li><a href="about-us.html#sib">SIB</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>DOCUMENTS</h4>
                    <ul>
                        <li><a href="policy-documents.html">Policy Documents</a></li>
                        <li><a href="jobaids-guidelines.html">Job Aids & Guidelines</a></li>
                        <li><a href="forms-templates.html">Forms & Templates</a></li>
                        <li><a href="financial-operations.html">Financial Operations</a></li>

                        <li><a href="resources.html">Resources</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>REPORTING</h4>
                    <ul>
                        <li><a href="tes-reporting.html">TES Reports and Dashboards</a></li>
                        <li><a href="#">SIB Reports and Dashboards</a></li>
                        <li><a href="#">AM Reports and Dashboards</a></li>
                        <li><a href="#">BITS Reports and Dashboards</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>TRAINING</h4>
                    <ul>
                        <li><a href="videos-presentations.html">TES Videos and Presentations</a></li>
                        <li><a href="#">AM Videos and Presentations</a></li>
                        <li><a href="#">BITS Videos and Presentations</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>COMMUNICATIONS</h4>
                    <ul>
                        <li><a href="bulletins-newsletters.html">Bulletins</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="memos.html">Memos</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>CONTACT & RESOURCES</h4>
                    <ul>
                        <li><a href="contact-resources.html#sib-support">SIB Support</a></li>
                        <li><a href="contact-resources.html#key-contacts">Key Contacts</a></li>
                        <li><a href="contact-resources.html#staff-resources">Staff Resources</a></li>
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

                    <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-x"></i></a>
                    <a href="https://www.intranet.mbgov.ca/editnr/index.html" class="social-link" aria-label="BMTJC"><i class="fa-regular fa-building"></i></a>

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

    // Inject CSS for predictive search suggestions
    function injectSuggestionsCSS() {
        if (document.getElementById('nav-search-suggestions-css')) return;
        const style = document.createElement('style');
        style.id = 'nav-search-suggestions-css';
        style.textContent = `
            .nav-search-suggestions {
                margin-top: 8px;
                border-radius: 10px;
                overflow: hidden;
                background: #fff;
                box-shadow: 0 4px 20px rgba(0,0,0,0.12);
                max-height: 0;
                transition: max-height 0.2s ease;
                display: flex;
                flex-direction: column;
            }
            .nav-search-suggestions.has-results { max-height: 380px; }
            .nav-suggestion-scroll {
                overflow-y: auto;
                flex: 1 1 auto;
                min-height: 0;
            }
            .nav-suggestion-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 11px 16px;
                cursor: pointer;
                border-bottom: 1px solid #f1f5f9;
                text-decoration: none;
                color: inherit;
                transition: background 0.15s;
            }
            .nav-suggestion-item:last-child { border-bottom: none; }
            .nav-suggestion-item:hover,
            .nav-suggestion-item.highlighted {
                background: #f0fafa;
                border-left: 3px solid #0d5f5f;
                padding-left: 13px;
            }
            .nav-suggestion-icon {
                width: 32px; height: 32px; border-radius: 8px;
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0; font-size: 13px;
            }
            .nav-suggestion-icon.ic-doc        { background:#e0f2f1; color:#0d5f5f; }
            .nav-suggestion-icon.ic-bulletin   { background:#fef9c3; color:#92400e; }
            .nav-suggestion-icon.ic-memo       { background:#ede9fe; color:#5b21b6; }
            .nav-suggestion-icon.ic-event      { background:#dbeafe; color:#1d4ed8; }
            .nav-suggestion-icon.ic-video      { background:#fee2e2; color:#b91c1c; }
            .nav-suggestion-icon.ic-present    { background:#ffedd5; color:#c2410c; }
            .nav-suggestion-icon.ic-dashboard  { background:#e0e7ff; color:#3730a3; }
            .nav-suggestion-icon.ic-orgchart   { background:#dcfce7; color:#15803d; }
            .nav-suggestion-text { flex: 1; min-width: 0; }
            .nav-suggestion-title {
                font-size: 13px; font-weight: 600; color: #1e293b;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .nav-suggestion-cat {
                font-size: 11px; color: #64748b; margin-top: 1px;
            }
            .nav-suggestion-arrow { color: #94a3b8; font-size: 11px; }
            .nav-search-see-all {
                display: flex; align-items: center; justify-content: center; gap: 6px;
                padding: 10px 16px; font-size: 12px; font-weight: 600;
                color: #0d5f5f; cursor: pointer; background: #f0fafa;
                border-top: 1px solid #e2e8f0;
                flex-shrink: 0;
            }
            .nav-search-see-all:hover { background: #cceeee; }
        `;
        document.head.appendChild(style);
    }

    // Function to initialize search functionality
    function initializeSearch() {
        const searchBtn = document.querySelector('.search-btn');
        const searchOverlay = document.getElementById('searchOverlay');
        const closeSearch = document.getElementById('closeSearch');
        const searchInput = document.getElementById('searchInput');
        const searchSubmit = document.querySelector('.search-submit');

        if (!searchBtn || !searchOverlay) return;

        injectSuggestionsCSS();

        // Inject suggestions container below the input wrapper
        const inputWrapper = searchOverlay.querySelector('.search-input-wrapper');
        const suggestionsEl = document.createElement('div');
        suggestionsEl.className = 'nav-search-suggestions';
        suggestionsEl.setAttribute('role', 'listbox');
        inputWrapper.insertAdjacentElement('afterend', suggestionsEl);

        // ---- Data loading ----
        let indexReady = false;
        let searchIndex = [];
        let loadStarted = false;

        function loadScript(src) {
            return new Promise(resolve => {
                if (document.querySelector('script[src="' + src + '"]')) { resolve(); return; }
                const s = document.createElement('script');
                s.src = src; s.onload = resolve; s.onerror = resolve;
                document.head.appendChild(s);
            });
        }

        function ensureIndex() {
            if (indexReady || loadStarted) return;
            loadStarted = true;
            Promise.all([
                'documents-data.js', 'communications-data.js', 'memos-data.js',
                'events-data.js', 'videos-presentations-data.js',
                'reporting-data.js', 'about-us-data.js'
            ].map(loadScript)).then(() => {
                buildIndex();
                indexReady = true;
                // Re-render if user already typed something
                if (searchInput && searchInput.value.trim().length >= 2) {
                    renderSuggestions(searchInput.value.trim());
                }
            });
        }

        function ep(p) {
            return p ? p.split('/').map(s => encodeURIComponent(s)).join('/') : '#';
        }

        function buildIndex() {
            searchIndex = [];
            const push = (title, url, category, iconClass, icon, tags) => {
                if (title) searchIndex.push({ title, url, category, iconClass, icon, tags: tags || [] });
            };

            // Documents
            (typeof POLICY_DOCUMENTS      !== 'undefined' ? POLICY_DOCUMENTS      : []).forEach(d => push(d.title, ep(d.fileName), 'Policy Doc',   'ic-doc',       'fa-file-alt',       d.tags));
            (typeof PROCEDURES_GUIDELINES !== 'undefined' ? PROCEDURES_GUIDELINES : []).forEach(d => push(d.title, ep(d.fileName), 'Job Aid',       'ic-doc',       'fa-tools',          d.tags));
            (typeof FORMS_TEMPLATES       !== 'undefined' ? FORMS_TEMPLATES       : []).forEach(d => push(d.title, ep(d.fileName), 'Form',          'ic-doc',       'fa-file-invoice',   d.tags));
            (typeof RESOURCE_DOCS         !== 'undefined' ? RESOURCE_DOCS         : []).forEach(d => push(d.title, ep(d.fileName), 'Resource',      'ic-doc',       'fa-book',           d.tags));
            (typeof FINANCE_OPERATIONS    !== 'undefined' ? FINANCE_OPERATIONS    : []).forEach(d => push(d.title, ep(d.fileName), 'Finance',       'ic-doc',       'fa-calculator',     d.tags));

            // Bulletins
            (typeof BULLETINS !== 'undefined' ? BULLETINS : []).forEach(b =>
                push(b.subject, ep(b.fileName), 'Bulletin', 'ic-bulletin', 'fa-bullhorn', []));

            // Memos
            (typeof MEMOS !== 'undefined' ? MEMOS : []).forEach(m =>
                push(m.title, m.pdfFile ? ep(m.pdfFile) : 'memos.html', 'Memo', 'ic-memo', 'fa-envelope', m.tags));

            // Events
            (typeof EVENTS !== 'undefined' ? EVENTS : []).forEach(e =>
                push(e.title, 'events.html', 'Event', 'ic-event', 'fa-calendar-alt', []));

            // Videos
            (typeof VIDEOS !== 'undefined' ? VIDEOS : []).forEach(v =>
                push(v.title, v.videoFile ? ep(v.videoFile) : 'videos-presentations.html', 'Video', 'ic-video', 'fa-play-circle', v.tags));

            // Presentations
            (typeof PRESENTATIONS !== 'undefined' ? PRESENTATIONS : []).forEach(p =>
                push(p.title, p.pdfFile ? ep(p.pdfFile) : 'videos-presentations.html', 'Presentation', 'ic-present', 'fa-file-powerpoint', p.tags));

            // Dashboards
            (typeof POWERBI_DASHBOARDS !== 'undefined' ? POWERBI_DASHBOARDS : []).forEach(d =>
                push(d.title, 'tes-reporting.html', 'Dashboard', 'ic-dashboard', 'fa-chart-bar', []));

            // Org Charts
            (typeof ORGANIZATION_CHARTS !== 'undefined' ? ORGANIZATION_CHARTS : []).forEach(o =>
                push(o.title, o.pdfFile ? ep(o.pdfFile) : 'about-us.html', 'Org Chart', 'ic-orgchart', 'fa-sitemap', o.tags));
        }

        function getSuggestions(query) {
            const q = query.toLowerCase().trim();
            const titleHits = [], tagHits = [];
            searchIndex.forEach(item => {
                if (item.title.toLowerCase().includes(q)) titleHits.push(item);
                else if ((item.tags || []).some(t => t.toLowerCase().includes(q))) tagHits.push(item);
            });
            return [...titleHits, ...tagHits].slice(0, 7);
        }

        // ---- Rendering ----
        let highlightedIdx = -1;

        function renderSuggestions(query) {
            if (!query || query.trim().length < 2) {
                suggestionsEl.innerHTML = '';
                suggestionsEl.classList.remove('has-results');
                highlightedIdx = -1;
                return;
            }
            if (!indexReady) return;

            const results = getSuggestions(query);
            if (results.length === 0) {
                suggestionsEl.innerHTML = '';
                suggestionsEl.classList.remove('has-results');
                highlightedIdx = -1;
                return;
            }

            const isNewTab = (url) => !url.endsWith('.html') && !url.startsWith('events') && !url.startsWith('memos') && !url.startsWith('tes-') && !url.startsWith('about-') && !url.startsWith('videos-');

            suggestionsEl.innerHTML =
                `<div class="nav-suggestion-scroll">` +
                results.map((item, i) => `
                <div class="nav-suggestion-item${i === highlightedIdx ? ' highlighted' : ''}"
                     role="option" data-idx="${i}" data-url="${item.url}" data-newtab="${isNewTab(item.url)}">
                    <div class="nav-suggestion-icon ${item.iconClass}">
                        <i class="fas ${item.icon}"></i>
                    </div>
                    <div class="nav-suggestion-text">
                        <div class="nav-suggestion-title">${escapeHtml(item.title)}</div>
                        <div class="nav-suggestion-cat">${escapeHtml(item.category)}</div>
                    </div>
                    <i class="fas fa-arrow-right nav-suggestion-arrow"></i>
                </div>
            `).join('') +
                `</div>
                <div class="nav-search-see-all" data-query="${escapeHtml(query)}">
                    <i class="fas fa-search"></i> See all results for "${escapeHtml(query)}"
                </div>`;

            suggestionsEl.classList.add('has-results');

            // Item click handlers
            suggestionsEl.querySelectorAll('.nav-suggestion-item').forEach(el => {
                el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    const url = el.getAttribute('data-url');
                    const newTab = el.getAttribute('data-newtab') === 'true';
                    if (newTab) window.open(url, '_blank');
                    else window.location.href = url;
                    closeOverlay();
                });
            });

            const seeAll = suggestionsEl.querySelector('.nav-search-see-all');
            if (seeAll) {
                seeAll.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    navigateToSearch();
                });
            }
        }

        function escapeHtml(str) {
            return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        }

        function updateHighlight() {
            suggestionsEl.querySelectorAll('.nav-suggestion-item').forEach((el, i) => {
                el.classList.toggle('highlighted', i === highlightedIdx);
            });
        }

        // ---- Navigation ----
        function navigateToSearch() {
            const query = searchInput ? searchInput.value.trim() : '';
            if (query) {
                window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
            }
        }

        function closeOverlay() {
            searchOverlay.classList.remove('active');
            suggestionsEl.innerHTML = '';
            suggestionsEl.classList.remove('has-results');
            highlightedIdx = -1;
        }

        // ---- Event handlers ----
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            ensureIndex();
            setTimeout(() => { if (searchInput) searchInput.focus(); }, 300);
        });

        if (closeSearch) {
            closeSearch.addEventListener('click', closeOverlay);
        }

        if (searchSubmit) {
            searchSubmit.addEventListener('click', navigateToSearch);
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                highlightedIdx = -1;
                renderSuggestions(e.target.value.trim());
            });

            searchInput.addEventListener('keydown', (e) => {
                const items = suggestionsEl.querySelectorAll('.nav-suggestion-item');
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    highlightedIdx = Math.min(highlightedIdx + 1, items.length - 1);
                    updateHighlight();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    highlightedIdx = Math.max(highlightedIdx - 1, -1);
                    updateHighlight();
                } else if (e.key === 'Enter') {
                    if (highlightedIdx >= 0 && items[highlightedIdx]) {
                        const el = items[highlightedIdx];
                        const url = el.getAttribute('data-url');
                        const newTab = el.getAttribute('data-newtab') === 'true';
                        if (newTab) window.open(url, '_blank');
                        else window.location.href = url;
                        closeOverlay();
                    } else {
                        navigateToSearch();
                    }
                } else if (e.key === 'Escape') {
                    closeOverlay();
                }
            });
        }

        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeOverlay();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) closeOverlay();
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
