// Memos Page JavaScript

let allMemos = [];
let filteredMemos = [];
let activeFilters = [];
let searchQuery = '';

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    allMemos = MEMOS || [];
    filteredMemos = [...allMemos];

    populateFiscalYearFilter();
    generateFilterTags();
    displayMemos();
    initializeSearch();
    initializeFilters();
});

// Calculate fiscal year from date (April to March)
function getFiscalYear(dateString) {
    const [year, month] = dateString.split('-').map(Number);
    // If month is Jan-Mar (1-3), fiscal year started in previous calendar year
    // If month is Apr-Dec (4-12), fiscal year started in current calendar year
    return month >= 4 ? year : year - 1;
}

// Format fiscal year for display
function formatFiscalYear(fiscalYear) {
    return `FY ${fiscalYear}-${(fiscalYear + 1).toString().slice(2)}`;
}

// Populate fiscal year filter dropdown
function populateFiscalYearFilter() {
    const yearFilter = document.getElementById('yearFilter');
    if (!yearFilter) return;

    const fiscalYears = [...new Set(allMemos.map(memo => getFiscalYear(memo.date)))];
    fiscalYears.sort((a, b) => b - a);

    fiscalYears.forEach(fy => {
        const option = document.createElement('option');
        option.value = fy;
        option.textContent = formatFiscalYear(fy);
        yearFilter.appendChild(option);
    });
}

// Get all unique tags from memos
function getAllTags() {
    let allTags = new Set();
    allMemos.forEach(memo => {
        if (memo.tags && Array.isArray(memo.tags)) {
            memo.tags.forEach(tag => allTags.add(tag));
        }
    });
    return Array.from(allTags).sort();
}

// Generate filter tag buttons
function generateFilterTags() {
    const filterTagsContainer = document.getElementById('filterTags');
    const tags = getAllTags();

    if (tags.length === 0) {
        filterTagsContainer.innerHTML = '<p style="color: #94a3b8; font-size: 14px;">No tags available</p>';
        return;
    }

    filterTagsContainer.innerHTML = tags.map(tag => `
        <button class="filter-tag" data-tag="${tag}">${tag}</button>
    `).join('');

    // Add click handlers to filter tags
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.addEventListener('click', function() {
            const tag = this.getAttribute('data-tag');
            toggleFilter(tag);
        });
    });
}

// Toggle filter on/off
function toggleFilter(tag) {
    const index = activeFilters.indexOf(tag);
    if (index > -1) {
        activeFilters.splice(index, 1);
    } else {
        activeFilters.push(tag);
    }

    // Update UI
    updateFilterButtons();
    filterMemos();
}

// Update filter button states
function updateFilterButtons() {
    document.querySelectorAll('.filter-tag').forEach(btn => {
        const tag = btn.getAttribute('data-tag');
        if (activeFilters.includes(tag)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Format date
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Display memos
function displayMemos() {
    const memosList = document.getElementById('memos-list');
    if (!memosList) return;

    if (filteredMemos.length === 0) {
        memosList.innerHTML = '<p class="no-items">No memos found matching your criteria.</p>';
        return;
    }

    memosList.innerHTML = filteredMemos.map(memo => `
        <div class="memo-card" onclick="openPdfModal(${memo.id})">
            <div class="memo-header">
                <div class="memo-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <div class="memo-info">
                    <h3 class="memo-title">${memo.title}</h3>
                    <div class="memo-meta">
                        <span class="memo-date">
                            <i class="fas fa-calendar"></i>
                            ${formatDate(memo.date)}
                        </span>
                        <span class="memo-number">
                            <i class="fas fa-hashtag"></i>
                            ${memo.memoNumber}
                        </span>
                    </div>
                </div>
            </div>
            <p class="memo-subject">${memo.subject}</p>
            ${memo.tags && memo.tags.length > 0 ? `
                <div class="memo-tags">
                    ${memo.tags.map(tag => `<span class="memo-tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
            <div class="memo-footer">
                <span class="memo-from"><strong>From:</strong> ${memo.from}</span>
                <span class="view-link">
                    View Memo <i class="fas fa-arrow-right"></i>
                </span>
            </div>
        </div>
    `).join('');
}

// Open PDF modal
function openPdfModal(memoId) {
    const memo = allMemos.find(m => m.id === memoId);
    if (!memo) return;

    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalTitle = document.getElementById('pdfModalTitle');
    const pdfDate = document.getElementById('pdfDate');
    const pdfNumber = document.getElementById('pdfNumber');
    const pdfFrom = document.getElementById('pdfFrom');
    const pdfDescription = document.getElementById('pdfDescription');

    modalTitle.textContent = memo.title;
    pdfDate.textContent = formatDate(memo.date);
    pdfNumber.textContent = memo.memoNumber;
    pdfFrom.textContent = memo.from;
    pdfDescription.textContent = memo.subject;

    if (memo.pdfFile && memo.pdfFile.trim() !== '') {
        pdfViewer.src = memo.pdfFile;
    } else {
        pdfViewer.src = 'about:blank';
        // You can show a message that the PDF is not available
        pdfDescription.textContent = memo.subject + '\n\n(PDF file not yet uploaded)';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close PDF modal
function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');

    modal.classList.remove('active');
    pdfViewer.src = '';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('pdfModal');
    if (e.target === modal) {
        closePdfModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePdfModal();
    }
});

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('memoSearch');
    const clearBtn = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();

        if (searchQuery) {
            clearBtn.style.display = 'flex';
            filterMemos();
            updateSearchResults();
        } else {
            clearBtn.style.display = 'none';
            filterMemos();
            searchResults.textContent = '';
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearBtn.style.display = 'none';
            searchResults.textContent = '';
            filterMemos();
        });
    }
}

// Update search results info
function updateSearchResults() {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;

    const count = filteredMemos.length;
    searchResults.textContent = `Found ${count} memo${count !== 1 ? 's' : ''} matching "${searchQuery}"`;
}

// Initialize filter functionality
function initializeFilters() {
    const yearFilter = document.getElementById('yearFilter');
    const clearFiltersBtn = document.getElementById('clearFilters');

    if (yearFilter) {
        yearFilter.addEventListener('change', filterMemos);
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            activeFilters = [];
            updateFilterButtons();
            filterMemos();
        });
    }
}

// Filter memos based on search, fiscal year, and tags
function filterMemos() {
    const yearFilter = document.getElementById('yearFilter')?.value || 'all';

    filteredMemos = allMemos.filter(memo => {
        // Search filter
        const matchesSearch = !searchQuery ||
            memo.title.toLowerCase().includes(searchQuery) ||
            memo.subject.toLowerCase().includes(searchQuery) ||
            memo.memoNumber.toLowerCase().includes(searchQuery) ||
            memo.from.toLowerCase().includes(searchQuery) ||
            (memo.tags && memo.tags.some(tag => tag.toLowerCase().includes(searchQuery)));

        // Fiscal year filter
        const memoFiscalYear = getFiscalYear(memo.date);
        const matchesYear = yearFilter === 'all' || memoFiscalYear.toString() === yearFilter;

        // Tag filter
        const matchesTags = activeFilters.length === 0 ||
            (memo.tags && activeFilters.every(filter =>
                memo.tags.some(tag => tag === filter)
            ));

        return matchesSearch && matchesYear && matchesTags;
    });

    // Sort by date (newest first)
    filteredMemos.sort((a, b) => new Date(b.date) - new Date(a.date));

    displayMemos();
}
