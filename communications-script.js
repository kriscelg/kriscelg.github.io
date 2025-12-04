/**
 * WDT Intranet - Communications (Bulletins & Newsletters) Script
 */

// ========================================
// TAB SWITCHING
// ========================================

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');

        // Remove active class from all tabs and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        btn.classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Format date for display (e.g., "November 22, 2025")
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Create a communication card
function createCommCard(item, type) {
    const icon = type === 'newsletter' ? 'fa-newspaper' : 'fa-bullhorn';
    const formattedDate = formatDate(item.date);

    return `
        <a href="${item.fileName}" class="comm-card" target="_blank">
            <div class="comm-card-header">
                <div class="comm-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="comm-info">
                    <div class="comm-date">${formattedDate}</div>
                </div>
            </div>
            <h2 class="comm-subject">${item.subject}</h2>
            <p class="comm-preview">${item.firstLine}</p>
            <div class="comm-card-footer">
                <span class="read-more">
                    Read Full ${type === 'newsletter' ? 'Newsletter' : 'Bulletin'}
                    <i class="fas fa-arrow-right"></i>
                </span>
            </div>
        </a>
    `;
}

// ========================================
// LOAD NEWSLETTERS
// ========================================

function loadNewsletters() {
    const newslettersList = document.getElementById('newsletters-list');

    // Get newsletters from NEWSLETTERS array (defined in communications-data.js)
    const newsletters = typeof NEWSLETTERS !== 'undefined' ? NEWSLETTERS : [];

    if (newsletters.length === 0) {
        newslettersList.innerHTML = `
            <div class="no-items-message">
                <i class="fas fa-newspaper"></i>
                <p>No newsletters available at this time.</p>
            </div>
        `;
        return;
    }

    // Sort by date (newest first)
    const sortedNewsletters = [...newsletters].sort((a, b) => {
        return b.date.localeCompare(a.date);
    });

    // Generate HTML for each newsletter
    const html = sortedNewsletters.map(newsletter =>
        createCommCard(newsletter, 'newsletter')
    ).join('');

    newslettersList.innerHTML = html;
}

// ========================================
// LOAD BULLETINS
// ========================================

function loadBulletins() {
    const bulletinsList = document.getElementById('bulletins-list');

    // Get bulletins from BULLETINS array (defined in communications-data.js)
    const bulletins = typeof BULLETINS !== 'undefined' ? BULLETINS : [];

    if (bulletins.length === 0) {
        bulletinsList.innerHTML = `
            <div class="no-items-message">
                <i class="fas fa-bullhorn"></i>
                <p>No bulletins available at this time.</p>
            </div>
        `;
        return;
    }

    // Sort by date (newest first)
    const sortedBulletins = [...bulletins].sort((a, b) => {
        return b.date.localeCompare(a.date);
    });

    // Generate HTML for each bulletin
    const html = sortedBulletins.map(bulletin =>
        createCommCard(bulletin, 'bulletin')
    ).join('');

    bulletinsList.innerHTML = html;
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => {
        searchInput.focus();
    }, 300);
});

closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

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

// ========================================
// SCROLL TO TOP
// ========================================

const scrollTopBtn = document.getElementById('scrollTop');

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

// ========================================
// INITIALIZE PAGE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadNewsletters();
    loadBulletins();
});
