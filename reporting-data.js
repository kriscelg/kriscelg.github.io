// Bar Graph Data for 2025/26 Client Outcomes by Program
// Edit the values below to update the bar graphs on the reporting page

// Program name mappings (Acronym to Full Name)
const PROGRAM_NAMES = {
    "EAS": "Employment Assistance Services",
    "EAPD": "Employment Assistance for Persons with Disabilities",
    "SD": "Skills Development",
    "FJF": "First Jobs Fund",
    "PWY": "Programs With Youth",
    "EP": "Employment Partnerships"
};

const CLIENTS_SERVED_DATA = [
    { program: "EAS", q1: 8031, q2: 11564, q3: 15621, q4: 18546 },
    { program: "EAPD", q1: 1601, q2: 1713, q3: 1999, q4: 2168 },
    { program: "SD", q1: 2970, q2: 3575, q3: 3952, q4: 4355 },
    { program: "FJF", q1: 18, q2: 52, q3: 52, q4: 54 },
    { program: "PWY", q1: 686, q2: 922, q3: 1255, q4: 1482 },
    { program: "EP", q1: 661, q2: 818, q3: 1223, q4: 1398 }
];

const CLIENTS_EMPLOYED_DATA = [
    { program: "EAS", q1: 2140, q2: 4633, q3: 6932, q4: 9254 },
    { program: "EAPD", q1: 40, q2: 94, q3: 134, q4: 194 },
    { program: "SD", q1: 432, q2: 795, q3: 1182, q4: 1472 },
    { program: "FJF", q1: 14, q2: 14, q3: 16, q4: 34 },
    { program: "PWY", q1: 152, q2: 367, q3: 544, q4: 898 },
    { program: "EP", q1: 475, q2: 869, q3: 868, q4: 1169 }
];

// Power BI Dashboard Embeds
// Replace the src URL with your actual Power BI embed URL
const POWERBI_DASHBOARDS = [

    {
        title: "Performance Measures and Balanced Scoredcard",
        description: "Updated Weekly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=1839fccb-8863-4824-a80d-020ea9347c17&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a",
        powerBiUrl: "https://app.powerbi.com/links/TqeclCd5HZ?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare",
        lastRefreshed: "", // Format: YYYY-MM-DD
        supportingDocuments: [
            // Add supporting documents here
            // { title: "User Guide", url: "link-to-document", icon: "fa-file-pdf" },
            // { title: "Data Dictionary", url: "link-to-document", icon: "fa-file-word" }
        ]
    },

    {
        title: "MCIEPP Dashboard",
        description: "Updated Weekly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=debef0f1-0a58-4be3-9197-5974ada42cbf&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&filterPaneEnabled=false",
        powerBiUrl: "https://app.powerbi.com/links/S6C3IVGSSV?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare&bookmarkGuid=e460cd2e-c93d-494a-9189-7dec4e5ded98",
        lastRefreshed: "", // Format: YYYY-MM-DD
        supportingDocuments: []
    },

    {
        title: "SPRS Dashboard",
        description: "Updated Monthly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3d1a6025-378a-4ec6-be49-f05c33eda7f3&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&filterPaneEnabled=false",
        powerBiUrl: "https://app.powerbi.com/links/TCjsPuqVg3?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare&bookmarkGuid=8de54f27-1722-4139-a5c7-c841fd5c53ed",
        lastRefreshed: "", // Format: YYYY-MM-DD
        supportingDocuments: []
    },
    {
        title: "EAPD Direct Client Services Dashboard",
        description: "Updated Monthly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=5599c1d2-4ef7-46aa-8de5-84a89dcd17ff&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&filterPaneEnabled=false",
        powerBiUrl: "https://app.powerbi.com/links/eMQGT_YqGO?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare",
        lastRefreshed: "", // Format: YYYY-MM-DD
        supportingDocuments: []
    },

    {
        title: "Skills Development Dashboard",
        description: "Dashboard is updated quarterly",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f2621809-854b-4c47-8009-61a04adcd539&autoAuth=true&ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a",
        powerBiUrl: "https://app.powerbi.com/links/_SJmd-cGjV?ctid=abf64de9-2a5c-4d77-baa2-a76265367d3a&pbi_source=linkShare",
        lastRefreshed: "", // Format: YYYY-MM-DD
        supportingDocuments: []
    },
];

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to calculate nice axis intervals
function calculateAxisScale(maxValue) {
    // Round up to next nice number
    const magnitude = Math.pow(10, Math.floor(Math.log10(maxValue)));
    const normalizedMax = maxValue / magnitude;

    let niceMax;
    if (normalizedMax <= 1) niceMax = 1;
    else if (normalizedMax <= 2) niceMax = 2;
    else if (normalizedMax <= 5) niceMax = 5;
    else niceMax = 10;

    const axisMax = niceMax * magnitude;
    const interval = axisMax / 5; // 5 gridlines

    return { axisMax, interval };
}

