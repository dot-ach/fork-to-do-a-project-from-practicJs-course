const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
console.log(navEmail);
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleDesktopMenu = () => {
  if(desktopMenu.className.includes('inactive')){
    desktopMenu.classList.remove('inactive');
  }else{
    desktopMenu.classList.add('inactive');
  }
  console.log('click');
};

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('inactive');
  console.log('click')
};

burgerMenuIcon.addEventListener('click', toggleMobileMenu);
navEmail.addEventListener('click', toggleDesktopMenu);