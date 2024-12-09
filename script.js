// script.js
const questions = [
    { text: "Ich helfe gerne Menschen in medizinischen Notfällen.", category: "Sanitätsdienst" },
    { text: "Ich bin bereit, medizinisches Wissen zu erlernen und anzuwenden.", category: "Sanitätsdienst" },
    { text: "Ich finde es wichtig, Menschen in Notlagen mit Essen und Unterkunft zu unterstützen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich packe gerne praktisch mit an und arbeite mit Geräten und Maschinen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich verbringe gerne Zeit in der Natur und in den Bergen.", category: "Bergwacht" },
    { text: "Ich interessiere mich für Funk- und Kommunikationstechnologien.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich finde es wichtig, die Blutversorgung in der Region zu unterstützen.", category: "Blutspendedienst" },
    // Füge weitere Fragen hinzu ...
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

        const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        sortedResults.forEach(([category, score]) => {
            const result = document.createElement("div");
            result.textContent = `${category}: ${score} Punkte`;
            results.appendChild(result);
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
