const questions = [
    {
        question: "What keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1
    },
    {
        question: "Which of the following is used for a single-line comment in Python?",
        options: ["//", "#", "/*", "--"],
        answer: 1
    }, 
    {
        question: "Which of the following data types is immutable in Python?",
        options: ["list", "dictionary", "tuple", "set"],
        answer: 2
    }, 
    {
        question: "What is the correct way to create a set in Python?",
        options: ["[]", "{}", "()", "<>"],
        answer: 1
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "*", "//"],
        answer: 1
    }, 
    {
        question: "What function is used to get the length of a list in Python?",
        options: ["length()", "size()", "len()", "count()"],
        answer: 2
    }, 
    {
        question: "Which of the following is used to check if a value exists in a list?",
        options: ["in", "contains", "exists", "has"],
        answer: 0
    }, 
    {
        question: "How do you define a variable in Python?",
        options: ["variable = value", "value => variable", "def variable(value)", "variable == value"],
        answer: 0
    },
    {
        question: "What does the 'continue' statement do in Python?",
        options: ["Stops the loop", "Skips the rest of the loop and goes to the next iteration", "Exits the loop", "Throws an exception"],
        answer: 1
    },
    {
        question: "Which of the following is used to handle exceptions in Python?",
        options: ["try...except", "catch...finally", "throw...catch", "error...handle"],
        answer: 0
    },
    {
        question: "What is the result of 7 // 3 in Python?",
        options: ["2.33", "2", "3", "1"],
        answer: 1
    },
    {
        question: "Which of the following is the correct syntax for importing a module in Python?",
        options: ["import module_name", "include module_name", "using module_name", "require module_name"],
        answer: 0
    },
    {
        question: "What is the correct way to create a dictionary in Python?",
        options: ["[]", "{}", "()", "<>"],
        answer: 1
    },
    {
        question: "What does the 'pass' statement do in Python?",
        options: ["Terminates the loop", "Does nothing and allows the program to continue", "Raises an error", "Exits the function"],
        answer: 1
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
