/**
 * About Us Page - Organization Charts Functionality
 */

// Function to toggle branch units visibility
function toggleBranchUnits(headerElement) {
    const branchCard = headerElement.closest('.branch-card');
    const branchUnits = branchCard.querySelector('.branch-units');

    // Toggle expanded class on card
    branchCard.classList.toggle('expanded');

    // Toggle collapsed class on units
    branchUnits.classList.toggle('collapsed');
}

// Function to format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to load organization charts
function loadOrganizationCharts() {
    const chartsGrid = document.getElementById('chartsGrid');
    const noChartsMessage = document.getElementById('noChartsMessage');

    if (!chartsGrid) return;

    // Check if there are any charts
    if (!ORGANIZATION_CHARTS || ORGANIZATION_CHARTS.length === 0) {
        chartsGrid.style.display = 'none';
        noChartsMessage.style.display = 'block';
        return;
    }

    // Clear existing content
    chartsGrid.innerHTML = '';

    // Generate chart cards
    ORGANIZATION_CHARTS.forEach(chart => {
        const chartCard = document.createElement('div');
        chartCard.className = 'chart-card';
        chartCard.onclick = () => openChartModal(chart);

        chartCard.innerHTML = `
            <div class="chart-thumbnail">
                ${chart.thumbnail ?
                    `<img src="${chart.thumbnail}" alt="${chart.title}">` :
                    '<i class="fas fa-sitemap"></i>'
                }
            </div>
            <div class="chart-info">
                <h3>${chart.title}</h3>
                <p>${chart.description || ''}</p>
                <div class="chart-meta">
                    ${chart.department ?
                        `<div class="chart-meta-item">
                            <i class="fas fa-building"></i>
                            <span>${chart.department}</span>
                        </div>` : ''
                    }
                    ${chart.date ?
                        `<div class="chart-meta-item">
                            <i class="fas fa-calendar"></i>
                            <span>${formatDate(chart.date)}</span>
                        </div>` : ''
                    }
                </div>
                <button class="chart-view-btn">
                    <i class="fas fa-eye"></i>
                    <span>View Chart</span>
                </button>
            </div>
        `;

        chartsGrid.appendChild(chartCard);
    });

    // Show grid, hide no results message
    chartsGrid.style.display = 'grid';
    noChartsMessage.style.display = 'none';
}

// Function to open chart in modal
function openChartModal(chart) {
    const modal = document.getElementById('chartModal');
    const modalTitle = document.getElementById('chartModalTitle');
    const chartViewer = document.getElementById('chartViewer');
    const chartDescription = document.getElementById('chartDescription');

    if (!modal || !modalTitle || !chartViewer || !chartDescription) return;

    // Set modal content
    modalTitle.textContent = chart.title;
    chartViewer.src = chart.pdfFile;
    chartDescription.textContent = chart.description || '';

    // Show modal
    modal.classList.add('active');

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close chart modal
function closeChartModal() {
    const modal = document.getElementById('chartModal');
    const chartViewer = document.getElementById('chartViewer');

    if (!modal || !chartViewer) return;

    // Clear iframe source to stop loading
    chartViewer.src = '';

    // Hide modal
    modal.classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = '';
}

// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.getElementById('chartModal');
    if (event.target === modal) {
        closeChartModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeChartModal();
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadOrganizationCharts();
});
