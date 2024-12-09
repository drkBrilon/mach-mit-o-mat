// script.js
const questions = [
    // Alle 36 Fragen mit Kategorien:
    { text: "Ich helfe gerne Menschen in medizinischen Notfällen.", category: "Sanitätsdienst" },
    { text: "Ich bin bereit, medizinisches Wissen zu erlernen und anzuwenden.", category: "Sanitätsdienst" },
    { text: "Das Arbeiten unter Druck und in stressigen Situationen schreckt mich nicht ab.", category: "Sanitätsdienst" },
    { text: "Ich habe Interesse an Erster Hilfe und lebensrettenden Maßnahmen.", category: "Sanitätsdienst" },
    { text: "Ich bin bereit, bei Veranstaltungen medizinischen Support zu leisten.", category: "Sanitätsdienst" },
    { text: "Ich möchte in einem Team arbeiten, das für die Gesundheit von Menschen sorgt.", category: "Sanitätsdienst" },
    { text: "Ich organisiere gerne Verpflegung für Gruppen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich finde es wichtig, Menschen in Notlagen mit Essen und Unterkunft zu unterstützen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich habe Freude daran, für größere Gruppen zu kochen oder zu servieren.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich bin bereit, in Krisensituationen logistisch zu unterstützen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich habe ein gutes Verständnis für die Bedürfnisse von hilfsbedürftigen Menschen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich möchte gerne Menschen in schwierigen Lebenslagen betreuen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich interessiere mich für technische Lösungen und deren Umsetzung.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich packe gerne praktisch mit an und arbeite mit Geräten und Maschinen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Sicherheit bei Veranstaltungen oder Einsätzen ist für mich ein wichtiges Thema.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich finde es spannend, technische und logistische Probleme zu lösen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich bin bereit, Verantwortung für Materialien und Sicherheit zu übernehmen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich möchte mich mit technischen Aufgaben im Ehrenamt einbringen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich verbringe gerne Zeit in der Natur und in den Bergen.", category: "Bergwacht" },
    { text: "Ich bin körperlich fit und mag sportliche Herausforderungen.", category: "Bergwacht" },
    { text: "Ich interessiere mich für die Rettung von Menschen in unwegsamem Gelände.", category: "Bergwacht" },
    { text: "Ich bin bereit, auch bei schwierigen Wetterbedingungen zu arbeiten.", category: "Bergwacht" },
    { text: "Teamarbeit in einer herausfordernden Umgebung ist mir wichtig.", category: "Bergwacht" },
    { text: "Ich möchte helfen, Menschen in den Bergen zu schützen und zu retten.", category: "Bergwacht" },
    { text: "Ich habe Interesse an Funk- und Kommunikationstechnologien.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich arbeite gerne mit digitalen und analogen Kommunikationssystemen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich finde es spannend, in Einsätzen für eine stabile Kommunikation zu sorgen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich interessiere mich für IT-Systeme und deren Aufbau.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich bin bereit, Verantwortung für die technische Kommunikation zu übernehmen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich möchte helfen, Einsätze durch Informationstechnologie zu unterstützen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich finde es wichtig, die Blutversorgung in der Region zu unterstützen.", category: "Blutspendedienst" },
    { text: "Ich helfe gerne bei der Organisation und Durchführung von Blutspendeterminen.", category: "Blutspendedienst" },
    { text: "Ich habe Freude am Umgang mit Menschen bei sozialen Veranstaltungen.", category: "Blutspendedienst" },
    { text: "Ich möchte gerne ein Teil des Teams sein, das Blutspenden ermöglicht.", category: "Blutspendedienst" },
    { text: "Ich bin bereit, mich für die Gesundheit der Gemeinschaft einzusetzen.", category: "Blutspendedienst" },
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

        const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        sortedResults.forEach(([category, score]) => {
            const resultContainer = document.createElement("div");
            resultContainer.style.margin = "10px 0";

            const resultLabel = document.createElement("div");
            resultLabel.textContent = `${category}: ${score} Punkte`;
            resultLabel.style.marginBottom = "5px";

            const resultBar = document.createElement("div");
            resultBar.classList.add("result-bar");
            resultBar.style.width = `${(score / (questions.length * 2)) * 100}%`;

            resultContainer.appendChild(resultLabel);
            resultContainer.appendChild(resultBar);
            results.appendChild(resultContainer);
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
