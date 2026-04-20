// ===== QUIZ SYSTEM =====
class QuizSystem {
    constructor(data) {
        this.data = data;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.isAnswered = false;

        // DOM elements
        this.container = document.querySelector('.quiz-container');
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
        this.loadProgress();
    }

    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextQuestion());

        document.querySelector('.quiz-retry-btn').addEventListener('click', () => {
            this.resetQuiz();
        });

        document.querySelector('.quiz-review-btn').addEventListener('click', () => {
            document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' });
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
        gsap.from(this.questionCard, {
            opacity: 0,
            y: 30,
            rotation: -5,
            duration: 0.6,
            ease: 'back.out(1.2)'
        });
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
            gsap.from(btn, {
                opacity: 0,
                x: -30,
                duration: 0.4,
                delay: index * 0.1,
                ease: 'power2.out'
            });
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

        // Save progress
        this.saveProgress();
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

            gsap.to(confetti, {
                x: tx,
                y: ty,
                opacity: 0,
                rotation: Math.random() * 720,
                duration: 1 + Math.random() * 0.5,
                ease: 'power2.out',
                onComplete: () => confetti.remove()
            });
        }
    }

    flashColor(color) {
        const overlay = document.querySelector('.glitch-overlay');
        const colorMap = {
            'cyan': '#00F5FF',
            'pink': '#FF006E'
        };

        overlay.style.background = colorMap[color];
        gsap.to(overlay, {
            opacity: 0.2,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        });
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

        // Clear saved progress
        this.clearProgress();
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
        gsap.to([this.questionCard, document.querySelector('.quiz-progress')], {
            opacity: 1,
            duration: 0.4
        });

        // Load first question
        this.loadQuestion();

        // Scroll to quiz
        document.querySelector('#quiz').scrollIntoView({ behavior: 'smooth' });
    }

    saveProgress() {
        const progress = {
            currentQuestionIndex: this.currentQuestionIndex,
            score: this.score,
            answers: this.answers,
            timestamp: Date.now()
        };
        localStorage.setItem('objections-quiz-progress', JSON.stringify(progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('objections-quiz-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            // Only restore if less than 24 hours old
            if (Date.now() - progress.timestamp < 24 * 60 * 60 * 1000) {
                this.currentQuestionIndex = progress.currentQuestionIndex;
                this.score = progress.score;
                this.answers = progress.answers;
            }
        }
    }

    clearProgress() {
        localStorage.removeItem('objections-quiz-progress');
    }
}

// Initialize quiz when DOM is ready
let quizInstance;

function initQuiz() {
    if (document.querySelector('.quiz-container') && typeof quizData !== 'undefined') {
        quizInstance = new QuizSystem(quizData);
    }
}

// Call after GSAP animations are set up
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initQuiz, 100);
    });
} else {
    setTimeout(initQuiz, 100);
}
