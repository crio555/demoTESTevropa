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

// ===== GSAP SETUP =====
gsap.registerPlugin(ScrollTrigger);

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelector('.preloader-text');

    // Glitch effect on preloader text
    preloaderText.classList.add('glitching');

    setTimeout(() => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                preloader.style.display = 'none';
            }
        });
    }, 1500);
});

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * 0.15;
    cursorY += dy * 0.15;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// ===== FLOATING NAVIGATION =====
const sections = document.querySelectorAll('.section');
const navFloating = document.querySelector('.nav-floating');

// Create navigation dots
sections.forEach((section, index) => {
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    dot.setAttribute('data-section', section.id);
    dot.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
    });
    navFloating.appendChild(dot);
});

const navDots = document.querySelectorAll('.nav-dot');

// Update active dot on scroll
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: () => {
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navDots.forEach((dot) => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
    }
});

// ===== GLITCH EFFECTS =====
const glitchElements = document.querySelectorAll('[data-glitch]');

function triggerGlitch(element) {
    element.classList.add('glitching');
    setTimeout(() => {
        element.classList.remove('glitching');
    }, 300);
}

// Random glitch on hero title
const heroTitle = document.querySelector('.hero-title');
setInterval(() => {
    if (Math.random() > 0.7) {
        triggerGlitch(heroTitle);
    }
}, 3000);

// Glitch on hover for section titles
document.querySelectorAll('.section-title').forEach((title) => {
    title.addEventListener('mouseenter', () => {
        if (Math.random() > 0.5) {
            triggerGlitch(title);
        }
    });
});

// ===== GLITCH OVERLAY FLASH =====
const glitchOverlay = document.querySelector('.glitch-overlay');

function flashGlitch() {
    gsap.to(glitchOverlay, {
        opacity: 0.3,
        duration: 0.05,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
    });
}

setInterval(() => {
    if (Math.random() > 0.85) {
        flashGlitch();
    }
}, 4000);

// ===== SCROLL ANIMATIONS =====

// Reveal animations
gsap.utils.toArray('[data-scroll-reveal]').forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out'
    });
});

// Stagger animations
gsap.utils.toArray('[data-scroll-stagger]').forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element.parentElement,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        rotation: -5,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.2)'
    });
});

// Hero number parallax
gsap.to('.hero-number', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 200,
    opacity: 0.05,
    ease: 'none'
});

// Formula blocks rotation on scroll
gsap.utils.toArray('.formula-block').forEach((block) => {
    gsap.to(block, {
        scrollTrigger: {
            trigger: block,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1
        },
        rotation: 0,
        ease: 'power2.out'
    });
});

// Step blocks entrance
gsap.utils.toArray('.step-block').forEach((block, index) => {
    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        rotation: index % 2 === 0 ? -5 : 5,
        duration: 1,
        ease: 'power3.out'
    });
});

// Dialogue messages entrance
gsap.utils.toArray('.dialogue-message').forEach((message, index) => {
    const isClient = message.classList.contains('client');
    gsap.from(message, {
        scrollTrigger: {
            trigger: message,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: isClient ? -80 : 80,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.2,
        ease: 'power2.out'
    });
});

// Checklist items check animation
gsap.utils.toArray('.checklist-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'back.out(1.5)'
    });
});

// Summary points entrance
gsap.utils.toArray('.summary-point').forEach((point, index) => {
    gsap.from(point, {
        scrollTrigger: {
            trigger: point,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -60,
        opacity: 0,
        rotation: -3,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out'
    });
});

// CTA box scale entrance
gsap.from('.cta-box', {
    scrollTrigger: {
        trigger: '.cta-box',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.6)'
});

// ===== NEON GRID ANIMATION =====
gsap.to('.neon-grid', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    opacity: 0.05,
    ease: 'none'
});

// ===== INSIGHT CARDS HOVER EFFECT =====
document.querySelectorAll('.insight-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            rotation: -2,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== QUIZ SECTION SCROLL ANIMATION =====
gsap.from('.quiz-container', {
    scrollTrigger: {
        trigger: '.quiz-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out'
});
