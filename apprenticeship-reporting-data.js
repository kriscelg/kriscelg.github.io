/**
 * ============================================================
 * WDT INTRANET - APPRENTICESHIP REPORTS & DASHBOARDS DATA
 * ============================================================
 *
 * Add Power BI dashboards and reporting documents here.
 * This file is only loaded on apprenticeship-reporting.html.
 *
 * \u2500\u2500 DASHBOARDS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 *
 *   title              Dashboard name shown on the page
 *   description        Short description, e.g. "Updated Monthly"
 *   embedUrl           Power BI embed URL (reportEmbed link)
 *                      Leave '' to hide the iframe
 *   powerBiUrl         Direct Power BI share link (opens in new tab)
 *                      Leave '' to hide the "Open in Power BI" button
 *   lastRefreshed      Date data was last refreshed \u2014 YYYY-MM-DD
 *                      Leave '' to hide the refresh date
 *   supportingDocuments  Array of related files shown below the dashboard
 *       title          File display name
 *       url            Path to the file, e.g. 'documents/dashboards/am/filename.docx'
 *       icon           Font Awesome icon: 'fa-file-pdf', 'fa-file-word',
 *                      'fa-file-excel', 'fa-file-powerpoint'
 *
 * \u2500\u2500 REPORTING DOCUMENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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

    // \u2500\u2500 ADD DASHBOARDS BELOW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

    {
        title: "Journeyperson Certification Verification Tool",
        description: "",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=71886b5a-fab4-4fa3-814a-ea63f2b1171e&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a",
        powerBiUrl: "https://app.powerbi.com/groups/8c3db528-5912-4f96-8680-0decaf3666dc/reports/71886b5a-fab4-4fa3-814a-ea63f2b1171e/a3ae80352378907cbe62?experience=power-bi",
        lastRefreshed: "",
        supportingDocuments: [
            //{ title: "Dashboard Guide", url: "documents/dashboards/sib/guide.docx", icon: "fa-file-word" },
        ]
    },

];

const AM_REPORTING_DOCUMENTS = [

    // \u2500\u2500 ADD REPORT CATEGORIES BELOW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

    // {
    //     category: "AM Annual Reports",
    //     icon: "fa-file-contract",
    //     documents: [
    //         { title: "Apprenticeship Annual Report 2024-25", url: "documents/reports/am/am-annual-report-2024-25.pdf", fileType: "PDF", year: "2024-25", description: "" },
    //     ]
    // },

];
