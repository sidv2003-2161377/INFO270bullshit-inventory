const bullshitData = {
    monday: {
        encountered: [
            "A classmate claimed they could memorize an entire textbook overnight. - 4/10",
            "Someone said that drinking green juice daily would 'cleanse' your body of toxins. - 5/10"
        ],
        created: "",
        debunked: ""
    },
    tuesday: {
        encountered: [
            "A friend insisted that drinking lemon water every morning cures all diseases. - 6/10",
            "Saw a viral post on instagram stating that skipping breakfast was a guaranteed way to lose weight quickly. - 8/10"
        ],
        created: "I exaggerated my weekend plans, saying I was busy the whole day when I went grocery shopping and sat at home. - 2/10",
        debunked: "I corrected my friend about the health benefits of lemon water, explaining that while it’s refreshing, it’s not a miracle cure."
    },
    wednesday: {
        encountered: [
            "A classmate insisted that taking cold showers is always good for your metabolism. - 4/10"
        ],
        created: "I claimed to have read three chapters for a class when I had only skimmed through one. - 6/10",
        debunked: "I debunked my classmate's metabolism theory by showing him proof that research on this is very limited and so all sources mention taking this with a grain of salt."
    },
    thursday: {
        encountered: [
            "I overheard someone say that wearing certain crystals can improve grades. - 7/10"
        ],
        created: "",
        debunked: ""
    },
    friday: {
        encountered: [
            "Someone claimed that staying up late improves productivity for creative people. - 5/10"
        ],
        created: "I joked that I was an expert on a topic in class when I was really just winging it. - 6/10",
        debunked: ""
    },
    saturday: {
        encountered: [
            "A classmate said they discovered a study technique that guarantees higher grades without studying harder. - 7/10"
        ],
        created: "I told my friends I’d become a morning person, but I slept in and missed breakfast on this day. - 3/10",
        debunked: ""
    },
    sunday: {
        encountered: [
            "A popular blogger claimed that eating chocolate every day can lead to guaranteed weight loss. - 9/10",
            "I overheard someone claim that certain diets are effective without any exercise at all. - 7/10"
        ],
        created: "I told my friend I had started homework when I played games the entire day. - 5/10",
        debunked: ""
    }
};

function showDetails(day) {
    const detailsSection = document.getElementById('details');
    const detailContent = document.getElementById('detail-content');
    
    detailContent.innerHTML = `
        <h3>${day.charAt(0).toUpperCase() + day.slice(1)}:</h3>
        <p><strong>Encountered:</strong></p>
        <ul>
            ${bullshitData[day].encountered.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>Created:</strong> ${bullshitData[day].created || "No bullshit created today."}</p>
        <p><strong>Debunked:</strong> ${bullshitData[day].debunked || "No debunking done today."}</p>
    `;
    
    detailsSection.style.display = 'block'; 
}
