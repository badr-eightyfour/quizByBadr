const questions = [
    {
        question: "What HTML tag makes a link?",
        options: [" <a>", " <tr>", " <img />", " <br />"],
        answer: 0
    },
    {
        question: "What HTML tag makes a new line?",
        options: [" <a>", "<tr>", "<img />", " <br />"],
        answer: 3
    }, 
    {
        question: "What HTML tag do you put things in if you want them to appear on the page?",
        options: [" <html>", "<body>", "<head>", " <p>"],
        answer: 1
    }, 
    {
        question: "What tag attribute can you put CSS code into?",
        options: [" title ", "height", "style", " width"],
        answer: 2
    },
    {
        question: "What tag do you use to put a title on a table?",
        options: [" <tr>", "<caption>", "<th>", " <title>"],
        answer: 1
    }, 
    {
        question: "What CSS property makes the colour of the page change?",
        options: ["font-color", "font-size", "color", "backgroun-color"],
        answer: 3
    }, 
    {
        question: "Give an example of a boolean attribute.",
        options: [" autoplay", " height", "style", "title"],
        answer: 0
    }, 
    {
        question: "What CSS property makes text go bold?",
        options: ["font-size", " text-decoration", "bold", "font-weight"],
        answer: 3
    },
    {
        question: "What attribute of the img tag displays things on the page if the picture cannot be",
        options: ["src", " alt", "style", "height"],
        answer: 1
    },
    {
        question: "What type of file ends in a three letter code of .mp4?",
        options: ["picture", " sound", "html", "video"],
        answer: 3
    },
    {
        question: "What tag adds comments to your HTML code?",
        options: ["<title>", " <!-->", "<caption>", " <comment>"],
        answer: 1
    },
    {
        question: "What two other tags do li tags need to work?",
        options: [" <ul> or <h1>", "<h1> or <ol>", "<h1> or <p>", "<ul> or <ol>"],
        answer: 3
    },
    {
        question: "What is a CSS inline style?",
        options: ["CSS code in a style attribute", "CSS code in a style tag", "HTML code", "CSS code in an external css file"],
        answer: 0
    },
    {
        question: "What is an example of a CSS event?",
        options: ["start", "stop", "hover", "play"],
        answer: 2
    },
    {
        question: "What CSS code is an example of a function?",
        options: ["text-shadow", "background-image", "radial-gradient", "C. a:hover"],
        answer: 2
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
