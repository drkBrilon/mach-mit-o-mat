// script.js
const questions = [
    { text: "Ich helfe gerne Menschen in medizinischen Notfällen.", category: "Sanitätsdienst" },
    { text: "Ich bin bereit, medizinisches Wissen zu erlernen und anzuwenden.", category: "Sanitätsdienst" },
    { text: "Ich kann gut Ruhe bewahren, auch in stressigen Situationen.", category: "Sanitätsdienst" },
    { text: "Ich arbeite gerne in einem Team, das medizinische Hilfe leistet.", category: "Sanitätsdienst" },
    { text: "Ich bin bereit, mich regelmäßig fortzubilden.", category: "Sanitätsdienst" },
    { text: "Ich habe kein Problem damit, in unvorhergesehenen Situationen zu handeln.", category: "Sanitätsdienst" },

    { text: "Ich koche und bereite gerne Mahlzeiten für viele Menschen zu.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich arbeite gerne in einem Team, das sich um die Versorgung kümmert.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich bin gut darin, anderen Menschen in schwierigen Situationen zu helfen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich finde es erfüllend, Menschen in Notlagen zu betreuen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich organisiere gerne die Versorgung von größeren Gruppen.", category: "Betreuungs- & Verpflegungsdienst" },
    { text: "Ich bin bereit, mich auf außergewöhnliche Situationen vorzubereiten.", category: "Betreuungs- & Verpflegungsdienst" },

    { text: "Ich interessiere mich für Technik und deren praktische Anwendung.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich habe keine Angst, Geräte und Maschinen zu bedienen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich sorge gerne dafür, dass alles sicher und organisiert abläuft.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich bin bereit, Verantwortung für technische Abläufe zu übernehmen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich finde es spannend, technische Probleme zu lösen.", category: "Technik, Sicherheit & Logistik" },
    { text: "Ich bin praktisch veranlagt und arbeite gerne mit Werkzeugen.", category: "Technik, Sicherheit & Logistik" },

    { text: "Ich verbringe gerne Zeit in der Natur, auch unter schwierigen Bedingungen.", category: "Bergwacht" },
    { text: "Ich bin körperlich fit und liebe Herausforderungen.", category: "Bergwacht" },
    { text: "Ich bin bereit, mich auf schwierige Rettungseinsätze vorzubereiten.", category: "Bergwacht" },
    { text: "Ich habe keine Höhenangst und kann gut mit schwierigen Geländesituationen umgehen.", category: "Bergwacht" },
    { text: "Ich bin bereit, in einer Einsatzgruppe für Naturrettung zu arbeiten.", category: "Bergwacht" },
    { text: "Ich habe Freude an Teamarbeit in anspruchsvollen Outdoor-Einsätzen.", category: "Bergwacht" },

    { text: "Ich interessiere mich für Computer, Funk und Kommunikation.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich finde es spannend, Informationen zu koordinieren und weiterzugeben.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich möchte sicherstellen, dass im Einsatz die Kommunikation funktioniert.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich arbeite gerne mit moderner Technik und Software.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich bin bereit, bei Einsätzen technische Kommunikationsmittel zu bedienen.", category: "Informations- und Kommunikationstechnik" },
    { text: "Ich habe ein Händchen für den Umgang mit elektronischen Geräten.", category: "Informations- und Kommunikationstechnik" },

    { text: "Ich finde es wichtig, Blutspenden zu organisieren.", category: "Blutspendedienst" },
    { text: "Ich arbeite gerne an sozialen Projekten, die Leben retten.", category: "Blutspendedienst" },
    { text: "Ich habe ein organisatorisches Talent für Veranstaltungen.", category: "Blutspendedienst" },
    { text: "Ich möchte dazu beitragen, dass Blutspenden reibungslos ablaufen.", category: "Blutspendedienst" },
    { text: "Ich bin bereit, Menschen über die Wichtigkeit von Blutspenden aufzuklären.", category: "Blutspendedienst" },
    { text: "Ich kann gut auf Menschen zugehen und sie motivieren.", category: "Blutspendedienst" },
];

const scores = {
    "Sanitätsdienst": 0,
    "Betreuungs- & Verpflegungsdienst": 0,
    "Technik, Sicherheit & Logistik": 0,
    "Bergwacht": 0,
    "Informations- und Kommunikationstechnik": 0,
    "Blutspendedienst": 0,
};

const descriptions = {
    "Sanitätsdienst": "Medizinische Erstversorgung und Hilfe in Notfällen bei Großveranstaltungen.",
    "Betreuungs- & Verpflegungsdienst": "Hilfe bei der Betreuung und Versorgung von Einsatzkräften und Betroffenen in Notlagen.",
    "Technik, Sicherheit & Logistik": "Organisation und Sicherstellung technischer Prozesse im Einsatzspektrum.",
    "Bergwacht": "Der Rettungsdienst in den Bergen und unzugänglichen Gebieten, dank Spezialausrüstung.",
    "Informations- und Kommunikationstechnik": "Sicherstellung von Kommunikation, IT und Fernmeldetechnik.",
    "Blutspendedienst": "Organisation von Blutspendeaktionen, die Leben retten.",
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

            const description = document.createElement("p");
            description.textContent = descriptions[category];

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
            resultItem.appendChild(description);
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