// Function to generate Y-axis
function generateYAxis(axisMax, interval) {
    let html = '<div class="y-axis">';

    // Generate 6 labels (0 to max, with 5 intervals)
    for (let i = 5; i >= 0; i--) {
        const value = (interval * i);
        html += `<div class="y-axis-label">${formatNumber(Math.round(value))}</div>`;
    }

    html += '</div>';
    return html;
}

// Function to generate gridlines (horizontal for vertical bars)
function generateGridlines() {
    let html = '<div class="gridlines">';

    // 5 horizontal gridlines
    for (let i = 0; i < 5; i++) {
        html += '<div class="gridline"></div>';
    }

    html += '</div>';
    return html;
}

// Function to generate Clients Served bar graph
function generateClientsServedGraph() {
    const container = document.getElementById('clients-served-graph');
    if (!container) return;

    // Get all quarters that have data
    const allValues = CLIENTS_SERVED_DATA.flatMap(d => [d.q1, d.q2, d.q3, d.q4].filter(v => v !== null));
    const maxValue = Math.max(...allValues);
    const { axisMax, interval } = calculateAxisScale(maxValue);

    let html = '<div class="bar-graph-wrapper">';

    // Add Y-axis
    html += generateYAxis(axisMax, interval);

    // Add graph area with gridlines
    html += '<div class="bar-graph-area">';
    html += generateGridlines();
    html += '<div class="bar-graph-container">';

    CLIENTS_SERVED_DATA.forEach(data => {
        const quarters = [];
        if (data.q1 !== null) quarters.push({ value: data.q1, class: 'q1-bar' });
        if (data.q2 !== null) quarters.push({ value: data.q2, class: 'q2-bar' });
        if (data.q3 !== null) quarters.push({ value: data.q3, class: 'q3-bar' });
        if (data.q4 !== null) quarters.push({ value: data.q4, class: 'q4-bar' });

        html += `<div class="bar-group">`;
        html += `<div class="bars">`;

        quarters.forEach(q => {
            const height = (q.value / axisMax) * 100;
            html += `
                <div class="bar ${q.class}" style="height: ${height}%">
                    <span class="bar-value">${formatNumber(q.value)}</span>
                </div>
            `;
        });

        html += `</div>`; // bars
        html += `<div class="bar-label" title="${PROGRAM_NAMES[data.program]}">${data.program}</div>`;
        html += `</div>`; // bar-group
    });

    html += '</div>'; // bar-graph-container
    html += '</div>'; // bar-graph-area
    html += '</div>'; // bar-graph-wrapper

    container.innerHTML = html;
}

