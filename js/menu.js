const refs = {
    openMenuBtn: document.querySelector('.js-menu-btn'),
    nav: document.querySelector('.js-nav'),
    closeBtn: document.querySelector('.close-nav'),
}

refs.openMenuBtn.addEventListener('click', openMenu);
refs.closeBtn.addEventListener('click', closeMenu);

function openMenu() {
    console.log('we')
    refs.nav.classList.add('js-nav-activ');
}

function closeMenu(e) {
    if(e.target.nodeName != 'A' && e.target.nodeName != 'SPAN') return;

    refs.nav.classList.remove('js-nav-activ');
}