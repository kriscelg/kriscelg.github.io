// Memos Page JavaScript

let allMemos = [];
let filteredMemos = [];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    allMemos = MEMOS || [];
    filteredMemos = [...allMemos];

    populateYearFilter();
    displayMemos();
    initializeSearch();
    initializeFilters();
});

// Populate year filter dropdown
function populateYearFilter() {
    const yearFilter = document.getElementById('yearFilter');
    if (!yearFilter) return;

    const years = [...new Set(allMemos.map(memo => new Date(memo.date).getFullYear()))];
    years.sort((a, b) => b - a);

    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
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
        <a href="${memo.fileUrl}" class="memo-card" target="_blank">
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
            <span class="memo-category ${memo.category}">${memo.category}</span>
            <div class="memo-footer">
                <span class="memo-from"><strong>From:</strong> ${memo.from}</span>
                <span class="view-link">
                    View Memo <i class="fas fa-arrow-right"></i>
                </span>
            </div>
        </a>
    `).join('');
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('memoSearch');
    const clearBtn = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm) {
            clearBtn.style.display = 'flex';
            filterMemos();
            updateSearchResults(searchTerm);
        } else {
            clearBtn.style.display = 'none';
            filterMemos();
            searchResults.textContent = '';
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            searchResults.textContent = '';
            filterMemos();
        });
    }
}

// Update search results info
function updateSearchResults(searchTerm) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;

    const count = filteredMemos.length;
    searchResults.textContent = `Found ${count} memo${count !== 1 ? 's' : ''} matching "${searchTerm}"`;
}

// Initialize filter functionality
function initializeFilters() {
    const yearFilter = document.getElementById('yearFilter');
    const categoryFilter = document.getElementById('categoryFilter');

    if (yearFilter) {
        yearFilter.addEventListener('change', filterMemos);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterMemos);
    }
}

// Filter memos based on search and filters
function filterMemos() {
    const searchTerm = document.getElementById('memoSearch')?.value.toLowerCase().trim() || '';
    const yearFilter = document.getElementById('yearFilter')?.value || 'all';
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';

    filteredMemos = allMemos.filter(memo => {
        // Search filter
        const matchesSearch = !searchTerm ||
            memo.title.toLowerCase().includes(searchTerm) ||
            memo.subject.toLowerCase().includes(searchTerm) ||
            memo.memoNumber.toLowerCase().includes(searchTerm) ||
            memo.from.toLowerCase().includes(searchTerm);

        // Year filter
        const memoYear = new Date(memo.date).getFullYear().toString();
        const matchesYear = yearFilter === 'all' || memoYear === yearFilter;

        // Category filter
        const matchesCategory = categoryFilter === 'all' || memo.category === categoryFilter;

        return matchesSearch && matchesYear && matchesCategory;
    });

    // Sort by date (newest first)
    filteredMemos.sort((a, b) => new Date(b.date) - new Date(a.date));

    displayMemos();
}
