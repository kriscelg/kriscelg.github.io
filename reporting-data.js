// Bar Graph Data for 2025/26 Client Outcomes by Program
// Edit the values below to update the bar graphs on the reporting page

const CLIENTS_SERVED_DATA = [
    { program: "EAS", q1: 8031, q2: 11564, q3: null, q4: null },
    { program: "EAPD", q1: 1601, q2: 1713, q3: null, q4: null },
    { program: "SD", q1: 2970, q2: 3575, q3: null, q4: null },
    { program: "FJF", q1: 18, q2: 52, q3: null, q4: null },
    { program: "FWY", q1: 686, q2: 922, q3: null, q4: null },
    { program: "EP", q1: 661, q2: 818, q3: null, q4: null }
];

const CLIENTS_EMPLOYED_DATA = [
    { program: "EAS", q1: 2140, q2: 4633, q3: null, q4: null },
    { program: "EAPD", q1: 40, q2: 94, q3: null, q4: null },
    { program: "SD", q1: 432, q2: 795, q3: null, q4: null },
    { program: "FJF", q1: 14, q2: 14, q3: null, q4: null },
    { program: "FWY", q1: 152, q2: 367, q3: null, q4: null },
    { program: "EP", q1: 475, q2: 869, q3: null, q4: null }
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
        html += `<div class="bar-label">${data.program}</div>`;
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
        html += `<div class="bar-label">${data.program}</div>`;
        html += `</div>`; // bar-group
    });

    html += '</div>'; // bar-graph-container
    html += '</div>'; // bar-graph-area
    html += '</div>'; // bar-graph-wrapper

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
