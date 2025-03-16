const productsContainer = document.getElementsByClassName("productscontainer")[0];
const productContainers = productsContainer.getElementsByClassName("productcontainer");
const productsContainerLen = productContainers.length;

for (let x = 0; x < productsContainerLen; x++) {
  const z = productContainers[x].id;
  document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_1';
}
