// script.js
const questions = [
    // Alle 36 Fragen mit Kategorien
    { text: "Ich helfe gerne Menschen in medizinischen Notfällen.", category: "Sanitätsdienst" },
    { text: "Ich bin bereit, medizinisches Wissen zu erlernen und anzuwenden.", category: "Sanitätsdienst" },
    // ... Weitere Fragen hier ergänzen (36 insgesamt)
    { text: "Ich interessiere mich für die Planung und Umsetzung von sozialen Aktionen.", category: "Blutspendedienst" },
];

const scores = {
    "Sanitätsdienst": 0,
    "Betreuungs- & Verpflegungsdienst": 0,
    "Technik, Sicherheit & Logistik": 0,
    "Bergwacht": 0,
    "Informations- und Kommunikationstechnik": 0,
    "Blutspendedienst": 0,
};

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionText = document.getElementById("question");
    const progressBar = document.getElementById("progress-bar");
    const answers = document.querySelectorAll(".answer");
    const resultsContainer = document.getElementById("result-container");
    const questionContainer = document.getElementById("question-container");
    const results = document.getElementById("results");

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResults();
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.text;
        progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    }

    function showResults() {
        questionContainer.style.display = "none";
        resultsContainer.style.display = "block";

        const totalPossiblePoints = questions.length * 2;
        const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);

        sortedResults.forEach(([category, score]) => {
            const percentage = Math.round((score / totalPossiblePoints) * 100);

            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");

            const label = document.createElement("div");
            label.classList.add("result-label");
            label.textContent = category;

            const barContainer = document.createElement("div");
            barContainer.classList.add("result-bar-container");

            const bar = document.createElement("div");
            bar.classList.add("result-bar");
            bar.style.width = `${percentage}%`;
            bar.textContent = `${score} Punkte`;

            barContainer.appendChild(bar);

            const percentageText = document.createElement("div");
            percentageText.classList.add("result-percentage");
            percentageText.textContent = `${percentage}%`;

            resultItem.appendChild(label);
            resultItem.appendChild(barContainer);
            resultItem.appendChild(percentageText);
            results.appendChild(resultItem);
        });
    }

    answers.forEach(answer => {
        answer.addEventListener("click", () => {
            const value = parseInt(answer.dataset.value);
            const category = questions[currentQuestionIndex].category;

            scores[category] += value;
            currentQuestionIndex++;
            loadQuestion();
        });
    });

    loadQuestion();
});
