const urlParams = new URLSearchParams(window.location.search); const bgh = urlParams.get('code');
document.addEventListener('DOMContentLoaded', function() { 
  if (theShopItemNames[bgh]) {
    console.log(bgh + ' is a valid product.');
    //const data = itemData[bgh]
  } else {
    window.location.replace('/dashboard/the-shop');
  };
  document.getElementById('productImage').src = '/data/images/the_shop_' + bgh + '_product-image_1.png';
  document.getElementById('productTitle').innerHTML = theShopItemNames[bgh];
  document.getElementById('productPrice').innerHTML = '£' + theShopItemPrices[bgh];
});
function addToCart() {
  if ((sessionStorage.getItem('theShopCart') == null) || (sessionStorage.getItem('theShopCart') == '')) {
    sessionStorage.setItem('theShopCart', bgh);
    alert('Item succesfully added to cart!');
  } else {
    sessionStorage.setItem('theShopCart', sessionStorage.getItem('theShopCart') + ' ' + bgh);
    alert('Item succesfully added to cart!');
  }
}
