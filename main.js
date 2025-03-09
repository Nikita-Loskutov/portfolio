first_block = document.getElementById("first_block");
main_block = document.getElementById("main_block");
fade_block = document.getElementById("fade_block");
body = document.getElementById("body");

setTimeout(function() {
    fade_block.style.opacity = "1";
    fade_block.style.filter = "blur(100px)";
    setTimeout(function() {
        first_block.style.display = "none";
        main_block.style.opacity = "100%";
        fade_block.style.opacity = "0";
        fade_block.style.filter = "blur(0px)";
        body.style.overflow = "auto"
        body.style.background = "#100b38"
    }, 1500);
}, 2500);

// Получаем элементы
const aboutMeTitle = document.querySelector(".about_me_title");
const aboutInfoText = document.querySelectorAll(".about_info_text");
const aboutInfoImage = document.querySelector(".about_info_image");

// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления класса анимации
function checkAnimation() {
    if (isElementInViewport(aboutMeTitle)) {
        aboutMeTitle.classList.add("animate");
        aboutInfoText.forEach(element => {
            element.classList.add("animate");
        });
        aboutInfoImage.classList.add("animate");
    }
}
// Проверка прокрутки и вызов функции
window.addEventListener('scroll', checkAnimation); 


const buttons = document.querySelectorAll('.show_button');
// Добавляем к каждой кнопке обработчик события клика
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс show_button_active у всех кнопок
        buttons.forEach(btn => btn.classList.remove('show_button_active'));
        // Добавляем класс show_button_active к нажатой кнопке
        button.classList.add('show_button_active');
    });
});

const projectButton = document.getElementById("project");
const techStackButton = document.getElementById("techstack");
const projectBlock = document.getElementById("project_block");
const techStackBlock = document.getElementById("techstack_block");

// Устанавливаем "Projects" активным по умолчанию
projectBlock.classList.add("active");
projectButton.classList.add("show_button_active");


// Функция плавного переключения
function switchSection(showBlock, hideBlock) {
    hideBlock.classList.add("fade-out"); // Добавляем эффект исчезновения
    setTimeout(() => {
        hideBlock.classList.remove("active", "fade-out"); // Убираем активный класс
        showBlock.classList.add("active"); // Показываем нужный блок
    }, 400); // Длительность анимации в CSS
}

// Обработчики кликов с плавным переключением
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

// Получаем элементы showcase
const showcaseTitle = document.querySelector(".portfolio_case");
const showcaseProjects = document.querySelectorAll(".shproject .shpcart");
const showcaseTechStack = document.querySelectorAll(".shtechstack .tscart");

// Функция для проверки видимости
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления анимации
function checkShowcaseAnimation() {
    if (isElementInViewport(showcaseTitle)) {
        showcaseTitle.classList.add("animate");
        showcaseProjects.forEach(item => item.classList.add("animate"));
        showcaseTechStack.forEach(item => item.classList.add("animate"));
    }
}

// Запуск при прокрутке
window.addEventListener("scroll", checkShowcaseAnimation);


// Получаем все секции и ссылки в навигации
// Получаем секции и ссылки навигации
const sections = document.querySelectorAll("main > div, footer");
const navLinks = document.querySelectorAll("nav a");

// Функция для определения активного раздела
function activateNavLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.id;
        }
    });

    // Удаляем активный класс у всех ссылок
    navLinks.forEach(link => {
        link.classList.remove("active-nav");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-nav");
        }
    });
}

// Запускаем функцию при прокрутке
window.addEventListener("scroll", activateNavLink);

// Обработчик клика для плавного скролла
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Отступ сверху
                behavior: "smooth"
            });
        }
    });
});

