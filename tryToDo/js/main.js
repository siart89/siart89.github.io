'use strict';

// открыте окна запись на Консультацию
function showFreeConsult() {
    const openBtn = document.querySelector('.header_contacts__btn'),
        closeBtn = document.querySelector('.close'),
        form = document.querySelector('.form_wrapper'),
        closeBtnBot = document.querySelector('.modal_bot__close'),
        modal = document.querySelector('.freeConsult_window');

    openBtn.addEventListener('click', (e) => {
        modal.style.display = 'block';
        document.querySelector('.usr_name').focus();
        document.body.style.overflow = 'hidden';
        form.classList.add('transform');
    });

    modal.addEventListener('click', function (e) {
        if (!(e.target == this || e.target == closeBtn || e.target == closeBtnBot)) return;

        this.style.display = '';
        document.body.style.overflow = '';
        form.classList.remove('transform');
    })
};

showFreeConsult();

// Слайдер ХЕДЕРА

function moveHeaderSlider() {
    const leftBtn = document.querySelector('.left_btn'),
        rightBtn = document.querySelector('.right_btn'),
        allSlider = document.querySelectorAll('.header_slider'),
        sliderWrapper = document.querySelector('.slider_wrapper');
    let shift = 0;

    sliderWrapper.addEventListener('click', (e) => {
        if (!(e.target == leftBtn || e.target == rightBtn)) return;

        if (e.target == leftBtn) {
            shift -= 100;
        } else {
            if (shift === 0) {
                shift = -100 * (allSlider.length - 1);
            } else {
                shift += 100;
            };
        };
        if (Math.abs(shift) > 100 * (allSlider.length - 1)) shift = 0;

        allSlider.forEach(function (elem) {
            elem.style.transform = `translateX(${shift}%)`;
        });
    });
};
moveHeaderSlider();