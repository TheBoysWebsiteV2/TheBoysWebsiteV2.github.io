const urlParams = new URLSearchParams(window.location.search); const bgh = urlParams.get('code');
document.addEventListener('DOMContentLoaded', function() { 
  document.getElementById('productImage').src = '/data/images/the_shop_' + bgh + '_product-image_1.png';
  document.getElementById('productTitle').innerHTML = theShopItemNames[bgh];
  document.getElementById('productPrice').innerHTML = theShopItemPrices[bgh];
});
function addToCart {
  if (sessionStorage.getItem('theShopCart') == null) {
    sessionStorage.setItem('theShopCart', bgh);
    alert('Item succesfully added to cart!');
  } else {
    sessionStorage.setItem('theShopCart', ' ' + bgh);
    alert('Item succesfully added to cart!');
  }
}
