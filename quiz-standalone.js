// ===== QUIZ DATA =====
const quizData = {
    questions: [
        {
            id: 1,
            step: "присоединение",
            question: "Клиент говорит: 'Дорого'. Что нужно сделать ПЕРВЫМ?",
            options: [
                "Сразу объяснить, почему цена справедливая",
                "Сказать: 'Я понимаю, вопрос цены важен'",
                "Предложить скидку",
                "Показать более дешёвый товар"
            ],
            correctIndex: 1,
            explanation: "Первый шаг — присоединение к чувствам. Клиент должен почувствовать, что его услышали.",
            color: "pink"
        },
        {
            id: 2,
            step: "аргумент",
            question: "Какой аргумент работает ЛУЧШЕ при возражении 'дорого'?",
            options: [
                "У нас самые низкие цены в городе",
                "Этот сыр от фермера, без добавок — вкус совсем другой",
                "Вы просто не понимаете качество",
                "Все так говорят, но потом покупают"
            ],
            correctIndex: 1,
            explanation: "Объясняй ценность через свойства и выгоды, а не защищай цену.",
            color: "cyan"
        },
        {
            id: 3,
            step: "проба",
            question: "Зачем предлагать пробу или маленькую порцию?",
            options: [
                "Чтобы быстрее избавиться от клиента",
                "Чтобы снизить риск покупки",
                "Потому что так учили",
                "Чтобы показать, что товар плохой"
            ],
            correctIndex: 1,
            explanation: "Проба снижает страх ошибки и даёт клиенту уверенность.",
            color: "purple"
        },
        {
            id: 4,
            step: "закрытие",
            question: "Что делать ПОСЛЕ того, как ответил на возражение?",
            options: [
                "Ждать, пока клиент сам решит",
                "Повторить попытку закрытия сделки",
                "Рассказать про другие товары",
                "Извиниться за высокую цену"
            ],
            correctIndex: 1,
            explanation: "Возражение снято — нужно закрыть сделку, иначе клиент уйдёт думать.",
            color: "yellow"
        },
        {
            id: 5,
            step: "общее",
            question: "Возражение — это...",
            options: [
                "Отказ от покупки",
                "Сомнение, которое можно снять",
                "Признак плохого товара",
                "Повод предложить скидку"
            ],
            correctIndex: 1,
            explanation: "Возражение ≠ отказ. Это запрос на информацию.",
            color: "pink"
        },
        {
            id: 6,
            step: "присоединение",
            question: "Какая фраза НЕ подходит для присоединения?",
            options: [
                "Я понимаю ваши сомнения",
                "Вы не правы, это не дорого!",
                "Да, выбор непростой",
                "Согласен, вопрос цены важен"
            ],
            correctIndex: 1,
            explanation: "Никогда не спорь с клиентом! Это разрушает доверие.",
            color: "pink"
        },
        {
            id: 7,
            step: "формула",
            question: "Правильная последовательность работы с возражением:",
            options: [
                "Проба → Аргумент → Присоединение → Закрытие",
                "Присоединение → Аргумент → Проба → Закрытие",
                "Аргумент → Закрытие → Присоединение → Проба",
                "Закрытие → Присоединение → Аргумент → Проба"
            ],
            correctIndex: 1,
            explanation: "Формула из 4 шагов: Понимаю → Ценность → Проба → Закрытие",
            color: "cyan"
        },
        {
            id: 8,
            step: "аргумент",
            question: "Формула объяснения ценности:",
            options: [
                "Цена → Скидка → Выгода",
                "Свойство → Выгода → Почему стоит",
                "Бренд → Реклама → Продажа",
                "Качество → Количество → Цена"
            ],
            correctIndex: 1,
            explanation: "Связывай свойства товара с конкретными выгодами для клиента.",
            color: "cyan"
        }
    ],
    scoreMessages: {
        perfect: {
            title: "🔥 МАСТЕР ВОЗРАЖЕНИЙ!",
            message: "Ты полностью освоил алгоритм! Теперь никакое возражение тебя не остановит.",
            color: "cyan"
        },
        good: {
            title: "💪 ОТЛИЧНЫЙ РЕЗУЛЬТАТ!",
            message: "Ты на правильном пути! Ещё немного практики — и будешь закрывать любые возражения.",
            color: "purple"
        },
        okay: {
            title: "👍 НЕПЛОХО!",
            message: "Основы понял, но нужно повторить материал. Перечитай формулу и попробуй снова.",
            color: "yellow"
        },
        retry: {
            title: "📚 НУЖНО ПОВТОРИТЬ",
            message: "Вернись к материалу и изучи 4 шага алгоритма. Потом попробуй ещё раз!",
            color: "pink"
        }
    }
};

