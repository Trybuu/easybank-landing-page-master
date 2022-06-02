const menuBtn = document.querySelector('#menu-btn');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const body = document.querySelector('body');

const menuPopup = document.querySelector('.mobile-popup-menu');

function openMenu(){
    menuPopup.classList.toggle('active');
    body.classList.toggle('block-scroll');
    if(open.classList.contains('active') == true){
        open.classList.remove('active');
        close.classList.add('active');
    }
    else if(close.classList.contains('active') == true){
        close.classList.remove('active');
        open.classList.add('active');
    }
}

menuBtn.addEventListener('click', openMenu);

