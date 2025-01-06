const questions = [
    {
        question: "من هو المنتخب الذي فاز بكأس العالم سنة 2006",
        options: ["فرنسا", "الأرجنتين ", "إيطاليا", "ألمانيا"],
        answer: 2
    },
    {
        question: "من هو الفريق الفرنسي الذي فاز بدوري أبطال ",
        options: ["باريس سان جيرمان", "أولمبيك ماريسيليا ", "موناكو ", "ليل"],
        answer: 1
    },
    {
        question: "من هو الهداف التاريخي للدوري الإسباني",
        options: ["أنطوان كريزمان", "كريستيانو رونالدو", "ليونيل ميسي", "كريم بنزيما"],
        answer: 2
    },
    {
        question: "من الفريق الذي فاز بدوري أبطال سنة 2004",
        options: ["أياكس أمستردام", "بورتو", "آسي ميلان", "ريال مدريد"],
        answer: 1
    },
    {
        question: "آخر كأس العالم فازت به البرازيل في سنة ",
        options: ["2002", "2014", "1998", "2010"],
        answer: 0
    },
    {
        question: "ما هي الدولة التي استضافت أول بطولة كأس العالم",
        options: ["ألمانيا", "البرازيل", "روسيا", "الأوروغواي"],
        answer: 3
    },
    {
        question: "من هو الهداف التاريخي لكأس العالم",
        options: ["بيليه", "ميروسلاف كلوزه", "ليونيل ميسي ", "مارادونا"],
        answer: 1
    },
    {
        question: "من هو اللاعب الذي سجل أسرع هاتريك في الدوري الإنجليزي الممتاز",
        options: ["هاري كين", "كول بالمر ", "ساديو ماني", "إيريلنيج هالاند"],
        answer: 2
    },
    {
        question: " من هو أصغر لاعب يسجل في تاريخ كأس العالم",
        options: ["بيليه", "لامين يمال", "كيليان مبابي", "ليونيل ميسي"],
        answer: 0
    },
    {
        question: "ما هو النادي الأكثر تتويجًا بالدوري الإنجليزي الممتاز",
        options: ["مانشستر يونايتد", "مان سيتي", "تشيلسي ", "ليفربول"],
        answer: 0
    }
    ,
    {
        question: "ما هي الدولة التي فازت بأول بطولة أمم أوروبا (اليورو)",
        options: ["فرنسا", "ألمانيا", "اليونان", "روسيا"],
        answer: 3
    },
    {
        question: "ما هو أول فريق عربي يصل لنهائي كأس العالم للأندية",
        options: ["العين الإماراتي", "النصر السعودي", "الأهلي المصري", "الرجاء المغربي"],
        answer: 3
    }
    ,
    {
        question: "من هو الفريق الإنجليزي الأكثر حصول على دوري أبطال",
        options: ["أرسنال", "ليفربول", "تشيلسي", "مان يونايتد"],
        answer: 1
    }
    ,
    {
        question: "من هو اللاعب من هؤلاء لم يفز بدوري أبطال أوروبا",
        options: ["حكيم زياش", "إبراهيموڤيتش", "لويز سواريز", "ماريو بلوتيلي"],
        answer: 1
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
