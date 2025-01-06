const questions = [
    {
        question: "كم استمرت حرب المئة عام بين فرنسا و إنجلترا",
        options: ["110", "101", "116", "100"],
        answer: 2
    },
    {
        question: " في أي عام تم إغتيال الرئيس الأمريكي جون إف كينيدي ",
        options: ["1963", "1964", "1965 ", "1966"],
        answer: 0
    },
    {
        question: "متى بدأت الحرب العالمية الثانية",
        options: ["1945", "1914", "1940", "1939"],
        answer: 3
    },
    {
        question: " متى تمت إزالة جدار برلين",
        options: ["1990", "1989", "1988", "1987"],
        answer: 1
    },
    {
        question: "في أي محيط غرق تيتانيك",
        options: ["المحيط الهندي", "المحيط الشمالي", "المحيط الأطلسي", "المحيط الهادي"],
        answer: 2
    },
    {
        question: "متى كانت معركة اليرموك",
        options: ["632", "633", "635", "636"],
        answer: 3
    },
    {
        question: "من الذي قام ببناء تمثال أبو الهول",
        options: ["الملك ستي الثاني", "الملك خفرع", "الملك رمسيس الثاني ", "الملك مرنبتاح"],
        answer: 1
    },
    {
        question: "أين اخترع البارود",
        options: ["مصر القديمة", "العراق ", "الصين", "إنجلترا"],
        answer: 2
    },
    {
        question: " ما هو أول معدن استخدمه الإنسان",
        options: ["النحاس", "الحديد", "الرصاص", "الفضة"],
        answer: 0
    },
    {
        question: "في أي بلد نشأت حضارة الأزتك",
        options: ["كوبا ", "كوستا ريكا", "البرازيل", "المكسيك"],
        answer: 3
    }
    ,
    {
        question: "أين نشأت الألعاب الأولمبية",
        options: ["فرنسا", "ألمانيا", "اليونان", "روسيا"],
        answer: 2
    }
    
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
        resultText.textContent = "صحيح";
    } else {
        resultText.textContent = "خطأ";
    }
    resultContainer.style.display = "block";
}

function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert(`لقد إنتهيت ! حصلت على : ${score}/${questions.length}`);
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
