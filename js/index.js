const buttonLogin = document.querySelector('.btn-login');
const menuLogin = document.querySelector('.block-login');
const closeButton = document.querySelector('.close-btn');
const buttonRegister = document.querySelector('.btn-register');
const blockRegister = document.querySelector('.block-register');
const closeBtnReg = document.querySelector('.close-btn-reg')

function openLoginMenu () {
    menuLogin.style.display = 'block';
}

function closeLoginMenu () {
    menuLogin.style.display = 'none';
}

function openRegisterMenu () {
    blockRegister.style.display = 'block';
}

function closeRegisterMenu () {
    blockRegister.style.display = 'none';
}

closeButton.addEventListener('click', closeLoginMenu);

buttonLogin.addEventListener('click', openLoginMenu);

buttonRegister.addEventListener('click', openRegisterMenu);

closeBtnReg.addEventListener('click', closeRegisterMenu)