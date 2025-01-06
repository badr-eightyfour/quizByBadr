const questions = [
    {
        question: "Which type of JavaScript language is",
        options: ["High-level", "Assembly-language", "Object-Based", "Object-Oriented"],
        answer: 2
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        answer: 3
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        options: ["Shows a warning", "Prompts to complete the statemen", "Throws an error", "Ignores the statements"],
        answer: 3
    },
    {
        question: " The function and  var are known as:",
        options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        answer: 2
    }, 
    {
        question: " In the JavaScript, which one of the following is not considered as an error:",
        options: ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"],
        answer: 2
    },
    {
        question: " Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        options: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
        answer: 2
    },
    {
        question: " Which of the following number object function returns the value of the number?",
        options: ["toString()", "valueOf()", "Function calling", "toPrecision()"],
        answer: 1
    },
    {
        question: " In JavaScript, what will be used for calling the function definition expression:",
        options: ["Function prototype", "Function literal", "toLocaleString()", "Function declaration"],
        answer: 1
    },
    {
        question: "Which of the following one is the property of the primary expression:",
        options: ["Contains only keywords", "basic expressions containing all necessary functions", "contains variable references alone", "stand-alone expressions"],
        answer: 3
    }, 
    {
        question: "Which one of the following operator is used to check weather a specific property exists or not:",
        options: ["Exists", "exist", "within", "in"],
        answer: 3
    },  
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option-btn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("result");

function loadQuestion(questionIndex) {
    const q = questions[questionIndex];
    questionElement.textContent = q.question;
    options.forEach((option, index) => {
        option.textContent = q.options[index];
    });
    resultContainer.style.display = "none";
}

function checkAnswer(optionIndex) {
    if (optionIndex === questions[currentQuestion].answer) {
        score++;
        resultText.textContent = "correct";
    } else {
        resultText.textContent = "false";
    }
    resultContainer.style.display = "block";
}

function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert(`you are finish your score: ${score}/${questions.length}`);
        resetQuiz();
    } else {
        loadQuestion(currentQuestion);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
