const urlParams = new URLSearchParams(window.location.search); const z = urlParams.get('code');
document.addEventListener('DOMContentLoaded', function() { 
  document.getElementById('productImage' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
  document.getElementById('productTitle' + z).innerHTML = theShopItemNames[z];
  document.getElementById('productPrice' + z).innerHTML = theShopItemPrices[z];
});

function addToCart() {
  const b = sessionStorage.getItem('theShopCart');
  if (b == null) {
    sessionStorage.setItem('theShopCart', z);
  } else {
    const g = b + ' ' + z
    sessionStorage.setItem('theShopCart', g);
