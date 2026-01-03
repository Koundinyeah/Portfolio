function openModal(project) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    if (project === "isl") {
        text.innerText =
            "ISL Gesture Translation: Detects hand gestures and converts them into readable text for assistive communication.";
    } else {
        text.innerText =
            "Smart Warehouse Asset Tracker: Tracks temperature, humidity, and asset status with real-time dashboard analytics.";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
