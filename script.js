function toggleProject(card, projectId) {
    // Collapse all other cards first to keep layout clean
    const allCards = document.querySelectorAll('.project-card');

    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });

    // Toggle the clicked card
    card.classList.toggle('expanded');
}

// Optional: Close expanded card when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.project-card')) {
        document.querySelectorAll('.project-card').forEach(c => {
            c.classList.remove('expanded');
        });
    }
});

// Handle Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('senderName').value;
        const message = document.getElementById('senderMessage').value;

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\n\nMessage:\n${message}`;

        // Open default mail client
        window.location.href = `mailto:laxmikoundinya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
