$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        whaitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
        ]
    });
});

let header__burger = document.querySelector('.header__burger');
let header__button = document.querySelector('.header__button');
let header_menu = document.querySelector('.menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header__button.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

// const iconMenu = document.querySelector('.header__burger');
// const menuBody = document.querySelector('.menu');
// if (iconMenu) {
//     iconMenu.addEventListener("click", function (e) {
//         iconMenu.classList.toggle('active')
//         menuBody.classList.toggle('active')
//         document.body.classList.toggle('lock')
//     })
// }

//прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (header__burger.classList.contains('active')) {
                header__burger.classList.remove('active');
                header__button.classList.remove('active');
                header_menu.classList.remove('active');
                back.classList.remove('lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
