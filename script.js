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
        question: "Mayank Maliwal is known for his :-",
        answers: [
            { text: "Satta master", correct: false },
            { text: "Bakchodi karna", correct: true },
            { text: "Bambu k sath movie dekhna", correct: false },
            { text: "Madarchod", correct: false },
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
        question: "What is the name to Harsh Bhambu Setting ?",
        answers: [
            { text: "Hetal", correct: false },
            { text: "Kunika", correct: false },
            { text: "Anuska vijay", correct: false },
            { text: "Aastha", correct: true },
        ],
    },
    {
        question: "What does the varun likes most?",
        answers: [
            { text: "Pappi", correct: false },
            { text: "Fuddi", correct: false},
            { text: "Lun*d", correct: true },
            { text: "Muth Marna", correct: false },
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