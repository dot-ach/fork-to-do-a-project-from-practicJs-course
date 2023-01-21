const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
console.log(navEmail);

const toggleDesktopMenu = () => {
  if(desktopMenu.className.includes('inactive')){
    desktopMenu.classList.remove('inactive');
  }else{
    desktopMenu.classList.add('inactive');
  }
  console.log('click');
};

navEmail.addEventListener('click', toggleDesktopMenu);