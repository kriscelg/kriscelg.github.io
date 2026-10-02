/**
 * WDT Intranet - Shared Document Listing Page Script
 *
 * Each document category page must define these two variables
 * in an inline <script> BEFORE loading this file:
 *
 *   const PAGE_DOCUMENTS     = <array of document objects>
 *   const PAGE_TAG_CATEGORIES = <object mapping category names to tag arrays>
 */

(function () {
    const documents = typeof PAGE_DOCUMENTS !== 'undefined' ? PAGE_DOCUMENTS : [];
    const TAG_CATEGORIES = typeof PAGE_TAG_CATEGORIES !== 'undefined' ? PAGE_TAG_CATEGORIES : {};

    let filteredDocuments = [...documents];
    let activeSearchTerm = '';
    let activeTags = new Set();

    // ── Helpers ────────────────────────────────────────────────────────────────

    function encodeFilePath(filePath) {
        return filePath.split('/').map(part => encodeURIComponent(part)).join('/');
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const parts = dateString.split('-').map(Number);
        if (parts.length !== 3 || parts.some(isNaN)) return '';
        const date = new Date(parts[0], parts[1] - 1, parts[2]);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function parseDate(dateString) {
        if (!dateString) return new Date(0);
        const parts = dateString.split('-').map(Number);
        if (parts.length !== 3 || parts.some(isNaN)) return new Date(0);
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function getFileIcon(fileType) {
        if (!fileType) return 'fa-file';
        const icons = {
            'HTML':       'fa-file-code',
            'PDF':        'fa-file-pdf',
            'Word':       'fa-file-word',
            'DOCX':       'fa-file-word',
            'DOC':        'fa-file-word',
            'Excel':      'fa-file-excel',
            'XLSX':       'fa-file-excel',
            'XLS':        'fa-file-excel',
            'PowerPoint': 'fa-file-powerpoint',
            'PPTX':       'fa-file-powerpoint',
            'PPT':        'fa-file-powerpoint',
            'Text':       'fa-file-alt',
            'TXT':        'fa-file-alt',
            'Image':      'fa-file-image'
        };
        return icons[fileType] || icons[fileType.toUpperCase()] || 'fa-file';
    }

    // ── Render ─────────────────────────────────────────────────────────────────

    function renderDocuments(docs) {
        const container = document.getElementById('documents-list');
        const noResults = document.getElementById('noResults');

        if (docs.length === 0) {
            container.innerHTML = '';
            noResults.style.display = 'flex';
            updateSearchResults(0);
            return;
        }

        noResults.style.display = 'none';
        const sortedDocs = [...docs].sort((a, b) => parseDate(b.uploadDate) - parseDate(a.uploadDate));
        container.innerHTML = sortedDocs.map(doc => `
            <a href="${encodeFilePath(doc.fileName)}" class="document-card" target="_blank">
                <div class="doc-icon">
                    <i class="fas ${getFileIcon(doc.fileType)}"></i>
                </div>
                <div class="doc-content">
                    <h3 class="doc-title">${doc.title}</h3>
                    <div class="doc-meta">
                        <span class="doc-meta-item">
                            <i class="fas fa-calendar"></i> ${formatDate(doc.uploadDate)}
                        </span>
                        <span class="doc-meta-item doc-type">
                            <i class="fas fa-tag"></i> ${doc.fileType}
                        </span>
                    </div>
                </div>
                <div class="doc-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </a>
        `).join('');

        updateSearchResults(docs.length);
    }

    // ── Tag filters ────────────────────────────────────────────────────────────

    function countTagDocuments(tag) {
        return documents.filter(doc => doc.tags && doc.tags.includes(tag)).length;
    }

    function generateTagFilters() {
        const tagCategoriesContainer = document.getElementById('tagCategories');

        const categoriesHTML = Object.entries(TAG_CATEGORIES).map(([categoryName, tags]) => {
            const categoryTagsHTML = tags.map(tag => {
                const count = countTagDocuments(tag);
                if (count === 0) return '';
                return `
                    <div class="tag-filter-item" data-tag="${tag}">
                        <div class="tag-filter-checkbox">
                            <i class="fas fa-check"></i>
                        </div>
                        <span class="tag-filter-label">${tag}</span>
                        <span class="tag-filter-count">${count}</span>
                    </div>
                `;
            }).filter(html => html !== '').join('');

            if (categoryTagsHTML === '') return '';

            return `
                <div class="tag-category">
                    <div class="tag-category-header">
                        <span class="tag-category-title">${categoryName}</span>
                        <i class="fas fa-chevron-down tag-category-toggle"></i>
                    </div>
                    <div class="tag-category-items">
                        ${categoryTagsHTML}
                    </div>
                </div>
            `;
        }).join('');

        tagCategoriesContainer.innerHTML = categoriesHTML ||
            '<p class="no-tags-message" style="text-align:center;color:#94a3b8;font-size:13px;margin:10px 0;">No tags available</p>';

        document.querySelectorAll('.tag-category-header').forEach(header => {
            header.addEventListener('click', () => {
                header.closest('.tag-category').classList.toggle('collapsed');
            });
        });

        document.querySelectorAll('.tag-filter-item').forEach(item => {
            item.addEventListener('click', () => {
                const tag = item.dataset.tag;
                if (activeTags.has(tag)) {
                    activeTags.delete(tag);
                    item.classList.remove('active');
                } else {
                    activeTags.add(tag);
                    item.classList.add('active');
                }
                filterDocuments();
                updateActiveFilters();
            });
        });
    }

    function updateActiveFilters() {
        const activeFiltersContainer = document.getElementById('activeFilters');
        const activeFiltersList = document.getElementById('activeFiltersList');

        if (activeTags.size === 0) {
            activeFiltersContainer.style.display = 'none';
            return;
        }

        activeFiltersContainer.style.display = 'flex';
        activeFiltersList.innerHTML = Array.from(activeTags).map(tag => `
            <span class="active-filter-chip" data-tag="${tag}">
                ${tag}
                <button class="remove-filter-btn" onclick="removeFilter('${tag}')">
                    <i class="fas fa-times"></i>
                </button>
            </span>
        `).join('');
    }

    // Exposed globally for the onclick="removeFilter(...)" attributes in the HTML
    window.removeFilter = function (tag) {
        activeTags.delete(tag);
        document.querySelector(`.tag-filter-item[data-tag="${tag}"]`)?.classList.remove('active');
        filterDocuments();
        updateActiveFilters();
    };

    // ── Search / filter ────────────────────────────────────────────────────────

    function filterDocuments() {
        filteredDocuments = documents.filter(doc => {
            const matchesSearch = !activeSearchTerm ||
                doc.title.toLowerCase().includes(activeSearchTerm.toLowerCase());

            const matchesTags = activeTags.size === 0 ||
                (doc.tags && Array.from(activeTags).every(tag => doc.tags.includes(tag)));

            return matchesSearch && matchesTags;
        });

        renderDocuments(filteredDocuments);
    }

    function updateSearchResults(count) {
        const resultsInfo = document.getElementById('searchResults');
        if (activeSearchTerm || activeTags.size > 0) {
            resultsInfo.textContent = `Found ${count} document${count !== 1 ? 's' : ''}`;
            resultsInfo.classList.add('active');
        } else {
            resultsInfo.textContent = '';
            resultsInfo.classList.remove('active');
        }
    }

    // ── Event listeners ────────────────────────────────────────────────────────

    const searchInput = document.getElementById('documentSearch');
    const clearSearchBtn = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (e) => {
        activeSearchTerm = e.target.value;
        clearSearchBtn.style.display = activeSearchTerm ? 'flex' : 'none';
        filterDocuments();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        activeSearchTerm = '';
        clearSearchBtn.style.display = 'none';
        filterDocuments();
    });

    document.getElementById('clearFilters').addEventListener('click', () => {
        activeTags.clear();
        document.querySelectorAll('.tag-filter-item').forEach(item => item.classList.remove('active'));
        filterDocuments();
        updateActiveFilters();
    });

    // ── Init ───────────────────────────────────────────────────────────────────

    generateTagFilters();
    renderDocuments(documents);
})();
