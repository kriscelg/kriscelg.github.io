/**
 * WDT Intranet - Communications (Bulletins) Script
 */

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

// Create a compact bulletin card
function createCommCard(item) {
    const formattedDate = formatDate(item.date);

    const encodedFileName = item.fileName
        .split('/')
        .map(part => encodeURIComponent(part))
        .join('/');

    return `
        <a href="${encodedFileName}" class="comm-card" target="_blank">
            <div class="comm-icon">
                <i class="fas fa-bullhorn"></i>
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

function filterBySearch(items, query) {
    if (!query || query.trim() === '') return items;

    const searchTerm = query.toLowerCase().trim();

    return items.filter(item => {
        const subjectMatch = item.subject.toLowerCase().includes(searchTerm);
        const keywordsMatch = item.keywords ?
            item.keywords.toLowerCase().includes(searchTerm) : false;
        return subjectMatch || keywordsMatch;
    });
}

function updateSearchInfo(count, isSearching) {
    const searchResults = document.getElementById('searchResults');

    if (!isSearching) {
        searchResults.textContent = '';
        searchResults.classList.remove('active');
        return;
    }

    if (count === 0) {
        searchResults.innerHTML = 'No results found';
    } else {
        searchResults.innerHTML = `Found ${count} bulletin${count !== 1 ? 's' : ''}`;
    }
    searchResults.classList.add('active');
}

// ========================================
// LOAD BULLETINS
// ========================================

function loadBulletins(searchQuery = '') {
    const bulletinsList = document.getElementById('bulletins-list');

    let bulletins = typeof BULLETINS !== 'undefined' ? BULLETINS : [];

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

    const sortedBulletins = [...bulletins].sort((a, b) => b.date.localeCompare(a.date));
    const groupedByYear = groupByFiscalYear(sortedBulletins);
    const years = Object.keys(groupedByYear).sort().reverse();

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
                        ${items.map(bulletin => createCommCard(bulletin)).join('')}
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

function performSearch(query) {
    currentSearchQuery = query;
    const count = loadBulletins(query);
    updateSearchInfo(count, query.trim() !== '');
}

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

document.addEventListener('DOMContentLoaded', () => {
    loadBulletins();

    const searchInput = document.getElementById('commSearch');
    const clearBtn = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        clearBtn.style.display = query ? 'block' : 'none';
        performSearch(query);
    });

    clearBtn.addEventListener('click', clearSearch);

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') clearSearch();
    });
});