// Function to generate Clients Employed bar graph
function generateClientsEmployedGraph() {
    const container = document.getElementById('clients-employed-graph');
    if (!container) return;

    // Get all quarters that have data
    const allValues = CLIENTS_EMPLOYED_DATA.flatMap(d => [d.q1, d.q2, d.q3, d.q4].filter(v => v !== null));
    const maxValue = Math.max(...allValues);
    const { axisMax, interval } = calculateAxisScale(maxValue);

    let html = '<div class="bar-graph-wrapper">';

    // Add Y-axis
    html += generateYAxis(axisMax, interval);

    // Add graph area with gridlines
    html += '<div class="bar-graph-area">';
    html += generateGridlines();
    html += '<div class="bar-graph-container">';

    CLIENTS_EMPLOYED_DATA.forEach(data => {
        const quarters = [];
        if (data.q1 !== null) quarters.push({ value: data.q1, class: 'q1-bar' });
        if (data.q2 !== null) quarters.push({ value: data.q2, class: 'q2-bar' });
        if (data.q3 !== null) quarters.push({ value: data.q3, class: 'q3-bar' });
        if (data.q4 !== null) quarters.push({ value: data.q4, class: 'q4-bar' });

        html += `<div class="bar-group">`;
        html += `<div class="bars">`;

        quarters.forEach(q => {
            const height = (q.value / axisMax) * 100;
            html += `
                <div class="bar ${q.class}" style="height: ${height}%">
                    <span class="bar-value">${formatNumber(q.value)}</span>
                </div>
            `;
        });

        html += `</div>`; // bars
        html += `<div class="bar-label" title="${PROGRAM_NAMES[data.program]}">${data.program}</div>`;
        html += `</div>`; // bar-group
    });

    html += '</div>'; // bar-graph-container
    html += '</div>'; // bar-graph-area
    html += '</div>'; // bar-graph-wrapper

    container.innerHTML = html;
}

// Function to format date for display
function formatDate(dateString) {
    if (!dateString) return "Not available";
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to generate Power BI dashboard embeds
function generatePowerBIDashboards() {
    const container = document.getElementById('powerbi-dashboards-container');
    if (!container) return;

    let html = '';

    POWERBI_DASHBOARDS.forEach((dashboard, index) => {
        const iframeId = `powerbi-iframe-${index}`;

        html += `
            <div class="powerbi-dashboard-item">
                <div class="powerbi-header">
                    <div class="powerbi-info">
                        <h3>${dashboard.title}</h3>
                        <p>${dashboard.description}</p>
                        ${dashboard.lastRefreshed ?
                            `<p class="last-refreshed">
                                <i class="fas fa-sync-alt"></i>
                                <span>Last Refreshed: ${formatDate(dashboard.lastRefreshed)}</span>
                            </p>` :
                            ''
                        }
                    </div>
                    <div class="powerbi-actions">
                        ${dashboard.powerBiUrl ?
                            `<a href="${dashboard.powerBiUrl}" target="_blank" class="open-powerbi-btn" title="Open in Power BI">
                                <i class="fas fa-external-link-alt"></i>
                                <span>Open in Power BI</span>
                            </a>` :
                            ''
                        }
                    </div>
                </div>
                ${dashboard.embedUrl ?
                    `<div class="iframe-wrapper">
                        <iframe id="${iframeId}" src="${dashboard.embedUrl}" frameborder="0" allowFullScreen="true"></iframe>
                    </div>` :
                    `<div class="powerbi-placeholder">
                        <i class="fas fa-chart-bar"></i>
                        <p>Power BI Dashboard ${index + 1}</p>
                        <p class="placeholder-instructions">Add your Power BI embed URL in reporting-data.js</p>
                    </div>`
                }
                ${dashboard.supportingDocuments && dashboard.supportingDocuments.length > 0 ?
                    `<div class="supporting-documents-section">
                        <h4 class="supporting-docs-title">
                            <i class="fas fa-folder-open"></i>
                            Supporting Documents
                        </h4>
                        <div class="supporting-docs-grid">
                            ${dashboard.supportingDocuments.map(doc => `
                                <a href="${doc.url}" class="supporting-doc-item" target="_blank" rel="noopener noreferrer">
                                    <div class="doc-icon-wrapper">
                                        <i class="fas ${doc.icon}"></i>
                                    </div>
                                    <span class="doc-title">${doc.title}</span>
                                    <i class="fas fa-external-link-alt doc-external-icon"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>` :
                    ''
                }
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize graphs when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateClientsServedGraph();
    generateClientsEmployedGraph();
    generatePowerBIDashboards();
});
