/**
 * ============================================================
 * WDT INTRANET - TES REPORTS & DASHBOARDS DATA
 * ============================================================
 *
 * Edit this file to manage TES Power BI dashboards and reports.
 * This file is only loaded on tes-reporting.html.
 *
 * ── DASHBOARDS ──────────────────────────────────────────────
 *   title              Dashboard name
 *   description        Short description, e.g. "Updated Weekly"
 *   embedUrl           Power BI embed URL (reportEmbed link)
 *   powerBiUrl         Direct Power BI share link (opens in new tab)
 *   lastRefreshed      YYYY-MM-DD — leave '' to hide
 *   supportingDocuments
 *       title          File display name
 *       url            Path to the file
 *       icon           'fa-file-pdf', 'fa-file-word', 'fa-file-excel', 'fa-file-powerpoint'
 *
 * ── REPORTING DOCUMENTS ─────────────────────────────────────
 *   category           Section heading
 *   icon               Font Awesome icon for the section
 *   documents[]
 *       title          Document display name
 *       url            Path to the file
 *       fileType       'PDF', 'Word', 'Excel', or 'PowerPoint'
 *       year           Fiscal year string, e.g. '2025-26'
 *       description    Optional short description (leave '' to hide)
 */

const POWERBI_DASHBOARDS = [

    {
        title: "MJSD Dashboard",
        description: "Updated Quarterly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=d4703c36-523c-4c27-97b9-7343ca010a40&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a",
        powerBiUrl: "https://app.powerbi.com/groups/7734e897-36f3-4cf6-9298-48ef371f15e1/reports/d4703c36-523c-4c27-97b9-7343ca010a40/4997272e5bc9504d2236?experience=power-bi",
        lastRefreshed: "",
        supportingDocuments: [
            //{ title: "Performance Measures and Balanced Scorecard Dashboard Guide", url: "documents/dashboards/tes/performanceMeasures/Performance Measures and Balanced Scorecard Dashboard Guide.docx", icon: "fa-file-word" },
        ]
    },


    {
        title: "Performance Measures and Balanced Scorecard",
        description: "Updated Weekly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=1839fccb-8863-4824-a80d-020ea9347c17&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a",
        powerBiUrl: "https://app.powerbi.com/links/TqeclCd5HZ?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare",
        lastRefreshed: "",
        supportingDocuments: [
            { title: "Performance Measures and Balanced Scorecard Dashboard Guide", url: "documents/dashboards/tes/performanceMeasures/Performance Measures and Balanced Scorecard Dashboard Guide.docx", icon: "fa-file-word" },
        ]
    },

    {
        title: "MCIEPP Dashboard",
        description: "Updated Weekly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=debef0f1-0a58-4be3-9197-5974ada42cbf&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&filterPaneEnabled=false",
        powerBiUrl: "https://app.powerbi.com/links/S6C3IVGSSV?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare&bookmarkGuid=e460cd2e-c93d-494a-9189-7dec4e5ded98",
        lastRefreshed: "",
        supportingDocuments: []
    },

    {
        title: "SPRS Dashboard",
        description: "Updated Monthly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3d1a6025-378a-4ec6-be49-f05c33eda7f3&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&filterPaneEnabled=false",
        powerBiUrl: "https://app.powerbi.com/links/TCjsPuqVg3?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare&bookmarkGuid=8de54f27-1722-4139-a5c7-c841fd5c53ed",
        lastRefreshed: "",
        supportingDocuments: []
    },

    {
        title: "EAPD Direct Client Services Dashboard",
        description: "Updated Monthly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=5599c1d2-4ef7-46aa-8de5-84a89dcd17ff&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&filterPaneEnabled=false",
        powerBiUrl: "https://app.powerbi.com/links/eMQGT_YqGO?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare",
        lastRefreshed: "",
        supportingDocuments: []
    },

    {
        title: "Skills Development Dashboard",
        description: "Dashboard is updated quarterly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f2621809-854b-4c47-8009-61a04adcd539&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a",
        powerBiUrl: "https://app.powerbi.com/links/_SJmd-cGjV?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare",
        lastRefreshed: "",
        supportingDocuments: [
            { title: "SDP Data Queries and Data Updates", url: "documents/dashboards/tes/skillsDevelopment/SDPDataQueriesAndDataUpdates.docx", icon: "fa-file-word" },
            { title: "SDP Features and Definitions", url: "documents/dashboards/tes/skillsDevelopment/SDPFeaturesAndDefinitions.docx", icon: "fa-file-word" },
            { title: "SDP Technical Overview", url: "documents/dashboards/tes/skillsDevelopment/SDPTechnicalOverview.docx", icon: "fa-file-word" }
        ]
    },

];

const REPORTING_DOCUMENTS = [

    {
        category: "TES Reports",
        icon: "fa-file-contract",
        documents: [
            { title: "TES Staff Engagement Report - Final - April 2026", url: "documents/reports/TES Staff Engagement Report - Final - April 2026.pdf", fileType: "PDF", year: "2026-27", description: "" },
            { title: "Staff Development and Training Committee Report - FY 2026-27 - Shareable", url: "documents/reports/Staff Development and Training Committee Report - FY 2026-27 - Shareable.docx", fileType: "Word", year: "2026-27", description: "" },
        ]
    },

];
