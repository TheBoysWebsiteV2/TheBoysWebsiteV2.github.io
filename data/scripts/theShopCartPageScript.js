//TO BE CONTINUED!!!
const cart = sessionStorage.getItem('theShopCart'); let cartItemsDiv = document.getElementById('cartItemsDiv');
if (cart == null) {
  cartItemsDiv.innerHTML='<h3>Your cart is empty.</h3>';
} else {
  const cartItemsLen = cart.length;
  const splitCart = cart.split(' ');
  console.log(splitCart);
  for (let x = 0; x < cartItemsLen; x++) {
    const currentItemCode = splitCart[x];
    console.log(currentItemCode);
    const itemElement = document.createElement('div');
    itemElement.setAttribute('class', 'productcontainer');
    itemElement.innerHTML = '<p><img src="/data/images/the_shop_' + currentItemCode + '_product-image_1.png"/></p><p><strong>' + theShopItemNames[currentItemCode] + '</strong></p><br><p>' + theShopItemPrices[currentItemCode] + '</p>';
    cartItemsDiv.appendChild(itemElement);
  };
};
