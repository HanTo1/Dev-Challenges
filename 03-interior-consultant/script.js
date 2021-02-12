const containerNavMobile = document.querySelector(".container-nav__mobile");
const close = document.getElementById('close');
const open = document.getElementById('open');

open.addEventListener('click', () => {
  containerNavMobile.classList.add('show-nav');
});

close.addEventListener('click', () => {
  containerNavMobile.classList.remove('show-nav');
});