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
}

// ========================================
// INITIALIZE PAGE
// ========================================
// Note: Search and scroll functionality is handled by nav-footer-loader.js

document.addEventListener('DOMContentLoaded', () => {
    loadNewsletters();
    loadBulletins();
});
