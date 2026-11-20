
/* ==========================================
   IoT SMART MONITOR - APPLICATION
========================================== */


/* ==========================================
   1. DEMO DATA
========================================== */

const sensors = [
    {
        id: "SENSOR-001",
        name: "Temperature 01",
        type: "Temperature",
        value: "24.5 °C",
        online: true
    },
    {
        id: "SENSOR-002",
        name: "Humidity 01",
        type: "Humidity",
        value: "58 %",
        online: true
    },
    {
        id: "SENSOR-003",
        name: "Temperature 02",
        type: "Temperature",
        value: "29.8 °C",
        online: true
    },
    {
        id: "SENSOR-004",
        name: "Humidity 02",
        type: "Humidity",
        value: "--",
        online: false
    }
];

const alerts = [
    {
        title: "High Temperature Detected",
        description: "Sensor 003 - Temperature exceeded threshold",
        level: "HIGH",
        critical: false
    },
    {
        title: "Sensor Offline",
        description: "Sensor 004 - Connection lost",
        level: "CRITICAL",
        critical: true
    }
];


/* ==========================================
   2. LOGIN
========================================== */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const message = document.getElementById("loginMessage");

    if (
        email === "admin@example.com" &&
        password === "admin123"
    ) {

        message.textContent = "";

        document.getElementById("loginPage")
            .classList.add("hidden");

        document.getElementById("appPage")
            .classList.remove("hidden");

        initializeDashboard();

    } else {

        message.textContent =
            "Email ou mot de passe incorrect.";

        message.style.color = "#fb7185";

    }

});


/* ==========================================
   3. NAVIGATION
========================================== */

const navButtons = document.querySelectorAll(".nav-btn");

const pages = document.querySelectorAll(".page");

const pageTitles = {

    dashboard: "Dashboard Overview",

    sensors: "Sensor Management",

    monitoring: "Real-Time Monitoring",

    analytics: "AI Analytics",

    alerts: "Alerts Management"

};

navButtons.forEach(button => {

    button.addEventListener("click", function() {

        const pageName = this.dataset.page;

        // Hide all pages

        pages.forEach(page => {
            page.classList.add("hidden");
        });

        // Display selected page

        document.getElementById(pageName)
            .classList.remove("hidden");

        // Update active navigation

        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        // Update title

        document.getElementById("pageTitle").textContent =
            pageTitles[pageName];

        // Initialize monitoring chart when needed

        if (pageName === "monitoring") {
            initializeMonitoringChart();
        }

    });

});


/* ==========================================
   4. DASHBOARD INITIALIZATION
========================================== */

function initializeDashboard() {

    updateStatistics();

    displayAlerts();

    displaySensors();

    initializeCharts();

}


/* ==========================================
   5. UPDATE STATISTICS
========================================== */

function updateStatistics() {

    const total = sensors.length;

    const online = sensors.filter(sensor => sensor.online).length;

    document.getElementById("totalSensors").textContent = total;

    document.getElementById("onlineSensors").textContent = online;

    document.getElementById("activeAlerts").textContent = alerts.length;

}


/* ==========================================
   6. DISPLAY ALERTS
========================================== */

function createAlertElement(alert) {

    const item = document.createElement("div");

    item.className = "alert-item";

    const icon = document.createElement("span");

    icon.className = "alert-icon";

    icon.innerHTML = alert.critical
        ? '<i class="fa-solid fa-circle-exclamation"></i>'
        : '<i class="fa-solid fa-triangle-exclamation"></i>';

    const content = document.createElement("div");

    const title = document.createElement("strong");

    title.textContent = alert.title;

    const description = document.createElement("small");

    description.textContent = alert.description;

    content.appendChild(title);

    content.appendChild(description);

    const level = document.createElement("span");

    level.className = alert.critical
        ? "alert-level critical"
        : "alert-level";

    level.textContent = alert.level;

    item.appendChild(icon);

    item.appendChild(content);

    item.appendChild(level);

    return item;

}


function displayAlerts() {

    const recentContainer = document.getElementById("recentAlerts");

    const allContainer = document.getElementById("allAlerts");

    recentContainer.innerHTML = "";

    allContainer.innerHTML = "";

    alerts.forEach(alert => {

        recentContainer.appendChild(
            createAlertElement(alert)
        );

        allContainer.appendChild(
            createAlertElement(alert)
        );

    });

    document.querySelector(".nav-count").textContent =
        alerts.length;

}


/* ==========================================
   7. DISPLAY SENSORS
========================================== */

function displaySensors() {

    const tbody = document.getElementById("sensorTableBody");

    tbody.innerHTML = "";

    sensors.forEach(sensor => {

        const row = document.createElement("tr");

        const values = [
            sensor.id,
            sensor.name,
            sensor.type,
            sensor.value
        ];

        values.forEach(value => {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });

        const statusCell = document.createElement("td");

        const status = document.createElement("span");

        status.className = sensor.online
            ? "status-online"
            : "status-offline";

        status.textContent = sensor.online
            ? "Online"
            : "Offline";

        statusCell.appendChild(status);

        row.appendChild(statusCell);

        tbody.appendChild(row);

    });

}


