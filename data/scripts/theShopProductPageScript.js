const urlParams = new URLSearchParams(window.location.search); const z = urlParams.get('code'); 
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('productImage' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
  document.getElementById('productTitle' + z).innerHTML = theShopItemNames[z];
  document.getElementById('productPrice' + z).innerHTML = theShopItemPrices[z];
});
