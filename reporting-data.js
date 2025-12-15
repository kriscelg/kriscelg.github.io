// Bar Graph Data for 2025/26 Client Outcomes by Program
// Edit the values below to update the bar graphs on the reporting page

const CLIENTS_SERVED_DATA = [
    { program: "EAS", q1: 8031, q2: 11564 },
    { program: "EAPD", q1: 1601, q2: 1713 },
    { program: "SD", q1: 2970, q2: 3575 },
    { program: "FJF", q1: 18, q2: 52 },
    { program: "FWY", q1: 686, q2: 922 },
    { program: "EP", q1: 661, q2: 818 }
];

const CLIENTS_EMPLOYED_DATA = [
    { program: "EAS", q1: 2140, q2: 4633 },
    { program: "EAPD", q1: 40, q2: 94 },
    { program: "SD", q1: 432, q2: 795 },
    { program: "FJF", q1: 14, q2: 14 },
    { program: "FWY", q1: 152, q2: 367 },
    { program: "EP", q1: 475, q2: 869 }
];

// Power BI Dashboard Embeds
// Replace the src URL with your actual Power BI embed URL
const POWERBI_DASHBOARDS = [
    {
        title: "Dashboard 1",
        description: "Primary analytics dashboard",
        embedUrl: "" // Add your Power BI embed URL here
    },
    {
        title: "Dashboard 2",
        description: "Secondary metrics dashboard",
        embedUrl: "" // Add your Power BI embed URL here
    },
    {
        title: "Dashboard 3",
        description: "Additional reporting dashboard",
        embedUrl: "" // Add your Power BI embed URL here
    }
];

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to generate Clients Served bar graph
function generateClientsServedGraph() {
    const container = document.getElementById('clients-served-graph');
    if (!container) return;

    const maxValue = Math.max(...CLIENTS_SERVED_DATA.flatMap(d => [d.q1, d.q2]));

    let html = '<div class="bar-graph-container">';

    CLIENTS_SERVED_DATA.forEach(data => {
        const q1Height = (data.q1 / maxValue) * 100;
        const q2Height = (data.q2 / maxValue) * 100;

        html += `
            <div class="bar-group">
                <div class="bars">
                    <div class="bar q1-bar" style="height: ${q1Height}%">
                        <span class="bar-value">${formatNumber(data.q1)}</span>
                    </div>
                    <div class="bar q2-bar" style="height: ${q2Height}%">
                        <span class="bar-value">${formatNumber(data.q2)}</span>
                    </div>
                </div>
                <div class="bar-label">${data.program}</div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Function to generate Clients Employed bar graph
function generateClientsEmployedGraph() {
    const container = document.getElementById('clients-employed-graph');
    if (!container) return;

    const maxValue = Math.max(...CLIENTS_EMPLOYED_DATA.flatMap(d => [d.q1, d.q2]));

    let html = '<div class="bar-graph-container">';

    CLIENTS_EMPLOYED_DATA.forEach(data => {
        const q1Height = (data.q1 / maxValue) * 100;
        const q2Height = (data.q2 / maxValue) * 100;

        html += `
            <div class="bar-group">
                <div class="bars">
                    <div class="bar q1-bar" style="height: ${q1Height}%">
                        <span class="bar-value">${formatNumber(data.q1)}</span>
                    </div>
                    <div class="bar q2-bar" style="height: ${q2Height}%">
                        <span class="bar-value">${formatNumber(data.q2)}</span>
                    </div>
                </div>
                <div class="bar-label">${data.program}</div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Function to generate Power BI dashboard embeds
function generatePowerBIDashboards() {
    const container = document.getElementById('powerbi-dashboards-container');
    if (!container) return;

    let html = '';

    POWERBI_DASHBOARDS.forEach((dashboard, index) => {
        html += `
            <div class="powerbi-dashboard-item">
                <h3>${dashboard.title}</h3>
                <p>${dashboard.description}</p>
                ${dashboard.embedUrl ?
                    `<iframe src="${dashboard.embedUrl}" frameborder="0" allowFullScreen="true"></iframe>` :
                    `<div class="powerbi-placeholder">
                        <i class="fas fa-chart-bar"></i>
                        <p>Power BI Dashboard ${index + 1}</p>
                        <p class="placeholder-instructions">Add your Power BI embed URL in reporting-data.js</p>
                    </div>`
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