/* ==========================================
   8. ADD SENSOR
========================================== */

document.getElementById("addSensorBtn")
    .addEventListener("click", function() {

        const sensorId = prompt("Enter Sensor ID:");

        if (!sensorId || !sensorId.trim()) {
            return;
        }

        const id = sensorId.trim();

        const exists = sensors.some(sensor =>
            sensor.id.toLowerCase() === id.toLowerCase()
        );

        if (exists) {

            alert("This Sensor ID already exists.");

            return;

        }

        sensors.push({

            id: id,

            name: "New Sensor",

            type: "Not assigned",

            value: "--",

            online: false

        });

        displaySensors();

        updateStatistics();

        alert("Sensor added successfully!");

    });


/* ==========================================
   9. TEMPERATURE CHART
========================================== */

let temperatureChart = null;

function initializeCharts() {

    if (typeof Chart === "undefined") {

        alert("Chart.js could not load. Check your internet connection.");

        return;

    }

    Chart.defaults.color = "#9295aa";

    Chart.defaults.font.family = "Segoe UI";

    if (temperatureChart) {
        temperatureChart.destroy();
    }

    const context = document.getElementById("temperatureChart");

    temperatureChart = new Chart(context, {

        type: "line",

        data: {

            labels: [
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00"
            ],

            datasets: [{

                label: "Temperature °C",

                data: [21, 22, 23, 24, 27, 25, 28, 26],

                borderColor: "#a855f7",

                backgroundColor: "rgba(168,85,247,0.12)",

                borderWidth: 2,

                pointBackgroundColor: "#a855f7",

                pointRadius: 3,

                fill: true,

                tension: 0.4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {
                        color: "#c4c2d8"
                    }

                }

            },

            scales: {

                x: {

                    grid: {
                        color: "#292c40"
                    }

                },

                y: {

                    beginAtZero: false,

                    grid: {
                        color: "#292c40"
                    }

                }

            }

        }

    });


    initializeSensorChart();

}


/* ==========================================
   10. SENSOR DOUGHNUT CHART
========================================== */

let sensorChart = null;

function initializeSensorChart() {

    if (sensorChart) {
        sensorChart.destroy();
    }

    const online = sensors.filter(sensor => sensor.online).length;

    const offline = sensors.length - online;

    const context = document.getElementById("sensorChart");

    sensorChart = new Chart(context, {

        type: "doughnut",

        data: {

            labels: ["Online", "Offline"],

            datasets: [{

                data: [online, offline],

                backgroundColor: [
                    "#20c997",
                    "#a855f7"
                ],

                borderWidth: 0,

                hoverOffset: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "72%",

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {
                        color: "#c4c2d8",
                        padding: 20
                    }

                }

            }

        }

    });

}


/* ==========================================
   11. MONITORING CHART
========================================== */

let monitoringChart = null;

function initializeMonitoringChart() {

    if (typeof Chart === "undefined") {
        return;
    }

    if (monitoringChart) {
        monitoringChart.destroy();
    }

    const context = document.getElementById("monitoringChart");

    monitoringChart = new Chart(context, {

        type: "line",

        data: {

            labels: [
                "10:00",
                "10:05",
                "10:10",
                "10:15",
                "10:20",
                "10:25",
                "10:30"
            ],

            datasets: [{

                label: "Temperature",

                data: [22, 23, 23.5, 24.5, 25, 24, 26],

                borderColor: "#a855f7",

                backgroundColor: "rgba(168,85,247,0.12)",

                fill: true,

                tension: 0.4,

                borderWidth: 2

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    labels: {
                        color: "#c4c2d8"
                    }
                }

            },

            scales: {

                x: {
                    grid: {
                        color: "#292c40"
                    }
                },

                y: {
                    grid: {
                        color: "#292c40"
                    }
                }

            }

        }

    });

}


/* ==========================================
   12. LOGOUT
========================================== */

document.getElementById("logoutBtn")
    .addEventListener("click", function() {

        document.getElementById("appPage")
            .classList.add("hidden");

        document.getElementById("loginPage")
            .classList.remove("hidden");

        loginForm.reset();

        document.getElementById("loginMessage").textContent = "";

        // Return to dashboard

        pages.forEach(page => {
            page.classList.add("hidden");
        });

        document.getElementById("dashboard")
            .classList.remove("hidden");

        navButtons.forEach(button => {
            button.classList.remove("active");
        });

        document.querySelector('[data-page="dashboard"]')
            .classList.add("active");

        document.getElementById("pageTitle").textContent =
            "Dashboard Overview";

    });



