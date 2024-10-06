const bullshitData = {
    monday: {
        encountered: "Encountered exaggerated claims about study methods from a classmate.",
        created: "Claimed I'd start studying but ended up watching Netflix.",
        debunked: "Debunked a friend's conspiracy theory during lunch."
    },
    tuesday: {
        encountered: "Saw a misleading advertisement on social media.",
        created: "Overstated my contribution to a group project.",
        debunked: "Corrected a friend's misunderstanding about a news article."
    },
    wednesday: {
        encountered: "Debunked a friend's conspiracy theory during lunch.",
        created: "Made a joke that could be misinterpreted in class.",
        debunked: "Clarified misconceptions about climate change."
    },
    thursday: {
        encountered: "Read an article with unfounded statistics about health.",
        created: "Said I'd finish an assignment early but procrastinated.",
        debunked: "Explained the difference between correlation and causation."
    },
    friday: {
        encountered: "Witnessed a professor making an overly broad statement about literature.",
        created: "Joked about having finished my readings when I hadn't.",
        debunked: "Clarified a friend's misunderstanding about a class topic."
    }
};

function showDetails(day) {
    const detailsSection = document.getElementById('details');
    const detailContent = document.getElementById('detail-content');
    
    detailContent.innerHTML = `
        <h3>${day.charAt(0).toUpperCase() + day.slice(1)}:</h3>
        <p><strong>Encountered:</strong> ${bullshitData[day].encountered}</p>
        <p><strong>Created:</strong> ${bullshitData[day].created}</p>
        <p><strong>Debunked:</strong> ${bullshitData[day].debunked}</p>
    `;
    
    detailsSection.style.display = 'block'; // Show the details
}
