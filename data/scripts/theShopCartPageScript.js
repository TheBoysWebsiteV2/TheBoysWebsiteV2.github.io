//TO BE CONTINUED!!!
//const cart = sessionStorage.getItem('theShopCart'); let cartItemsDiv = document.getElementById('cartItemsDiv');
//if (cart == null) {
//  cartItemsDiv.innerHTML='<h3>Your cart is empty.</h3>';
//} else {
//  const cartItemsLen = cart.length;
//  const splitCart = cart.split(' ');
//  console.log(splitCart);
//  for (let x = 0; x < cartItemsLen; x++) {
//    const currentItemCode = splitCart[x];
//    console.log(currentItemCode);
//    const itemElement = document.createElement('div');
//    itemElement.setAttribute('class', 'productcontainer');
//    itemElement.innerHTML = '<p><img src="/data/images/the_shop_' + currentItemCode + '_product-image_1.png"/></p><p><strong>' + theShopItemNames[currentItemCode] + '</strong></p><br><p>' + theShopItemPrices[currentItemCode] + '</p>';
//    cartItemsDiv.appendChild(itemElement);
//  };
//};
//
// Ensure `theShopItemNames` and `theShopItemPrices` are defined or imported
const cart = sessionStorage.getItem('theShopCart'); 
let cartItemsDiv = document.getElementById('cartItemsDiv');
function removeItem(num) {
  //TO BE CONTINUED
  let newCart = cart;
  //num=num-1;
  if (num == 0) {
    newCart = newCart.split(7, cart.length);
  } else if (num == 1) {
    newCart = cart.split(0, 6) + cart.split(13, cart.length);
  }
  else {
    let a = 6 + num*7;
    newCart = cart.split(0, a) + cart.split(a+7, cart.length);
  }
  sessionStorage.setItem('theShopCart', newCart); //Change Cart
  window.location.reload(); //Restart to show new cart after item removal.
}
if (cart == null) {
  cartItemsDiv.innerHTML = '<h3>Your cart is empty.</h3>';
} else {
  const splitCart = cart.split(' ');
  console.log(splitCart);
  let totalSoFar = 0.00;
  for (let x = 0; x < splitCart.length; x++) {
    const currentItemCode = splitCart[x];
    console.log(currentItemCode);
    
    // Check if `currentItemCode` is valid and exists in `theShopItemNames`
    if (theShopItemNames[currentItemCode]) {
      totalSoFar = parseFloat((totalSoFar + theShopItemPricesAsNum[currentItemCode]).toFixed(2));
      const itemElement = document.createElement('div');
      itemElement.setAttribute('class', 'productcontainer');
      itemElement.innerHTML = `
        <p><img src="/data/images/the_shop_${currentItemCode}_product-image_1.png"/></p>
        <p><strong>${theShopItemNames[currentItemCode]}</strong></p>
        <br>
        <p>£${theShopItemPrices[currentItemCode]}</p>
        <button class="removeButton" onclick="removeItem(` + x + `)">Remove</button>`;
      cartItemsDiv.appendChild(itemElement);
    } else {
      console.warn(`Item code ${currentItemCode} not found in theShopItemNames`);
    }
  }
  document.getElementById('totalPriceText').innerHTML = '£' + totalSoFar.toFixed(2);
}
