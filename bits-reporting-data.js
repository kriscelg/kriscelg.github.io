/**
 * ============================================================
 * WDT INTRANET - BITS REPORTS & DASHBOARDS DATA
 * ============================================================
 *
 * Add Power BI dashboards and reporting documents here.
 * This file is only loaded on bits-reporting.html.
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
 *       url            Path to the file, e.g. 'documents/dashboards/bits/filename.docx'
 *       icon           Font Awesome icon: 'fa-file-pdf', 'fa-file-word',
 *                      'fa-file-excel', 'fa-file-powerpoint'
 *
 * ── REPORTING DOCUMENTS ─────────────────────────────────────
 *
 *   category           Section heading, e.g. "BITS Annual Reports"
 *   icon               Font Awesome icon for the section header
 *   documents[]
 *       title          Document display name
 *       url            Path to the file
 *       fileType       'PDF', 'Word', 'Excel', or 'PowerPoint'
 *       year           Fiscal year string, e.g. '2025-26'
 *       description    Optional short description (leave '' to hide)
 */

const BITS_POWERBI_DASHBOARDS = [

    // ── ADD DASHBOARDS BELOW ───────────────────────────────────

    // {
    //     title: "BITS Overview Dashboard",
    //     description: "Updated Monthly",
    //     embedUrl: "",
    //     powerBiUrl: "",
    //     lastRefreshed: "",
    //     supportingDocuments: [
    //         // { title: "Dashboard Guide", url: "documents/dashboards/bits/guide.docx", icon: "fa-file-word" },
    //     ]
    // },

];

const BITS_REPORTING_DOCUMENTS = [

    // ── ADD REPORT CATEGORIES BELOW ───────────────────────────

    // {
    //     category: "BITS Annual Reports",
    //     icon: "fa-file-contract",
    //     documents: [
    //         { title: "BITS Annual Report 2024-25", url: "documents/reports/bits/bits-annual-report-2024-25.pdf", fileType: "PDF", year: "2024-25", description: "" },
    //     ]
    // },

];
