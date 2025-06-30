document.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .flex .navbar');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    var swiper = new Swiper(".course-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});