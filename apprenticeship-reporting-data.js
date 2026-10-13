/**
 * ============================================================
 * WDT INTRANET - APPRENTICESHIP REPORTS & DASHBOARDS DATA
 * ============================================================
 *
 * Add Power BI dashboards and reporting documents here.
 * This file is only loaded on apprenticeship-reporting.html.
 *
 * ── DASHBOARDS ──────────────────────────────────────────────
 *
 *   title              Dashboard name shown on the page
 *   description        Short description, e.g. "Updated Monthly"
 *   embedUrl           Power BI embed URL (reportEmbed link)
 *                      Leave '' to hide the iframe
 *   powerBiUrl         Direct Power BI share link (opens in new tab)
 *                      Leave '' to hide the "Open in Power BI" button
 *   lastRefreshed      Date data was last refreshed — YYYY-MM-DD
 *                      Leave '' to hide the refresh date
 *   supportingDocuments  Array of related files shown below the dashboard
 *       title          File display name
 *       url            Path to the file, e.g. 'documents/dashboards/am/filename.docx'
 *       icon           Font Awesome icon: 'fa-file-pdf', 'fa-file-word',
 *                      'fa-file-excel', 'fa-file-powerpoint'
 *
 * ── REPORTING DOCUMENTS ─────────────────────────────────────
 *
 *   category           Section heading, e.g. "AM Annual Reports"
 *   icon               Font Awesome icon for the section header
 *   documents[]
 *       title          Document display name
 *       url            Path to the file
 *       fileType       'PDF', 'Word', 'Excel', or 'PowerPoint'
 *       year           Fiscal year string, e.g. '2025-26'
 *       description    Optional short description (leave '' to hide)
 */

const AM_POWERBI_DASHBOARDS = [

    // ── ADD DASHBOARDS BELOW ───────────────────────────────────

    // {
    //     title: "Apprenticeship Overview Dashboard",
    //     description: "Updated Monthly",
    //     embedUrl: "",
    //     powerBiUrl: "",
    //     lastRefreshed: "",
    //     supportingDocuments: [
    //         // { title: "Dashboard Guide", url: "documents/dashboards/am/guide.docx", icon: "fa-file-word" },
    //     ]
    // },

];

const AM_REPORTING_DOCUMENTS = [

    // ── ADD REPORT CATEGORIES BELOW ───────────────────────────

    // {
    //     category: "AM Annual Reports",
    //     icon: "fa-file-contract",
    //     documents: [
    //         { title: "Apprenticeship Annual Report 2024-25", url: "documents/reports/am/am-annual-report-2024-25.pdf", fileType: "PDF", year: "2024-25", description: "" },
    //     ]
    // },

];
