console.log('hello');

const dropMenu = document.querySelector('.drop-down');
const service = document.getElementById('service');
const navLinks = document.querySelectorAll('header nav ul li a');
// obteniendo valores del menu mobile
const menuMobile = document.querySelector('#menu-mobile .icon');
const lines = document.querySelectorAll('.icon .line');
const navMobileMenu = document.querySelector('#menu-mobile nav ');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
service.addEventListener('mouseenter', () => {
  dropMenu.classList.remove('hidden');
});
service.addEventListener('mouseleave', () => {
  dropMenu.classList.add('hidden');
});

menuMobile.addEventListener('mouseenter', () => {
  lines.forEach((line) => line.classList.add('active'));
  navMobileMenu.classList.add('active');
});
menuMobile.addEventListener('mouseleave', () => {
  lines.forEach((line) => line.classList.remove('active'));
  navMobileMenu.classList.remove('active');
});

//carrusel de images

const images = document.querySelectorAll(
  '#carrusel-img .images > .content-images > img'
);

const buttonsMove = document.querySelectorAll(
  '#carrusel-img  .images > .buttons > button'
);

buttonsMove.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const imageActive = Array.from(images).filter((item) =>
      item.classList.contains('active')
    );
    console.log(imageActive);
    console.log(images[0].offsetWidth);
  });
});
