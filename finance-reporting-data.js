/**
 * ============================================================
 * WDT INTRANET - FINANCE REPORTS & DASHBOARDS DATA
 * ============================================================
 *
 * Add Power BI dashboards and reporting documents here.
 * This file is only loaded on finance-reporting.html.
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
 *       url            Path to the file, e.g. 'documents/dashboards/finance/filename.docx'
 *       icon           Font Awesome icon: 'fa-file-pdf', 'fa-file-word',
 *                      'fa-file-excel', 'fa-file-powerpoint'
 *
 * ── REPORTING DOCUMENTS ─────────────────────────────────────
 *
 *   category           Section heading, e.g. "Finance Annual Reports"
 *   icon               Font Awesome icon for the section header
 *   documents[]
 *       title          Document display name
 *       url            Path to the file
 *       fileType       'PDF', 'Word', 'Excel', or 'PowerPoint'
 *       year           Fiscal year string, e.g. '2025-26'
 *       description    Optional short description (leave '' to hide)
 */

const FINANCE_POWERBI_DASHBOARDS = [

    // ── ADD DASHBOARDS BELOW ───────────────────────────────────

    // {
    //     title: "Finance Overview Dashboard",
    //     description: "Updated Monthly",
    //     embedUrl: "",
    //     powerBiUrl: "",
    //     lastRefreshed: "",
    //     supportingDocuments: [
    //         // { title: "Dashboard Guide", url: "documents/dashboards/finance/guide.docx", icon: "fa-file-word" },
    //     ]
    // },

];

const FINANCE_REPORTING_DOCUMENTS = [

    // ── ADD REPORT CATEGORIES BELOW ───────────────────────────

    {
        category: "Finance Annual Reports",
        icon: "fa-file-contract",
        documents: [
            { title: "Blocked and Unblocked Payments Report", url: "http://mbpweb1063p.shared.mbgov.ca/Reports/report/Education%20and%20Training/ICM/Finance/Blocked%20and%20Unblocked%20Payments", fileType: "SSRS", year: "", description: "" },
            { title: "Blocked Payments Report", url: "http://mbpweb1063p.shared.mbgov.ca/Reports/report/Education%20and%20Training/ICM/Finance/Blocked%20Payments", fileType: "SSRS", year: "", description: "" },
            { title: "Payments Processed to SAP Pending Cheque History Report", url: "http://mbpweb1063p.shared.mbgov.ca/Reports/report/Education%20and%20Training/ICM/Finance/Payments%20processed%20to%20SAP%20pending%20cheque%20history", fileType: "SSRS", year: "", description: "" },
            { title: "Variance Report", url: "http://mbpweb1063p.shared.mbgov.ca/Reports/report/Education%20and%20Training/ICM/Finance/Variance%20Report", fileType: "SSRS", year: "", description: "" },
        ]
    },

];
