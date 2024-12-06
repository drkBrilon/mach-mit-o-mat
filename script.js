document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      text: "Ich interessiere mich für medizinische Themen und Erste Hilfe.",
      fields: { Sanitäter: 3, TeddyDoktor: 2 },
    },
    {
      text: "Ich arbeite gerne mit technischen Geräten und Maschinen.",
      fields: { Techniker: 3, Funker: 2 },
    },
    {
      text: "Ich helfe gerne Menschen in stressigen Situationen.",
      fields: { Sanitäter: 3, Betreuungsdienstler: 2 },
    },
  ];

  const fields = {
    Sanitäter: 0,
    Betreuungsdienstler: 0,
    Verpflegungsdienstler: 0,
    Techniker: 0,
    Funker: 0,
    Bergretter: 0,
    Luftretter: 0,
    BlutspendeHelfer: 0,
    TeddyDoktor: 0,
  };

  let currentQuestion = 0;

  const startSection = document.getElementById("start");
  const quizSection = document.getElementById("quiz");
  const resultSection = document.getElementById("result");

  const questionTitle = document.getElementById("question-title");
  const questionText = document.getElementById("question-text");
  const answers = document.getElementById("answers");
  const resultText = document.getElementById("result-text");

  document.getElementById("start-button").addEventListener("click", () => {
    startSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    loadQuestion();
  });

  answers.addEventListener("click", (e) => {
    if (e.target.classList.contains("answer")) {
      const score = parseInt(e.target.getAttribute("data-score"));
      const questionFields = questions[currentQuestion].fields;

      for (const field in questionFields) {
        fields[field] += questionFields[field] * score;
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    location.reload();
  });

  function loadQuestion() {
    const question = questions[currentQuestion];
    questionTitle.textContent = `Frage ${currentQuestion + 1}`;
    questionText.textContent = question.text;
  }

  function showResult() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    const sortedFields = Object.entries(fields).sort((a, b) => b[1] - a[1]);
    const topField = sortedFields[0][0];

    const fieldNames = {
      Sanitäter: "Sanitäter",
      Betreuungsdienstler: "Betreuungsdienstler",
      Verpflegungsdienstler: "Verpflegungsdienstler",
      Techniker: "Techniker",
      Funker: "Funker",
      Bergretter: "Bergretter",
      Luftretter: "Luftretter",
      BlutspendeHelfer: "Blutspende-Helfer",
      TeddyDoktor: "Teddy-Doktor",
    };

    resultText.textContent = `Du passt am besten zu: ${fieldNames[topField]}`;
  }
});
