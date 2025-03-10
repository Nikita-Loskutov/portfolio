document.addEventListener("DOMContentLoaded", () => {
    const firstBlock = document.getElementById("first_block");
    const mainBlock = document.getElementById("main_block");
    const fadeBlock = document.getElementById("fade_block");
    const body = document.getElementById("body");

    setTimeout(() => {
        fadeBlock.style.opacity = "1";
        fadeBlock.style.filter = "blur(100px)";
        setTimeout(() => {
            firstBlock.style.display = "none";
            mainBlock.style.opacity = "1";
            fadeBlock.style.opacity = "0";
            fadeBlock.style.filter = "blur(0px)";
            body.style.overflow = "auto";
            body.style.background = "#0a0629";
        }, 1500);
    }, 2500);

    // Функция проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // Анимация блоков "Обо мне"
    const aboutMeTitle = document.querySelector(".about_me_title");
    const aboutInfoText = document.querySelectorAll(".about_info_text");
    const aboutInfoImage = document.querySelector(".about_info_image");

    function checkAnimation() {
        if (isElementInViewport(aboutMeTitle)) {
            requestAnimationFrame(() => {
                aboutMeTitle.classList.add("animate");
                aboutInfoText.forEach(el => el.classList.add("animate"));
                aboutInfoImage.classList.add("animate");
            });
        }
    }

    window.addEventListener('scroll', checkAnimation, { passive: true });

    // Логика переключения кнопок
    const buttons = document.querySelectorAll('.show_button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('show_button_active'));
            button.classList.add('show_button_active');
        });
    });

    // Переключение между "Проекты" и "Стек технологий"
    const projectButton = document.getElementById("project");
    const techStackButton = document.getElementById("techstack");
    const projectBlock = document.getElementById("project_block");
    const techStackBlock = document.getElementById("techstack_block");

    projectBlock.classList.add("active");
    projectButton.classList.add("show_button_active");

    function switchSection(showBlock, hideBlock) {
        hideBlock.classList.add("fade-out");
        setTimeout(() => {
            hideBlock.classList.remove("active", "fade-out");
            showBlock.classList.add("active");
        }, 400);
    }

    projectButton.addEventListener("click", () => {
        switchSection(projectBlock, techStackBlock);
        projectButton.classList.add("show_button_active");
        techStackButton.classList.remove("show_button_active");
    });

    techStackButton.addEventListener("click", () => {
        switchSection(techStackBlock, projectBlock);
        techStackButton.classList.add("show_button_active");
        projectButton.classList.remove("show_button_active");
    });

    // Анимация "Портфолио"
    const showcaseTitle = document.querySelector(".portfolio_case");
    const showcaseProjects = document.querySelectorAll(".shproject .shpcart");
    const showcaseTechStack = document.querySelectorAll(".shtechstack .tscart");

    function checkShowcaseAnimation() {
        if (isElementInViewport(showcaseTitle)) {
            requestAnimationFrame(() => {
                showcaseTitle.classList.add("animate");
                showcaseProjects.forEach(item => item.classList.add("animate"));
                showcaseTechStack.forEach(item => item.classList.add("animate"));
            });
        }
    }

    window.addEventListener("scroll", checkShowcaseAnimation, { passive: true });

    // Навигация и активные ссылки
    const sections = document.querySelectorAll("main > div, footer");
    const navLinks = document.querySelectorAll("nav a");

    function activateNavLink() {
        let currentSection = "";
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle("active-nav", link.getAttribute("href") === `#${currentSection}`);
        });
    }

    window.addEventListener("scroll", activateNavLink, { passive: true });

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Анимация showcase buttons
    const showcaseButtons = document.querySelector(".showcase_button");

    function checkShowcaseButtonsAnimation() {
        if (isElementInViewport(showcaseButtons)) {
            showcaseButtons.classList.add("animate");
        }
    }

    window.addEventListener("scroll", checkShowcaseButtonsAnimation, { passive: true });
    checkShowcaseButtonsAnimation();

    // Анимация сетки canvas
    const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setTimeout(function() {
            drawGrid();
        }, 4000);
    }
    
    function drawGrid() {
        const gridSize = 30;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(54, 54, 54, 0.25)';
        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
});
