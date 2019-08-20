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