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

// Format date for display (e.g., "Nov 22, 2025")
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Get fiscal year from date (April to March)
function getFiscalYear(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const month = date.getMonth(); // 0-11
    const year = date.getFullYear();

    // If month is 0-2 (Jan-Mar), fiscal year started previous year
    // If month is 3-11 (Apr-Dec), fiscal year started this year
    if (month < 3) {
        return `FY ${year - 1}-${year}`;
    } else {
        return `FY ${year}-${year + 1}`;
    }
}

// Group items by fiscal year
function groupByFiscalYear(items) {
    const grouped = {};

    items.forEach(item => {
        const fiscalYear = getFiscalYear(item.date);
        if (!grouped[fiscalYear]) {
            grouped[fiscalYear] = [];
        }
        grouped[fiscalYear].push(item);
    });

    return grouped;
}

// Create a compact communication card
function createCommCard(item, type) {
    const icon = type === 'newsletter' ? 'fa-newspaper' : 'fa-bullhorn';
    const formattedDate = formatDate(item.date);

    // Properly encode file path to handle ALL special characters (#, spaces, parentheses, etc.)
    // Split by '/', encode each part separately, then rejoin to preserve path structure
    const encodedFileName = item.fileName
        .split('/')
        .map(part => encodeURIComponent(part))
        .join('/');

    return `
        <a href="${encodedFileName}" class="comm-card" target="_blank">
            <div class="comm-icon">
                <i class="fas ${icon}"></i>
            </div>
            <div class="comm-info">
                <div class="comm-date">${formattedDate}</div>
                <h3 class="comm-subject">${item.subject}</h3>
            </div>
            <span class="read-more">
                <i class="fas fa-arrow-right"></i>
            </span>
        </a>
    `;
}

