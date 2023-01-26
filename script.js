const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
  name: 'Bike', 
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla', 
  price: 290,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computador', 
  price: 490,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for(product of productList){
  const container = document.createElement('div');
  const imgProduct = document.createElement('img');
  const productInfo = document.createElement('div');
  const infoContainer = document.createElement('div');
  const pProductName = document.createElement('p');
  const pPrice = document.createElement('p');
  const figure = document.createElement('figure');
  const imgCart = document.createElement('img');

  container.className = 'product-card';
  productInfo.className = 'product-info';

  const productName = document.createTextNode(product.name);
  const productPrice = document.createTextNode(`$${product.price},00`);

  imgProduct.src = product.image;
  imgCart.src = './icons/bt_add_to_cart.svg';
  
  pProductName.appendChild(productName);
  pPrice.appendChild(productPrice);
  infoContainer.append(pPrice, pProductName);
  figure.append(imgCart);

  productInfo.append(infoContainer, figure);
  container.append(imgProduct, productInfo);

  cardsContainer.appendChild(container);

  console.log(container);
}

const toggleDesktopMenu = () => {
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
};

const toggleCarritoAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  };

  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  };

  aside.classList.toggle('inactive');
};


burgerMenuIcon.addEventListener('click', toggleMobileMenu);
navEmail.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);