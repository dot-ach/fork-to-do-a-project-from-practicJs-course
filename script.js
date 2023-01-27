const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const closeDetailsIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const productDetail2 = document.querySelector('.product-detail-2');
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


renderItems(productList);

function renderItems (arr) {
  for (product of arr) {
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
    imgProduct.addEventListener('click', openDetailsProduct); 
    imgProduct.addEventListener('click', toggleProductDetail); 
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
}

const toggleDesktopMenu = () => {
  const isAsideClosed = aside.classList.contains('inactive');
  const isProductDetail2Closed = productDetail2.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  if (!isProductDetail2Closed) {
    productDetail2.classList.add('inactive');
  };
  desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
  const isAsideClosed = aside.classList.contains('inactive');
  const isProductDetail2Closed = productDetail2.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  if (!isProductDetail2Closed) {
    productDetail2.classList.add('inactive');
  };

  mobileMenu.classList.toggle('inactive');
};

function toggleProductDetail(){
  const isAsideClosed = aside.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  };

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  };
}

const toggleCarritoAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetail2Closed = productDetail2.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  };

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  };

  if (!isProductDetail2Closed) {
    productDetail2.classList.add('inactive');
  };


  aside.classList.toggle('inactive');
};

function openDetailsProduct() {
  productDetail2.classList.remove('inactive');
};

function closeDetailsProduct() {
  productDetail2.classList.add('inactive');
};

closeDetailsIcon.addEventListener('click', closeDetailsProduct);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
navEmail.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarritoAside);