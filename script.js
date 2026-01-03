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
