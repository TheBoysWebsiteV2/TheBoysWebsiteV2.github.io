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
  let cartArray = cart.split(' '); // Split the cart into an array of items
  if (num >= 0 && num < cartArray.length) {
    cartArray.splice(num, 1); // Remove the item at the specified index
  }
  let newCart = cartArray.join(' '); // Join the array back into a string
  sessionStorage.setItem('theShopCart', newCart); // Update the cart
  window.location.reload(); // Refresh to show the updated cart
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
