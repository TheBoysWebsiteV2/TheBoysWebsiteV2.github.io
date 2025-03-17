const urlParams = new URLSearchParams(window.location.search); const bgh = urlParams.get('code');
document.addEventListener('DOMContentLoaded', function() { 
  document.getElementById('productImage' + bgh).src = '/data/images/the_shop_' + bgh + '_product-image_1.png';
  document.getElementById('productTitle' + bgh).innerHTML = theShopItemNames[bgh];
  document.getElementById('productPrice' + bgh).innerHTML = theShopItemPrices[bgh];
});
