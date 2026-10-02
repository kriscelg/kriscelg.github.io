/**
 * WDT Intranet - Videos & Presentations Script
 */

// State
let activeFilters = [];
let currentTab = 'videos';
let searchQuery = '';

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

        // Update current tab
        currentTab = tabName;

        // Regenerate filter tags and content
        generateFilterTags();
        filterContent();
    });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Get all unique tags from videos and presentations
function getAllTags() {
    let allTags = new Set();

    if (currentTab === 'videos') {
        VIDEOS.forEach(video => {
            video.tags.forEach(tag => allTags.add(tag));
        });
    } else {
        PRESENTATIONS.forEach(pres => {
            pres.tags.forEach(tag => allTags.add(tag));
        });
    }

    return Array.from(allTags).sort();
}

// Encode file paths to handle special characters
function encodeFilePath(filePath) {
    return filePath.split('/').map(part => encodeURIComponent(part)).join('/');
}

// Filter items by search query
function filterBySearch(items, query) {
    if (!query || query.trim() === '') {
        return items;
    }

    const searchTerm = query.toLowerCase().trim();

    return items.filter(item => {
        // Search in title
        const titleMatch = item.title.toLowerCase().includes(searchTerm);

        // Search in description
        const descriptionMatch = item.description.toLowerCase().includes(searchTerm);

        // Search in keywords if available
        const keywordsMatch = item.keywords ?
            item.keywords.toLowerCase().includes(searchTerm) : false;

        return titleMatch || descriptionMatch || keywordsMatch;
    });
}

// Update search results info
function updateSearchInfo(videosCount, presentationsCount, isSearching) {
    const searchResults = document.getElementById('vpSearchResults');

    if (!isSearching) {
        searchResults.textContent = '';
        searchResults.classList.remove('active');
        return;
    }

    const totalResults = videosCount + presentationsCount;

    if (totalResults === 0) {
        searchResults.innerHTML = 'No results found';
        searchResults.classList.add('active');
    } else {
        const resultsText = [];
        if (videosCount > 0) {
            resultsText.push(`${videosCount} video${videosCount > 1 ? 's' : ''}`);
        }
        if (presentationsCount > 0) {
            resultsText.push(`${presentationsCount} presentation${presentationsCount > 1 ? 's' : ''}`);
        }
        searchResults.innerHTML = `Found ${resultsText.join(' and ')}`;
        searchResults.classList.add('active');
    }
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================

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
    document.querySelectorAll('.filter-tag').forEach(btn => {
        if (btn.getAttribute('data-tag') === tag) {
            btn.classList.toggle('active');
        }
    });

    // Filter content
    filterContent();
}

// Clear all filters
document.getElementById('clearFilters').addEventListener('click', () => {
    activeFilters = [];
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.classList.remove('active');
    });
    filterContent();
});

// Filter content based on active filters and search query
function filterContent() {
    const videosCount = loadVideos();
    const presentationsCount = loadPresentations();

    // Update search info if searching
    const isSearching = searchQuery && searchQuery.trim() !== '';
    if (isSearching) {
        updateSearchInfo(videosCount, presentationsCount, true);
    } else {
        updateSearchInfo(0, 0, false);
    }
}

// ========================================
// CREATE CONTENT CARDS
// ========================================

