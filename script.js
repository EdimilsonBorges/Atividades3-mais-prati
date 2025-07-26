const toggleMenu = document.getElementsByClassName('toggle')[0];
const nav = document.querySelector('nav .menu-togger');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
});