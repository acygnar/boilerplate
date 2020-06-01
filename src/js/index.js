const mobileMenu = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hamburger--active');
  menuList.classList.toggle('menu__list--active');
});