// Create video card
function createVideoCard(video) {
    const encodedPath = encodeFilePath(video.videoFile);
    const encodedThumb = video.thumbnail ? encodeFilePath(video.thumbnail) : '';
    const formattedDate = formatDate(video.date);

    const thumbnailHtml = encodedThumb
        ? `<img src="${encodedThumb}" alt="${video.title}">`
        : `<i class="fas fa-video placeholder-icon"></i>`;

    return `
        <div class="content-card" onclick="openVideoModal(${video.id})">
            <div class="card-thumbnail">
                ${thumbnailHtml}
                <div class="play-overlay">
                    <div class="play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <span class="card-duration">${video.duration}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${video.title}</h3>
                <p class="card-description">${video.description}</p>
                <div class="card-meta">
                    <span class="card-date">
                        <i class="far fa-calendar"></i>
                        ${formattedDate}
                    </span>
                </div>
                <div class="card-tags">
                    ${video.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Create presentation card
function createPresentationCard(presentation) {
    const encodedPath = encodeFilePath(presentation.pdfFile);
    const encodedThumb = presentation.thumbnail ? encodeFilePath(presentation.thumbnail) : '';
    const formattedDate = formatDate(presentation.date);

    const thumbnailHtml = encodedThumb
        ? `<img src="${encodedThumb}" alt="${presentation.title}">`
        : `<i class="fas fa-file-pdf placeholder-icon"></i>`;

    return `
        <div class="content-card" onclick="openPdfModal(${presentation.id})">
            <div class="card-thumbnail">
                ${thumbnailHtml}
                <div class="play-overlay">
                    <div class="play-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
                <span class="card-slides">${presentation.slides} slides</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${presentation.title}</h3>
                <p class="card-description">${presentation.description}</p>
                <div class="card-meta">
                    <span class="card-date">
                        <i class="far fa-calendar"></i>
                        ${formattedDate}
                    </span>
                </div>
                <div class="card-tags">
                    ${presentation.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// ========================================
// LOAD CONTENT
// ========================================

// Load videos
function loadVideos() {
    const videosGrid = document.getElementById('videosGrid');
    const noVideosMessage = document.getElementById('noVideosMessage');

    let videos = typeof VIDEOS !== 'undefined' ? VIDEOS : [];

    // Apply search filter first
    const isSearching = searchQuery && searchQuery.trim() !== '';
    if (isSearching) {
        videos = filterBySearch(videos, searchQuery);
    }

    // Filter videos by tags
    let filteredVideos = videos;
    if (activeFilters.length > 0) {
        filteredVideos = videos.filter(video => {
            return activeFilters.every(filter => video.tags.includes(filter));
        });
    }

    // Sort by date (newest first)
    filteredVideos.sort((a, b) => b.date.localeCompare(a.date));

    if (filteredVideos.length === 0) {
        videosGrid.style.display = 'none';
        noVideosMessage.style.display = 'block';

        // Update message if searching
        if (isSearching) {
            noVideosMessage.innerHTML = `
                <i class="fas fa-search"></i>
                <p>No videos found matching your search</p>
                <span class="clear-search-link" onclick="clearVPSearch()">Clear search</span>
            `;
        } else {
            noVideosMessage.innerHTML = `
                <i class="fas fa-video-slash"></i>
                <p>No videos found matching your filters</p>
            `;
        }
    } else {
        videosGrid.style.display = 'grid';
        noVideosMessage.style.display = 'none';
        videosGrid.innerHTML = filteredVideos.map(video => createVideoCard(video)).join('');
    }

    return filteredVideos.length;
}

// Load presentations
function loadPresentations() {
    const presentationsGrid = document.getElementById('presentationsGrid');
    const noPresentationsMessage = document.getElementById('noPresentationsMessage');

    let presentations = typeof PRESENTATIONS !== 'undefined' ? PRESENTATIONS : [];

    // Apply search filter first
    const isSearching = searchQuery && searchQuery.trim() !== '';
    if (isSearching) {
        presentations = filterBySearch(presentations, searchQuery);
    }

    // Filter presentations by tags
    let filteredPresentations = presentations;
    if (activeFilters.length > 0) {
        filteredPresentations = presentations.filter(presentation => {
            return activeFilters.every(filter => presentation.tags.includes(filter));
        });
    }

    // Sort by date (newest first)
    filteredPresentations.sort((a, b) => b.date.localeCompare(a.date));

    if (filteredPresentations.length === 0) {
        presentationsGrid.style.display = 'none';
        noPresentationsMessage.style.display = 'block';

        // Update message if searching
        if (isSearching) {
            noPresentationsMessage.innerHTML = `
                <i class="fas fa-search"></i>
                <p>No presentations found matching your search</p>
                <span class="clear-search-link" onclick="clearVPSearch()">Clear search</span>
            `;
        } else {
            noPresentationsMessage.innerHTML = `
                <i class="fas fa-presentation"></i>
                <p>No presentations found matching your filters</p>
            `;
        }
    } else {
        presentationsGrid.style.display = 'grid';
        noPresentationsMessage.style.display = 'none';
        presentationsGrid.innerHTML = filteredPresentations.map(pres => createPresentationCard(pres)).join('');
    }

    return filteredPresentations.length;
}

// ========================================
// VIDEO PLAYER MODAL
// ========================================

function openVideoModal(videoId) {
    const video = VIDEOS.find(v => v.id === videoId);
    if (!video) return;

    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const modalTitle = document.getElementById('videoModalTitle');
    const videoDescription = document.getElementById('videoDescription');

    // Set video details
    modalTitle.textContent = video.title;
    videoDescription.textContent = video.description;

    // Encode video file path
    const encodedPath = encodeFilePath(video.videoFile);
    videoSource.src = encodedPath;
    videoPlayer.load();

    // Show modal
    modal.classList.add('active');

    // Setup playback speed control
    const speedControl = document.getElementById('playbackSpeed');
    speedControl.value = '1';
    speedControl.onchange = function() {
        videoPlayer.playbackRate = parseFloat(this.value);
    };
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.pause();
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// ========================================
// PDF VIEWER MODAL
// ========================================

function openPdfModal(presentationId) {
    const presentation = PRESENTATIONS.find(p => p.id === presentationId);
    if (!presentation) return;

    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalTitle = document.getElementById('pdfModalTitle');
    const pdfDescription = document.getElementById('pdfDescription');

    // Set presentation details
    modalTitle.textContent = presentation.title;
    pdfDescription.textContent = presentation.description;

    // Encode PDF file path
    const encodedPath = encodeFilePath(presentation.pdfFile);
    pdfViewer.src = encodedPath;

    // Show modal
    modal.classList.add('active');
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');

    pdfViewer.src = '';
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('pdfModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePdfModal();
    }
});

// ========================================
// ESCAPE KEY HANDLER FOR MODALS
// ========================================
// Note: Search and scroll functionality is handled by nav-footer-loader.js

// Close video/PDF modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.getElementById('videoModal').classList.contains('active')) {
            closeVideoModal();
        }
        if (document.getElementById('pdfModal').classList.contains('active')) {
            closePdfModal();
        }
    }
});

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

// Perform search
function performVPSearch(query) {
    searchQuery = query;
    filterContent();
}

// Clear search
function clearVPSearch() {
    const searchInput = document.getElementById('vpSearch');
    const clearBtn = document.getElementById('clearVPSearch');

    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchQuery = '';
    filterContent();
}

// ========================================
// INITIALIZE PAGE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    generateFilterTags();
    loadVideos();
    loadPresentations();

    // Setup search functionality
    const searchInput = document.getElementById('vpSearch');
    const clearBtn = document.getElementById('clearVPSearch');

    // Search input event
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;

        // Show/hide clear button
        clearBtn.style.display = query ? 'block' : 'none';

        // Perform search
        performVPSearch(query);
    });

    // Clear button click
    clearBtn.addEventListener('click', clearVPSearch);

    // Clear search on Escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearVPSearch();
        }
    });
});
