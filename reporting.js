/**
 * ============================================================
 * WDT INTRANET - SHARED REPORTING PAGE SCRIPT
 * ============================================================
 *
 * Shared rendering functions for TES and Apprenticeship reporting pages.
 * Each page loads its own data file first, then this script.
 *
 * TES page    → tes-reporting-data.js  (POWERBI_DASHBOARDS, REPORTING_DOCUMENTS)
 * AM page     → apprenticeship-reporting-data.js  (AM_POWERBI_DASHBOARDS, AM_REPORTING_DOCUMENTS)
 */

(function () {

    // ── Helpers ────────────────────────────────────────────────

    function formatDate(ds) {
        if (!ds) return '';
        const d = new Date(ds);
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function fileIcon(type) {
        return { PDF: 'fa-file-pdf', Word: 'fa-file-word', Excel: 'fa-file-excel', PowerPoint: 'fa-file-powerpoint' }[type] || 'fa-file';
    }

    // ── Dashboard renderer ─────────────────────────────────────

    function renderDashboards(dashboards, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (!dashboards || dashboards.length === 0) {
            container.innerHTML = `
                <div class="report-docs-empty">
                    <i class="fas fa-tachometer-alt"></i>
                    <p>No dashboards have been posted yet. Check back later or contact your supervisor for access details.</p>
                </div>`;
            return;
        }

        container.innerHTML = dashboards.map((d, i) => `
            <div class="powerbi-dashboard-item">
                <div class="powerbi-header">
                    <div class="powerbi-info">
                        <h3>${d.title}</h3>
                        <p>${d.description}</p>
                        ${d.lastRefreshed ? `<p class="last-refreshed"><i class="fas fa-sync-alt"></i> Last Refreshed: ${formatDate(d.lastRefreshed)}</p>` : ''}
                    </div>
                    <div class="powerbi-actions">
                        ${d.powerBiUrl ? `<a href="${d.powerBiUrl}" target="_blank" class="open-powerbi-btn" title="Open in Power BI"><i class="fas fa-external-link-alt"></i><span>Open in Power BI</span></a>` : ''}
                    </div>
                </div>
                ${d.embedUrl
                    ? `<div class="iframe-wrapper"><iframe id="powerbi-iframe-${i}" src="${d.embedUrl}" frameborder="0" allowFullScreen="true"></iframe></div>`
                    : `<div class="powerbi-placeholder"><i class="fas fa-chart-bar"></i><p>Power BI Dashboard ${i + 1}</p><p class="placeholder-instructions">Add your Power BI embed URL in the data file.</p></div>`
                }
                ${d.supportingDocuments && d.supportingDocuments.length > 0 ? `
                    <div class="supporting-documents-section">
                        <h4 class="supporting-docs-title"><i class="fas fa-folder-open"></i> Supporting Documents</h4>
                        <div class="supporting-docs-grid">
                            ${d.supportingDocuments.map(doc => `
                                <a href="${doc.url}" class="supporting-doc-item" target="_blank" rel="noopener noreferrer">
                                    <div class="doc-icon-wrapper"><i class="fas ${doc.icon}"></i></div>
                                    <span class="doc-title">${doc.title}</span>
                                    <i class="fas fa-external-link-alt doc-external-icon"></i>
                                </a>`).join('')}
                        </div>
                    </div>` : ''}
            </div>`).join('');
    }

    // ── Report document renderer ───────────────────────────────

    function renderReports(categories, containerId, countId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const activeCats = (categories || []).filter(c => c.documents && c.documents.length > 0);
        const totalDocs = activeCats.reduce((sum, c) => sum + c.documents.length, 0);

        if (totalDocs === 0) {
            container.innerHTML = `
                <div class="report-docs-empty">
                    <i class="fas fa-folder-open"></i>
                    <p>No reports have been posted yet. Check back later or contact your supervisor for more information.</p>
                </div>`;
            return;
        }

        const countEl = document.getElementById(countId);
        if (countEl) { countEl.textContent = totalDocs; countEl.style.display = ''; }

        container.innerHTML = activeCats.map(cat => `
            <div class="report-doc-list">
                ${cat.documents.map(doc => `
                    <a href="${doc.url}" class="report-doc-row" target="_blank" rel="noopener noreferrer">
                        <div class="report-doc-row-icon"><i class="fas ${fileIcon(doc.fileType)}"></i></div>
                        <div class="report-doc-row-content">
                            <p class="report-doc-row-title">${doc.title}</p>
                            <div class="report-doc-row-meta">
                                ${doc.year ? `<span class="report-doc-row-year"><i class="fas fa-calendar"></i> ${doc.year}</span>` : ''}
                                <span class="report-doc-row-type">${doc.fileType}</span>
                            </div>
                        </div>
                        <div class="report-doc-row-arrow"><i class="fas fa-chevron-right"></i></div>
                    </a>`).join('')}
            </div>`).join('');
    }

    // ── Init ───────────────────────────────────────────────────

    document.addEventListener('DOMContentLoaded', function () {

        // TES page
        if (typeof POWERBI_DASHBOARDS !== 'undefined') {
            renderDashboards(POWERBI_DASHBOARDS, 'powerbi-dashboards-container');
        }
        if (typeof REPORTING_DOCUMENTS !== 'undefined') {
            renderReports(REPORTING_DOCUMENTS, 'reporting-docs-container', 'reporting-docs-count');
        }

        // AM page
        if (typeof AM_POWERBI_DASHBOARDS !== 'undefined') {
            renderDashboards(AM_POWERBI_DASHBOARDS, 'am-dashboards-container');
        }
        if (typeof AM_REPORTING_DOCUMENTS !== 'undefined') {
            renderReports(AM_REPORTING_DOCUMENTS, 'am-reports-container', 'am-reports-count');
        }

    });

})();
