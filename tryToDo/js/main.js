'use strict';

function showFreeConsult() {
    const openBtn = document.querySelector('.header_contacts__btn'),
        closeBtn = document.querySelector('.close'),
        modal = document.querySelector('.freeConsult_window');

    openBtn.addEventListener('click', (e) => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = '';
        document.body.style.overflow = '';
    })
    modal.addEventListener('click', function(e){
        if (e.target !== this) return;
        this.style.display = '';
        document.body.style.overflow = '';
    })
}
showFreeConsult();