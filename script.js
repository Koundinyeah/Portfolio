function showProject(project) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    if (project === "isl") {
        text.innerText =
            "ISL Gesture Translation converts Indian Sign Language gestures into readable text, improving accessibility and communication.";
    } else {
        text.innerText =
            "Smart Warehouse Asset Tracker monitors temperature, humidity, and asset status using real-time dashboards.";
    }

    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
