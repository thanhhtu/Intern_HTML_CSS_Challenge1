/*=============== SET MARGIN FOR BODY ===============*/
const updateBodyMargin = () => {
  const header = document.querySelector('.header');
  const body = document.body;
  const headerHeight = header.offsetHeight;

  body.style.marginTop = `${headerHeight}px`;

  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}
window.addEventListener('DOMContentLoaded', updateBodyMargin);
window.addEventListener('resize', updateBodyMargin);

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);
  
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
}
showMenu('nav-toggle','nav-menu');

/*=============== UPDATE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const nav = document.getElementById('header')
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

