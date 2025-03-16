const productsContainer = document.getElementsByClassName("productscontainer")[0];
const productsContainerLen = productsContainer.getElementsByClassName("productcontainer").length;

for (let x = 0; x < productsContainerLen; x++) {
  z = productsContainer.getElementsByClassName("productcontainer")[x].id
  document.getElementById('productImage_' + z).src='/data/images/the_shop_' + z + '_product-image_1';
}
