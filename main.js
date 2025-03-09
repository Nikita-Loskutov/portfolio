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