// Toggle year section
function toggleYearSection(yearId) {
    const yearHeader = document.querySelector(`[data-year="${yearId}"]`);
    const yearContent = document.getElementById(yearId);

    if (yearHeader && yearContent) {
        yearHeader.classList.toggle('collapsed');
        yearContent.classList.toggle('collapsed');
    }
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

let currentSearchQuery = '';

// Filter items by search query
function filterBySearch(items, query) {
    if (!query || query.trim() === '') {
        return items;
    }

    const searchTerm = query.toLowerCase().trim();

    return items.filter(item => {
        // Search in subject/title
        const subjectMatch = item.subject.toLowerCase().includes(searchTerm);

        // Search in keywords if available
        const keywordsMatch = item.keywords ?
            item.keywords.toLowerCase().includes(searchTerm) : false;

        return subjectMatch || keywordsMatch;
    });
}

// Update search results info
function updateSearchInfo(newslettersCount, bulletinsCount, isSearching) {
    const searchResults = document.getElementById('searchResults');

    if (!isSearching) {
        searchResults.textContent = '';
        searchResults.classList.remove('active');
        return;
    }

    const totalResults = newslettersCount + bulletinsCount;

    if (totalResults === 0) {
        searchResults.innerHTML = 'No results found';
        searchResults.classList.add('active');
    } else {
        const resultsText = [];
        if (newslettersCount > 0) {
            resultsText.push(`${newslettersCount} newsletter${newslettersCount > 1 ? 's' : ''}`);
        }
        if (bulletinsCount > 0) {
            resultsText.push(`${bulletinsCount} bulletin${bulletinsCount > 1 ? 's' : ''}`);
        }
        searchResults.innerHTML = `Found ${resultsText.join(' and ')}`;
        searchResults.classList.add('active');
    }
}

// ========================================
// LOAD NEWSLETTERS
// ========================================

function loadNewsletters(searchQuery = '') {
    const newslettersList = document.getElementById('newsletters-list');

    // Get newsletters from NEWSLETTERS array (defined in communications-data.js)
    let newsletters = typeof NEWSLETTERS !== 'undefined' ? NEWSLETTERS : [];

    // Apply search filter
    const isSearching = searchQuery && searchQuery.trim() !== '';
    if (isSearching) {
        newsletters = filterBySearch(newsletters, searchQuery);
    }

    if (newsletters.length === 0) {
        if (isSearching) {
            newslettersList.innerHTML = `
                <div class="no-results-message">
                    <i class="fas fa-search"></i>
                    <h3>No newsletters found</h3>
                    <p>No newsletters match your search criteria.</p>
                    <span class="clear-search-link" onclick="clearSearch()">Clear search</span>
                </div>
            `;
        } else {
            newslettersList.innerHTML = `
                <div class="no-items-message">
                    <i class="fas fa-newspaper"></i>
                    <p>No newsletters available at this time.</p>
                </div>
            `;
        }
        return newsletters.length;
    }

    // Sort by date (newest first)
    const sortedNewsletters = [...newsletters].sort((a, b) => {
        return b.date.localeCompare(a.date);
    });

    // Group by fiscal year
    const groupedByYear = groupByFiscalYear(sortedNewsletters);

    // Get years sorted (newest first)
    const years = Object.keys(groupedByYear).sort().reverse();

    // Generate HTML with year sections
    const html = years.map((year, index) => {
        const items = groupedByYear[year];
        const yearId = `newsletters-year-${year.replace(/\s/g, '-')}`;
        const isFirstYear = index === 0;

        return `
            <div class="year-section">
                <div class="year-header ${isFirstYear ? '' : 'collapsed'}"
                     data-year="${yearId}"
                     onclick="toggleYearSection('${yearId}')">
                    <div>
                        <h2 class="year-title">${year}</h2>
                        <span class="year-count">${items.length} newsletter${items.length > 1 ? 's' : ''}</span>
                    </div>
                    <i class="fas fa-chevron-down year-toggle"></i>
                </div>
                <div class="year-content ${isFirstYear ? '' : 'collapsed'}" id="${yearId}">
                    <div class="communications-grid">
                        ${items.map(newsletter => createCommCard(newsletter, 'newsletter')).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    newslettersList.innerHTML = html;
    return newsletters.length;
}

// ========================================
// LOAD BULLETINS
// ========================================

function loadBulletins(searchQuery = '') {
    const bulletinsList = document.getElementById('bulletins-list');

    // Get bulletins from BULLETINS array (defined in communications-data.js)
    let bulletins = typeof BULLETINS !== 'undefined' ? BULLETINS : [];

    // Apply search filter
    const isSearching = searchQuery && searchQuery.trim() !== '';
    if (isSearching) {
        bulletins = filterBySearch(bulletins, searchQuery);
    }

    if (bulletins.length === 0) {
        if (isSearching) {
            bulletinsList.innerHTML = `
                <div class="no-results-message">
                    <i class="fas fa-search"></i>
                    <h3>No bulletins found</h3>
                    <p>No bulletins match your search criteria.</p>
                    <span class="clear-search-link" onclick="clearSearch()">Clear search</span>
                </div>
            `;
        } else {
            bulletinsList.innerHTML = `
                <div class="no-items-message">
                    <i class="fas fa-bullhorn"></i>
                    <p>No bulletins available at this time.</p>
                </div>
            `;
        }
        return bulletins.length;
    }

    // Sort by date (newest first)
    const sortedBulletins = [...bulletins].sort((a, b) => {
        return b.date.localeCompare(a.date);
    });

    // Group by fiscal year
    const groupedByYear = groupByFiscalYear(sortedBulletins);

    // Get years sorted (newest first)
    const years = Object.keys(groupedByYear).sort().reverse();

    // Generate HTML with year sections
    const html = years.map((year, index) => {
        const items = groupedByYear[year];
        const yearId = `bulletins-year-${year.replace(/\s/g, '-')}`;
        const isFirstYear = index === 0;

        return `
            <div class="year-section">
                <div class="year-header ${isFirstYear ? '' : 'collapsed'}"
                     data-year="${yearId}"
                     onclick="toggleYearSection('${yearId}')">
                    <div>
                        <h2 class="year-title">${year}</h2>
                        <span class="year-count">${items.length} bulletin${items.length > 1 ? 's' : ''}</span>
                    </div>
                    <i class="fas fa-chevron-down year-toggle"></i>
                </div>
                <div class="year-content ${isFirstYear ? '' : 'collapsed'}" id="${yearId}">
                    <div class="communications-grid">
                        ${items.map(bulletin => createCommCard(bulletin, 'bulletin')).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    bulletinsList.innerHTML = html;
    return bulletins.length;
}

// ========================================
// SEARCH EVENT HANDLERS
// ========================================

// Perform search and update both tabs
function performSearch(query) {
    currentSearchQuery = query;
    const newslettersCount = loadNewsletters(query);
    const bulletinsCount = loadBulletins(query);
    updateSearchInfo(newslettersCount, bulletinsCount, query.trim() !== '');
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('commSearch');
    const clearBtn = document.getElementById('clearSearch');

    searchInput.value = '';
    clearBtn.style.display = 'none';
    performSearch('');
}

// ========================================
// INITIALIZE PAGE
// ========================================
// Note: Search and scroll functionality is handled by nav-footer-loader.js

document.addEventListener('DOMContentLoaded', () => {
    loadNewsletters();
    loadBulletins();

    // Setup search functionality
    const searchInput = document.getElementById('commSearch');
    const clearBtn = document.getElementById('clearSearch');

    // Search input event
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;

        // Show/hide clear button
        clearBtn.style.display = query ? 'block' : 'none';

        // Perform search
        performSearch(query);
    });

    // Clear button click
    clearBtn.addEventListener('click', clearSearch);

    // Clear search on Escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
});
