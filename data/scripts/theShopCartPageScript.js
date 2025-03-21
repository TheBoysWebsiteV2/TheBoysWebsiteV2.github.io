//TO BE CONTINUED!!!
const cart = sessionStorage.getItem('theShopCart'); let cartItemsDiv = document.getElementById('cartItemsDiv');
if (cart == null) {
  cartItemsDiv.innerHTML='Your cart is empty.';
} else {
  const cartItemsLen = cart.length;
  const splitCart = cart.split(' ');
  for (let x = 0; x < cartItemsLen; x++) {
    const itemElement = document.createElement('div');
    itemElement.class = 'productContainer');
  };
};
