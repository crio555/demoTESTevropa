// Тест по теме: Возражение "Дорого"
const quizData = [
    {
        question: "Что на самом деле может означать возражение клиента 'Дорого'?",
        answers: [
            "Только то, что у клиента нет денег",
            "Клиент всегда хочет получить скидку",
            "Разные смыслы: не видит ценности, не уверен в качестве, ограничен бюджет, хочет скидку или сравнивает с дешёвым",
            "Клиент просто не хочет покупать"
        ],
        correct: 2,
        explanation: "'Дорого' может означать разные вещи: клиент не понял ценность товара, боится переплатить, не планировал столько тратить, торгуется или не видит разницы с дешёвым аналогом. Важно сначала понять, что именно означает 'дорого' для конкретного клиента."
    },
    {
        question: "Какая фраза является ОШИБКОЙ при работе с возражением 'Дорого'?",
        answers: [
            "'Я понимаю, хочется получить лучшее по хорошей цене'",
            "'Это не дорого!' или 'У нас качество!'",
            "'Давайте 150 грамм на пробу'",
            "'Этот сыр от фермерского производителя, без добавок'"
        ],
        correct: 1,
        explanation: "Фразы 'Это не дорого!' или 'У нас качество!' — типичные ошибки. Спор с клиентом заставляет его уйти в защиту. Вместо этого нужно присоединиться к чувствам клиента и объяснить конкретную ценность товара."
    },
    {
        question: "Какой правильный алгоритм работы с возражением 'Дорого'?",
        answers: [
            "Сразу предложить скидку → Закрыть сделку",
            "Спорить с клиентом → Доказать, что цена справедливая",
            "Присоединение → Объяснение ценности → Сравнение → Проба",
            "Уйти и дать клиенту подумать"
        ],
        correct: 2,
        explanation: "Правильный алгоритм: 1) Присоединение ('Я понимаю...'), 2) Объяснение ценности (конкретные свойства), 3) Сравнение с дешёвым аналогом, 4) Предложение пробы для снижения риска. Этот подход не обесценивает товар и помогает клиенту увидеть ценность."
    },
    {
        question: "Как правильно объяснять ценность товара?",
        answers: [
            "Говорить общие слова: 'У нас качество!', 'Это премиум!'",
            "Называть конкретные свойства: 'Без добавок', 'Ручная работа', 'Выдержка 12 месяцев'",
            "Сравнивать с другими магазинами: 'У них ещё дороже!'",
            "Сразу предлагать скидку"
        ],
        correct: 1,
        explanation: "Нужно называть конкретные свойства товара, а не общие слова типа 'качество'. Например: 'Без добавок', 'Ручная работа', 'Выдержка 12 месяцев', 'Премиум-ингредиенты'. Конкретика помогает клиенту понять, за что он платит."
    },
    {
        question: "Зачем предлагать клиенту 'маленькую пробу' (150 грамм вместо 300)?",
        answers: [
            "Чтобы продать хоть что-то",
            "Чтобы снизить риск покупки — клиент не боится потратить много на неизвестное",
            "Чтобы избавиться от клиента",
            "Потому что товар плохого качества"
        ],
        correct: 1,
        explanation: "Проба снижает риск покупки. Клиент не боится потратить небольшую сумму на неизвестный товар. Фраза: 'Давайте 150 грамм на пробу — если понравится, в следующий раз возьмёте больше'. Это помогает закрыть сделку и создаёт возможность для повторной покупки."
    },
    {
        question: "Что делать, если бюджет клиента действительно ограничен?",
        answers: [
            "Настаивать на дорогом товаре любой ценой",
            "Сказать 'Ну как хотите' и уйти",
            "Признать ограничение, предложить альтернативу в рамках бюджета, объяснить отличие и дать выбор",
            "Сразу дать большую скидку на дорогой товар"
        ],
        correct: 2,
        explanation: "Правильный алгоритм: 1) Признай ограничение ('Понимаю, бюджет важен'), 2) Предложи альтернативу ('Тогда вот этот — попроще, но тоже хороший'), 3) Объясни отличие ('Он дешевле, но выдержка меньше'), 4) Дай выбор ('Какой вам ближе?'). Не настаивай на дорогом — предложи в рамках бюджета."
    },
    {
        question: "Как правильно использовать технику сравнения?",
        answers: [
            "'Он дороже [дешёвого аналога], но [конкретное отличие]'",
            "'У нас дорого, зато качество'",
            "'В другом магазине ещё дороже'",
            "'Это самый дорогой товар, значит самый лучший'"
        ],
        correct: 0,
        explanation: "Формула сравнения: 'Он дороже [дешёвого аналога], но [конкретное отличие]'. Примеры: 'Дороже масс-маркета, но без консервантов', 'Дороже обычного, но выдержка 12 месяцев'. Важно показать конкретную разницу, а не просто говорить о качестве."
    },
    {
        question: "Почему нельзя сразу предлагать скидку при возражении 'Дорого'?",
        answers: [
            "Потому что это запрещено правилами магазина",
            "Потому что скидка обесценивает товар — клиент думает, что цена была завышена",
            "Потому что клиент всё равно откажется",
            "Потому что скидки не работают"
        ],
        correct: 1,
        explanation: "Скидка обесценивает товар. Если вы сразу даёте скидку, клиент думает, что первоначальная цена была завышена. Сначала нужно объяснить ценность товара, показать отличие от дешёвых аналогов, предложить пробу — и только потом, если необходимо, обсуждать скидку."
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Элементы DOM
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const submitButton = document.getElementById('submit-answer');
const nextButton = document.getElementById('next-question');
const restartButton = document.getElementById('restart-quiz');
const questionCard = document.getElementById('question-card');
const feedbackCard = document.getElementById('feedback-card');
const resultsCard = document.getElementById('results-card');
const progressBar = document.getElementById('progress');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const finalScore = document.getElementById('final-score');
const maxScore = document.getElementById('max-score');
const resultsMessage = document.getElementById('results-message');

// Генерация случайного цвета
function getRandomColor() {
    const colors = [
        '#667eea', // фиолетовый
        '#764ba2', // темно-фиолетовый
        '#f093fb', // розовый
        '#4facfe', // голубой
        '#43e97b', // зеленый
        '#fa709a', // коралловый
        '#fee140', // желтый
        '#30cfd0', // бирюзовый
        '#a8edea', // мятный
        '#ff6b6b', // красный
        '#4ecdc4', // циан
        '#ffe66d'  // золотой
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Инициализация
function init() {
    totalQuestionsSpan.textContent = quizData.length;
    maxScore.textContent = quizData.length;
    loadQuestion();
}

// Загрузка вопроса
function loadQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    answersContainer.innerHTML = '';
    selectedAnswer = null;
    submitButton.disabled = true;

    // Обновление счетчика и прогресс-бара
    currentQuestionSpan.textContent = currentQuestion + 1;
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressBar.style.width = progress + '%';

    // Создание вариантов ответов с анимацией появления
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = answer;
        answerDiv.style.animationDelay = `${index * 0.15}s`;

        // Генерация случайного цвета для контура при наведении
        answerDiv.addEventListener('mouseenter', () => {
            const randomColor = getRandomColor();
            const colorWithAlpha = randomColor + '40'; // добавляем прозрачность для свечения
            answerDiv.style.setProperty('--hover-color', randomColor);
            answerDiv.style.setProperty('--hover-color-alpha', colorWithAlpha);
        });

        answerDiv.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(answerDiv);

        // Запуск анимации появления
        setTimeout(() => {
            answerDiv.classList.add('show');
        }, 50);
    });
}

// Выбор ответа
function selectAnswer(index) {
    selectedAnswer = index;
    const options = document.querySelectorAll('.answer-option');
    options.forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
    submitButton.disabled = false;
}

// Проверка ответа
function checkAnswer() {
    const question = quizData[currentQuestion];
    const options = document.querySelectorAll('.answer-option');
    const isCorrect = selectedAnswer === question.correct;

    // Отключаем все опции
    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });

    // Обновляем счет
    if (isCorrect) {
        score++;
    }

    // Анимация перехода
    setTimeout(() => {
        questionCard.classList.add('fade-out');
        setTimeout(() => {
            showFeedback(isCorrect, question.explanation);
            questionCard.classList.remove('fade-out');
        }, 400);
    }, 800);
}

// Показ обратной связи
function showFeedback(isCorrect, explanation) {
    questionCard.classList.add('hidden');
    feedbackCard.classList.remove('hidden');

    if (isCorrect) {
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = 'Правильно!';
        feedbackTitle.style.color = '#4caf50';
    } else {
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Неправильно';
        feedbackTitle.style.color = '#f44336';
    }

    feedbackText.textContent = explanation;
}

// Следующий вопрос
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        feedbackCard.classList.add('fade-out');
        setTimeout(() => {
            feedbackCard.classList.add('hidden');
            feedbackCard.classList.remove('fade-out');
            questionCard.classList.remove('hidden');
            loadQuestion();
        }, 400);
    } else {
        feedbackCard.classList.add('fade-out');
        setTimeout(() => {
            showResults();
            feedbackCard.classList.remove('fade-out');
        }, 400);
    }
}

// Показ результатов
function showResults() {
    feedbackCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');

    finalScore.textContent = score;
    progressBar.style.width = '100%';

    const percentage = (score / quizData.length) * 100;
    let message = '';

    if (percentage === 100) {
        message = 'Превосходно! Вы ответили на все вопросы правильно! 🎉';
    } else if (percentage >= 80) {
        message = 'Отличный результат! Вы хорошо усвоили материал! 👏';
    } else if (percentage >= 60) {
        message = 'Хороший результат! Есть небольшие пробелы в знаниях. 📚';
    } else if (percentage >= 40) {
        message = 'Неплохо, но стоит повторить материал. 💪';
    } else {
        message = 'Рекомендуем пройти курс заново и уделить больше внимания материалу. 📖';
    }

    resultsMessage.textContent = message;
}

// Перезапуск теста
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    resultsCard.classList.add('hidden');
    questionCard.classList.remove('hidden');
    init();
}

// События
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Запуск
init();
