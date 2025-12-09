const side8 = document.getElementById("side8");
const sideAnswer = document.getElementById("sideanswer");
const answerText = document.getElementById("answerText");
const askBtn = document.getElementById("askBtn");

let showing8 = true;

const answers = [
    "Yes", "No", "Ask again", "Absolutely",
    "Doubtful", "Try later", "Certainly",
    "Very likely", "Unclear", "You wish", "Not Today", "Definitely",
    "Without a doubt", "My sources say no",
    "Outlook good", "Better not tell you now", "Girl, no", "Be so for real", "Try Google?", "LMAO no", "Bless your heart...no", "My sources laugh at you", "That's a you problem", "Oh honey... no", "Not in this timeline", "That's embarassing... no", "In your dreams", "Ask your mom", "Focus and ask again", "Error 404: Answer not found", "The spirits ghosted me",  "Do you hear yourself?", "Manifest something else", "Yeah, duh!", "Obviously", "As if I'd say no", "Totally!", "Confirmed", "Heck Yes!", "I guess that's a yes", "Shockingly, yes", "Yes, but be cool about it", "Yes, don't be weird about it"
];

/* Flip between sides by clicking the ball */
document.getElementById("ball-container").addEventListener("click", () => {

    if (showing8) {
        // --- Switch to ANSWER side ---
        side8.classList.remove("visible", "pulse-glow");
        sideAnswer.classList.add("visible");

        askBtn.classList.add("visible", "glow");   // button fades in + glows

        answerText.style.opacity = 0; // reset answer visibility

    } else {
        // --- Switch back to SIDE 8 ---
        sideAnswer.classList.remove("visible");
        side8.classList.add("visible", "pulse-glow");  // glow returns on load + when returning to side 8

        askBtn.classList.remove("visible", "glow"); // hide button
        answerText.style.opacity = 0;
    }

    showing8 = !showing8;
});



/* Button shakes the ball + displays text */
askBtn.addEventListener("click", () => {
    const container = document.getElementById("ball-container");

    // Shake!
    container.classList.add("shake");

    // Pick random answer
    const selected = answers[Math.floor(Math.random() * answers.length)];

    setTimeout(() => {
        answerText.textContent = selected;
        answerText.style.opacity = 1;
        container.classList.remove("shake");
    }, 600);
});