// ===== QUIZ SYSTEM =====
class QuizSystem {
    constructor(data) {
        this.data = data;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.isAnswered = false;

        // DOM elements
        this.progressFill = document.querySelector('.progress-fill');
        this.currentQuestionSpan = document.querySelector('.current-question');
        this.totalQuestionsSpan = document.querySelector('.total-questions');
        this.questionCard = document.querySelector('.question-card');
        this.questionStepLabel = document.querySelector('.question-step-label');
        this.questionText = document.querySelector('.question-text');
        this.optionsContainer = document.querySelector('.options-container');
        this.explanationBox = document.querySelector('.explanation-box');
        this.explanationText = document.querySelector('.explanation-text');
        this.nextBtn = document.querySelector('.quiz-next-btn');
        this.resultsScreen = document.querySelector('.quiz-results');

        this.init();
    }

    init() {
        this.totalQuestionsSpan.textContent = this.data.questions.length;
        this.loadQuestion();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextQuestion());

        document.querySelector('.quiz-retry-btn').addEventListener('click', () => {
            this.resetQuiz();
        });
    }

    loadQuestion() {
        const question = this.data.questions[this.currentQuestionIndex];
        this.isAnswered = false;

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.data.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;

        // Update question card color
        this.questionCard.className = `question-card color-${question.color}`;

        // Update content
        this.questionStepLabel.textContent = `Шаг: ${question.step}`;
        this.questionText.textContent = question.question;

        // Hide explanation and next button
        this.explanationBox.classList.remove('show');
        this.nextBtn.classList.remove('show');

        // Render options
        this.renderOptions(question);

        // Animate card entrance
        if (typeof gsap !== 'undefined') {
            gsap.from(this.questionCard, {
                opacity: 0,
                y: 30,
                rotation: -5,
                duration: 0.6,
                ease: 'back.out(1.2)'
            });
        }
    }

    renderOptions(question) {
        this.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.dataset.index = index;

            btn.addEventListener('click', () => this.selectOption(index, question));

            this.optionsContainer.appendChild(btn);

            // Stagger animation
            if (typeof gsap !== 'undefined') {
                gsap.from(btn, {
                    opacity: 0,
                    x: -30,
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            }
        });
    }

    selectOption(selectedIndex, question) {
        if (this.isAnswered) return;

        this.isAnswered = true;
        const isCorrect = selectedIndex === question.correctIndex;

        // Record answer
        this.answers.push({
            questionId: question.id,
            selectedIndex,
            correct: isCorrect
        });

        if (isCorrect) {
            this.score++;
            this.handleCorrectAnswer(selectedIndex);
        } else {
            this.handleWrongAnswer(selectedIndex, question.correctIndex);
        }

        // Show explanation
        this.explanationText.textContent = question.explanation;
        this.explanationBox.classList.add('show');

        // Show next button
        this.nextBtn.classList.add('show');

        // Disable all options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
        });
    }

    handleCorrectAnswer(selectedIndex) {
        const selectedBtn = document.querySelector(`.option-btn[data-index="${selectedIndex}"]`);
        selectedBtn.classList.add('correct');

        // Haptic feedback
        this.triggerHaptic('success');

        // Visual celebration
        this.questionCard.classList.add('correct-shake');
        setTimeout(() => this.questionCard.classList.remove('correct-shake'), 600);

        // Confetti effect
        this.createConfetti();

        // Flash effect
        this.flashColor('cyan');
    }

    handleWrongAnswer(selectedIndex, correctIndex) {
        const selectedBtn = document.querySelector(`.option-btn[data-index="${selectedIndex}"]`);
        const correctBtn = document.querySelector(`.option-btn[data-index="${correctIndex}"]`);

        selectedBtn.classList.add('wrong');
        correctBtn.classList.add('correct');

        // Haptic feedback
        this.triggerHaptic('error');

        // Shake animation
        this.questionCard.classList.add('wrong-shake');
        setTimeout(() => this.questionCard.classList.remove('wrong-shake'), 500);

        // Flash effect
        this.flashColor('pink');
    }

    triggerHaptic(type) {
        if ('vibrate' in navigator) {
            if (type === 'success') {
                navigator.vibrate([50, 30, 50]); // Double pulse
            } else if (type === 'error') {
                navigator.vibrate([100]); // Single strong pulse
            }
        }
    }

    createConfetti() {
        const colors = ['#FF006E', '#00F5FF', '#9B59B6', '#FFC107'];
        const confettiCount = 30;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-particle';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            document.body.appendChild(confetti);

            const angle = (Math.PI * 2 * i) / confettiCount;
            const velocity = 150 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            if (typeof gsap !== 'undefined') {
                gsap.to(confetti, {
                    x: tx,
                    y: ty,
                    opacity: 0,
                    rotation: Math.random() * 720,
                    duration: 1 + Math.random() * 0.5,
                    ease: 'power2.out',
                    onComplete: () => confetti.remove()
                });
            } else {
                setTimeout(() => confetti.remove(), 1500);
            }
        }
    }

    flashColor(color) {
        const overlay = document.querySelector('.glitch-overlay');
        const colorMap = {
            'cyan': '#00F5FF',
            'pink': '#FF006E'
        };

        overlay.style.background = colorMap[color];

        if (typeof gsap !== 'undefined') {
            gsap.to(overlay, {
                opacity: 0.2,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut'
            });
        } else {
            overlay.style.opacity = '0.2';
            setTimeout(() => overlay.style.opacity = '0', 100);
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.data.questions.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        // Hide question card
        if (typeof gsap !== 'undefined') {
            gsap.to(this.questionCard, {
                opacity: 0,
                y: -30,
                duration: 0.4,
                onComplete: () => {
                    this.questionCard.style.display = 'none';
                    this.displayResults();
                }
            });

            // Hide progress
            gsap.to(document.querySelector('.quiz-progress'), {
                opacity: 0,
                duration: 0.4
            });
        } else {
            this.questionCard.style.display = 'none';
            document.querySelector('.quiz-progress').style.display = 'none';
            this.displayResults();
        }
    }

    displayResults() {
        const percentage = (this.score / this.data.questions.length) * 100;
        let resultData;

        if (percentage === 100) {
            resultData = this.data.scoreMessages.perfect;
        } else if (percentage >= 75) {
            resultData = this.data.scoreMessages.good;
        } else if (percentage >= 50) {
            resultData = this.data.scoreMessages.okay;
        } else {
            resultData = this.data.scoreMessages.retry;
        }

        // Update results content
        document.querySelector('.results-icon').textContent = this.getResultIcon(percentage);
        document.querySelector('.results-title').textContent = resultData.title;
        document.querySelector('.score-number').textContent = this.score;
        document.querySelector('.score-total').textContent = `/ ${this.data.questions.length}`;
        document.querySelector('.results-message').textContent = resultData.message;
        document.querySelector('.correct-count').textContent = this.score;
        document.querySelector('.wrong-count').textContent = this.data.questions.length - this.score;

        // Show results screen
        this.resultsScreen.classList.add('show');

        // Celebration for high scores
        if (percentage >= 75) {
            this.triggerHaptic('success');
            setTimeout(() => this.createConfetti(), 300);
        }
    }

    getResultIcon(percentage) {
        if (percentage === 100) return '🏆';
        if (percentage >= 75) return '🎉';
        if (percentage >= 50) return '👍';
        return '📚';
    }

    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.isAnswered = false;

        // Hide results
        this.resultsScreen.classList.remove('show');

        // Show question card and progress
        this.questionCard.style.display = 'block';
        document.querySelector('.quiz-progress').style.display = 'block';

        if (typeof gsap !== 'undefined') {
            gsap.to([this.questionCard, document.querySelector('.quiz-progress')], {
                opacity: 1,
                duration: 0.4
            });
        } else {
            this.questionCard.style.opacity = '1';
            document.querySelector('.quiz-progress').style.opacity = '1';
        }

        // Load first question
        this.loadQuestion();
    }
}

// Initialize quiz when DOM is ready
let quizInstance;

function initQuiz() {
    if (document.querySelector('.question-card')) {
        quizInstance = new QuizSystem(quizData);
    }
}

// Call after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
