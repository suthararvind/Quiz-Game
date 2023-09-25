const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ],
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican city", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri lanka", correct: false },
        ],
    },
   
   
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ],
    },
    {
        question: "From which city Arvind Suthar Belongs to :-",
        answers: [
            { text: "Pali", correct: false },
            { text: "Sirohi", correct: false },
            { text: "Jalore", correct: true },
            { text: "Barmer", correct: false },
        ],
    },
    {
        question: "What is part of a database that holds only one type of information?",
        answers: [
            { text: " Report", correct: false },
            { text: "Field", correct: true },
            { text: "Record", correct: false },
            { text: "File", correct: false },
        ],
    },
     {
        question: "What is a URL?",
        answers: [
            { text: "A computer software program", correct: false },
            { text: " A type of UFO", correct: false },
            { text: "The address of a document or "page" on the World Wide Web", correct: true},
            { text: "An acronym for Uniform Resources Learning", correct: false },
        ],
    }, {
        question: "'.JPG' extension refers usually to what kind of file?",
        answers: [
            { text: " System file", correct: false },
            { text: "Animation/movie file", correct: false },
            { text: "MS Encarta document", correct: false },
            { text: "Image file", correct: true },
        ],
    }, {
        question: "Who developed Yahoo?",
        answers: [
            { text: "Dennis Ritchie & Ken Thompson", correct: false },
            { text: "David Filo & Jerry Yang", correct: true },
            { text: " Vint Cerf & Robert Kahn", correct: false },
            { text: "Steve Case & Jeff Bezos", correct: false },
        ],
    },
   
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index)); // Add event listener
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answers[selectedIndex].correct) {
        score++; // Increment score if the answer is correct
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Display the user's score when all questions are answered
        questionElement.innerHTML = `Your Score: ${score} / ${questions.length}`;
        answerButtons.innerHTML = ""; // Clear answer buttons
        nextButton.style.display = "none"; // Hide the "Next" button
    }
}

startQuiz();
