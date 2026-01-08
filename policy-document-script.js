// Policy Document Navigation and Functionality

document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
    setupScrollSpy();
    setupMobileMenu();
});

// Generate hierarchical collapsible navigation from document headings
function generateNavigation() {
    const sidebarNav = document.getElementById('sidebarNav');
    const mainContent = document.querySelector('.document-content');

    if (!sidebarNav) return;

    let navHTML = '';

    // Get document content sections (h2.section-title)
    if (mainContent) {
        const sections = mainContent.querySelectorAll('.section');

        sections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = section.querySelector('.section-title');

            if (sectionTitle && sectionId) {
                const sectionText = sectionTitle.textContent;

                // Get all subsections within this section
                const subsections = section.querySelectorAll('h3.subsection-title, h4.sub-subsection-title, h5.sub-sub-subsection-title');

                if (subsections.length > 0) {
                    // Section with subsections - make it collapsible
                    navHTML += `
                        <div class="nav-section">
                            <div class="nav-section-header" data-section="${sectionId}">
                                <span>${sectionText}</span>
                                <i class="fas fa-chevron-down nav-section-toggle"></i>
                            </div>
                            <div class="nav-subsections">
                    `;

                    // Add subsections
                    subsections.forEach(subsection => {
                        const subsectionId = subsection.parentElement.id || subsection.id;
                        if (subsectionId) {
                            const text = subsection.textContent;
                            let linkClass = 'nav-link';

                            if (subsection.classList.contains('subsection-title')) {
                                linkClass = 'nav-link sub-link';
                            } else if (subsection.classList.contains('sub-subsection-title')) {
                                linkClass = 'nav-link sub-sub-link';
                            } else if (subsection.classList.contains('sub-sub-subsection-title')) {
                                linkClass = 'nav-link sub-sub-sub-link';
                            }

                            navHTML += `
                                <a href="#${subsectionId}" class="${linkClass}" data-section="${subsectionId}">
                                    ${text}
                                </a>
                            `;
                        }
                    });

                    navHTML += `
                            </div>
                        </div>
                    `;
                } else {
                    // Section without subsections - regular link
                    navHTML += `
                        <div class="nav-section">
                            <a href="#${sectionId}" class="nav-section-header" data-section="${sectionId}">
                                <span>${sectionText}</span>
                            </a>
                        </div>
                    `;
                }
            }
        });
    }

    // Add Supporting Documents / Related Documents section
    const linkedDocs = document.querySelector('.linked-documents');
    if (linkedDocs) {
        const linkedDocsId = linkedDocs.id || 'related-documents';
        linkedDocs.id = linkedDocsId; // Ensure it has an ID

        const linkedDocsTitle = linkedDocs.querySelector('.section-heading');
        const title = linkedDocsTitle ? linkedDocsTitle.textContent.trim() : 'Related Documents';

        navHTML += `
            <div class="nav-section">
                <a href="#${linkedDocsId}" class="nav-section-header" data-section="${linkedDocsId}">
                    <span>${title}</span>
                </a>
            </div>
        `;
    }

    // Add Version History section
    const versionHistory = document.querySelector('.version-history');
    if (versionHistory) {
        const versionHistoryId = versionHistory.id || 'version-history';
        versionHistory.id = versionHistoryId; // Ensure it has an ID

        const versionHistoryTitle = versionHistory.querySelector('.section-heading');
        const title = versionHistoryTitle ? versionHistoryTitle.textContent.trim() : 'Version History';

        navHTML += `
            <div class="nav-section">
                <a href="#${versionHistoryId}" class="nav-section-header" data-section="${versionHistoryId}">
                    <span>${title}</span>
                </a>
            </div>
        `;
    }

    sidebarNav.innerHTML = navHTML;

    // Setup click handlers
    setupSmoothScrolling();
    setupCollapsibleSections();
}

// Setup collapsible section functionality
function setupCollapsibleSections() {
    const sectionHeaders = document.querySelectorAll('.nav-section-header');

    sectionHeaders.forEach(header => {
        // Only add collapse functionality if it has subsections
        const parentSection = header.parentElement;
        const subsections = parentSection.querySelector('.nav-subsections');

        if (subsections) {
            header.addEventListener('click', function(e) {
                e.preventDefault();

                // Toggle collapsed state
                this.classList.toggle('collapsed');
                subsections.classList.toggle('collapsed');
            });
        }
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .nav-section-header[href]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href')?.substring(1) || this.getAttribute('data-section');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');

                // If this is a section header with subsections, expand it
                const parentSection = this.parentElement;
                const subsections = parentSection.querySelector('.nav-subsections');
                if (subsections && this.classList.contains('collapsed')) {
                    this.classList.remove('collapsed');
                    subsections.classList.remove('collapsed');
                }

                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    const menuBtn = document.getElementById('mobileMenuBtn');
                    if (menuBtn) {
                        const icon = menuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });
}

// Setup scroll spy for active navigation highlighting
function setupScrollSpy() {
    const sections = document.querySelectorAll('.section, .linked-documents, .version-history, [id]');
    const navLinks = document.querySelectorAll('.nav-link, .nav-section-header');

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
                const activeLink = document.querySelector(`.nav-link[data-section="${id}"], .nav-section-header[data-section="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');

                    // If it's a subsection link, make sure parent section is expanded
                    if (activeLink.classList.contains('nav-link')) {
                        const parentSection = activeLink.closest('.nav-section');
                        if (parentSection) {
                            const header = parentSection.querySelector('.nav-section-header');
                            const subsections = parentSection.querySelector('.nav-subsections');
                            if (header && subsections && header.classList.contains('collapsed')) {
                                header.classList.remove('collapsed');
                                subsections.classList.remove('collapsed');
                            }
                        }
                    }
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
    // Expand all sections by default on page load
    const sectionHeaders = document.querySelectorAll('.nav-section-header');
    sectionHeaders.forEach(header => {
        const subsections = header.parentElement.querySelector('.nav-subsections');
        if (subsections) {
            // Start expanded
            header.classList.remove('collapsed');
            subsections.classList.remove('collapsed');
        }
    });

    // Set first nav link or section as active by default
    const firstNavElement = document.querySelector('.nav-link, .nav-section-header');
    if (firstNavElement) {
        firstNavElement.classList.add('active');
    }
});
