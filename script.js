const download = document.getElementById("download");
const upload = document.getElementById("upload");
const sent = document.getElementById("sent");
const received = document.getElementById("received");

const status = document.getElementById("status");
const lastUpdate = document.getElementById("lastUpdate");

const canvas = document.getElementById("trafficChart");
const ctx = canvas.getContext("2d");

let downloadData = Array(30).fill(0);
let uploadData = Array(30).fill(0);

function formatSpeed(bytes) {
    if (bytes >= 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + " MB/s";
    }

    if (bytes >= 1024) {
        return (bytes / 1024).toFixed(2) + " KB/s";
    }

    return bytes + " B/s";
}

function formatMB(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function drawChart() {
    const width = canvas.clientWidth;
    const height = 150;
    const ratio = window.devicePixelRatio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const maxValue = Math.max(
        10,
        ...downloadData,
        ...uploadData
    ) * 1.2;

    // Grid lines
    ctx.strokeStyle = "rgba(80,150,220,0.2)";
    ctx.lineWidth = 1;

    for (let i = 1; i <= 4; i++) {
        const y = i * height / 5;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    function drawLine(data, color) {
        ctx.beginPath();

        data.forEach((value, index) => {
            const x = index / (data.length - 1) * width;

            const y = height - 8 -
                (value / maxValue) * (height - 20);

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;

        ctx.stroke();

        ctx.shadowBlur = 0;
    }

    drawLine(downloadData, "#168cff");
    drawLine(uploadData, "#24e9a5");
}

async function updateDashboard() {
    try {
        const response = await fetch("/api/stats");

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        download.textContent =
            formatSpeed(data.download);

        upload.textContent =
            formatSpeed(data.upload);

        sent.textContent =
            formatMB(data.sent);

        received.textContent =
            formatMB(data.received);

        status.textContent = "Connected";

        lastUpdate.textContent = data.time;

        downloadData.push(data.download);
        downloadData.shift();

        uploadData.push(data.upload);
        uploadData.shift();

        drawChart();

    } catch (error) {
        status.textContent = "Disconnected";
        lastUpdate.textContent = "Server unavailable";

        console.error(error);
    }
}

updateDashboard();

setInterval(updateDashboard, 1500);

window.addEventListener("resize", drawChart);
