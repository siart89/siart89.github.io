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
    let shift = 0,
        nexCount = 0;

    sliderWrapper.addEventListener('click', (e) => {
        if (!(e.target == leftBtn || e.target == rightBtn)) return;

        if (e.target == rightBtn) {
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
        ;
    });

    // Проба Курусели -Слайдера
    //sliderWrapper.addEventListener('click', doCarousel);

    function doCarousel(event) {
        const sliderBox = document.querySelector('.removable_wrapper');
        let newAllSlider = document.querySelectorAll('.header_slider');


        if (!(event.target == leftBtn || event.target == rightBtn)) return;

        if (event.target == rightBtn) {
            newAllSlider.forEach((elem) => {
                if (elem.classList.contains('active')) {
                    elem.classList.add('right_shift');
                    elem.classList.remove('active');
                }
            })
            sliderBox.append(newAllSlider[0]);
        } else {

            sliderBox.prepend(newAllSlider[newAllSlider.length - 1]);
        };


        // newAllSlider.forEach(function (elem) {
        //     elem.style.transform = `translateX(${shift}%)`;
        // });
        newAllSlider = document.querySelectorAll('.header_slider');
    };
};
moveHeaderSlider();

// утановка высоты Textarea
function setTextAreaHeight() {
    const textarea = document.querySelector('#adv_message'),
        allInput = document.forms.adviceForm.querySelectorAll('input');


    let first = allInput[0].getBoundingClientRect();
    let last = allInput[allInput.length - 1].getBoundingClientRect();

    const areaStyles = getComputedStyle(textarea);

    let textHeight = (last.bottom - first.top - parseInt(areaStyles.paddingTop) - parseInt(areaStyles.paddingBottom) - parseInt(areaStyles.border) * 2) + 'px';
    textarea.style.height = textHeight;

}
setTextAreaHeight();

// ВЫБОР ТЕМЫ СООБЩЕНИЯ 
window.addEventListener('load', function () {
    function changeTopic() {
        const topicField = document.querySelector('.topic_select'),
            popUp = document.querySelector('.popUp_topic .topicList_box');

        topicField.addEventListener('click', function (e) {
            if (popUp.classList.contains('show')) {
                popUp.classList.remove('show');
                this.classList.remove('topic_select_after_open');
            } else {
                popUp.classList.toggle('show');
                this.classList.add('topic_select_after_open');
            }
        });

        popUp.addEventListener('click', e => {
            if (e.target.tagName != 'SPAN') return;
            const text = e.target.textContent.trim();

            if (e.target.parentNode.dataset.topic == 'other') {
                if (!topicField.classList.contains('topic_select_before')) {
                    topicField.classList.add('topic_select_before');
                }
                topicField.innerHTML = '';
            } else {
                topicField.classList.remove('topic_select_before');
                topicField.innerHTML = `<span class="new_topic">${text}</span>`;
            }

            popUp.classList.remove('show');
            topicField.classList.remove('topic_select_after_open');
        });
    };
    changeTopic();
});
