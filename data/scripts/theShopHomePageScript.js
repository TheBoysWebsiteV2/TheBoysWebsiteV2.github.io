document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementsByClassName("productscontainer")[0];
    
    if (productsContainer) { // Check if productsContainer is not undefined
        const productContainers = productsContainer.getElementsByClassName("productcontainer");
        const productsContainerLen = productContainers.length;

        for (let x = 0; x < productsContainerLen; x++) {
            let z = productContainers[x].id;
            document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
        }
    } else {
        console.error("No elements with class 'productscontainer' found.");
    }
});
