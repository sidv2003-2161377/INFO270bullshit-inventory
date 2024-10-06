const bullshitData = {
    monday: {
        encountered: [
            "A classmate mentioned they can learn an entire chapter in an hour without taking notes.",
            "Someone claimed that drinking green smoothies daily helps to detoxify your body completely."
        ],
        created: "I told my roommate I’d definitely finish my assignments by dinner but ended up napping instead.",
        debunked: ""
    },
    tuesday: {
        encountered: [
            "I saw a post on social media that suggested drinking lemon water in the morning can cure cold symptoms.",
            "A friend said that if you skip breakfast, you’ll lose weight faster and save time."
        ],
        created: "I exaggerated my weekend plans, saying I went hiking when I actually just walked around the park.",
        debunked: "I corrected my friend about the health benefits of lemon water, explaining that while it’s refreshing, it’s not a miracle cure."
    },
    wednesday: {
        encountered: [
            "A classmate insisted that taking cold showers every morning can boost your immune system significantly."
        ],
        created: "I claimed to have read three chapters for class when I had only skimmed through one.",
        debunked: ""
    },
    thursday: {
        encountered: [
            "A professor mentioned that most students struggle to graduate in four years because of the overwhelming coursework.",
            "I heard someone claim that wearing specific types of jewelry can improve focus during exams."
        ],
        created: "I told my study group that I had already started preparing for finals, but I hadn’t even looked at my notes.",
        debunked: "I clarified the professor’s broad statement about graduation rates, presenting data showing that many students graduate on time."
    },
    friday: {
        encountered: [
            "A classmate said they discovered a study technique that guarantees higher grades without studying harder.",
            "Someone claimed that pulling an all-nighter before an exam is the best way to retain information."
        ],
        created: "I joked that I was an expert on a topic in class when I was really just winging it.",
        debunked: ""
    },
    saturday: {
        encountered: [
            "I overheard someone say that you can eat whatever you want as long as you exercise later in the day.",
            "A friend suggested that drinking a lot of water before meals can make you feel full and help you eat less."
        ],
        created: "I told my friends I’d become a morning person, but I slept in and missed breakfast.",
        debunked: ""
    },
    sunday: {
        encountered: [
            "A popular blog claimed that eating chocolate in moderation can actually aid weight loss.",
            "I heard someone say that certain diets can help you lose weight without needing to exercise at all."
        ],
        created: "I shared that I had completed all my readings for the week, but I hadn’t even opened the books.",
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
        <p><strong>Created:</strong> ${bullshitData[day].created}</p>
        <p><strong>Debunked:</strong> ${bullshitData[day].debunked || "No debunking this day."}</p>
    `;
    
    detailsSection.style.display = 'block'; // Show the details
}
