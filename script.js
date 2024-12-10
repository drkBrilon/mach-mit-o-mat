// Definiere die Fragen und die zugehörigen Kategorien
const questions = [
    { text: "Ich helfe gerne Menschen in medizinischen Notfällen.", category: "Sanitätsdienst" },
    { text: "Ich interessiere mich für Erste-Hilfe-Maßnahmen und ihre Anwendung.", category: "Sanitätsdienst" },
    { text: "Ich möchte bei Veranstaltungen medizinische Hilfe leisten.", category: "Sanitätsdienst" },
    { text: "Ich organisiere gerne die Verpflegung in Notlagen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich interessiere mich für die Betreuung von Menschen in Notunterkünften.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich plane und bereite gerne große Verpflegungsaktionen vor.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich bin technikbegeistert und arbeite gerne an Logistikprojekten.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich unterstütze gerne bei der Instandhaltung von technischer Ausrüstung.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich interessiere mich für Sicherheits- und Wartungsaufgaben.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich bin gerne in der Natur und habe Interesse an Rettungsdiensten in den Bergen.", category: "Bergwacht" },
    { text: "Ich bin sportlich und habe eine Leidenschaft für Bergsteigen.", category: "Bergwacht" },
    { text: "Ich interessiere mich für den Schutz und die Erhaltung der Natur.", category: "Bergwacht" },
    { text: "Ich interessiere mich für Informations- und Kommunikationstechnik.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich möchte technische Kommunikationssysteme betreuen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich arbeite gerne mit Daten und Netzwerken.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich engagiere mich gerne bei der Organisation von Blutspendeaktionen.", category: "Blutspendedienst" },
    { text: "Ich finde es wichtig, Menschenleben durch Blutspenden zu retten.", category: "Blutspendedienst" },
    { text: "Ich möchte helfen, Blutspendetermine zu organisieren.", category: "Blutspendedienst" },
    // Weitere Fragen für alle Kategorien
    { text: "Ich möchte bei Sportveranstaltungen als Sanitäter helfen.", category: "Sanitätsdienst" },
    { text: "Ich kümmere mich gerne um den Aufbau von Notunterkünften.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich repariere gerne technische Geräte.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich interessiere mich für die Bergrettung in Notsituationen.", category: "Bergwacht" },
    { text: "Ich möchte sicherstellen, dass Kommunikationssysteme reibungslos laufen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich möchte einen Beitrag zur Gesundheit anderer leisten.", category: "Blutspendedienst" },
    { text: "Ich bin gerne Teil eines Einsatzteams bei Rettungsaktionen.", category: "Sanitätsdienst" },
    { text: "Ich möchte bei der Essensverteilung in Notfällen helfen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich arbeite gerne in einem Team mit technischem Fokus.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich möchte in der Natur aktiv mithelfen.", category: "Bergwacht" },
    { text: "Ich interessiere mich für die digitale Kommunikation.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich finde es wichtig, Blutspender zu motivieren.", category: "Blutspendedienst" },
    { text: "Ich möchte in Notfällen Leben retten können.", category: "Sanitätsdienst" },
    { text: "Ich plane gerne Verpflegungsaktionen für viele Menschen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich möchte technische Ausrüstung bedienen und warten.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich bin sportlich und möchte Menschen in schwierigen Umgebungen retten.", category: "Bergwacht" },
    { text: "Ich interessiere mich für die Organisation von Kommunikationsdiensten.", category: "Informations- und Kommunikationstechnik" }
];

// Kategorien und ihre Punktestände
const scores = {
    "Sanitätsdienst": 0,
    "Betreuungs- & Verpflegungsdienst": 0,
    "Technik, Sicherheit & Logistik": 0,
    "Bergwacht": 0,
    "Informations- und Kommunikationstechnik": 0,
    "Blutspendedienst": 0,
};

// Maximal mögliche Punkte je Kategorie
const maxScores = {
    "Sanitätsdienst": 0,
    "Betreuungs- & Verpflegungsdienst": 0,
    "Technik, Sicherheit & Logistik": 0,
    "Bergwacht": 0,
    "Informations- und Kommunikationstechnik": 0,
    "Blutspendedienst": 0,
};

// Beschreibung der Kategorien
const descriptions = {
    "Sanitätsdienst": "Medizinische Erstversorgung und Hilfe in Notfällen.",
    "Betreuungs- & Verpflegungsdienst": "Hilfe bei der Betreuung und Versorgung von Menschen.",
    "Technik, Sicherheit & Logistik": "Organisation und Sicherstellung technischer Prozesse.",
    "Bergwacht": "Rettungsdienste in den Bergen und unzugänglichen Gebieten.",
    "Informations- und Kommunikationstechnik": "Sicherstellung von Kommunikation und IT.",
    "Blutspendedienst": "Organisation von Blutspendeaktionen, die Leben retten.",
};

// Berechne maximale Punktzahl pro Kategorie
questions.forEach(question => {
    maxScores[question.category] += 2;
});

// Initialisiere Fragen
let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionText = document.getElementById("question");
    const progressBar = document.getElementById("progress-bar");
    const answers = document.querySelectorAll(".answer");
    const questionContainer = document.getElementById("question-container");
    const resultsContainer = document.getElementById("result-container");
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
            const percentage = Math.round((score / maxScores[category]) * 100);

            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");

            const label = document.createElement("div");
            label.classList.add("result-label");
            label.textContent = category;

            const description = document.createElement("p");
            description.textContent = descriptions[category];

            const barContainer = document.createElement("div");
            barContainer.classList.add("result-bar-container");

            const bar = document.createElement("div");
            bar.classList.add("result-bar");
            bar.style.width = `${percentage}%`;
            bar.textContent = `${percentage}%`;

            barContainer.appendChild(bar);

            resultItem.appendChild(label);
            resultItem.appendChild(description);
            resultItem.appendChild(barContainer);
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
