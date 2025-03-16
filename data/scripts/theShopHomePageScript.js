//document.addEventListener('DOMContentLoaded', function() {
//    const productsContainer = document.getElementsByClassName("productscontainer")[0];
//    
//    if (productsContainer) { // Check if productsContainer is not undefined
//        const productContainers = productsContainer.getElementsByClassName("productcontainer");
//        const productsContainerLen = productContainers.length;
//
//        for (let x = 0; x < productsContainerLen; x++) {
//            let z = productContainers[x].id;
//            document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
//            document.getElementById('productTitle_' + z).innerHTML = '<strong>' + theShopItemNames[567394] + '</strong>;
//        }
//    } else {
//        console.error("No elements with class 'productscontainer' found.");
//    }
//});
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementsByClassName("productscontainer")[0];

    if (productsContainer) { // Check if productsContainer is not undefined
        const productContainers = productsContainer.getElementsByClassName("productcontainer");
        const productsContainerLen = productContainers.length;

        for (let x = 0; x < productsContainerLen; x++) {
            let z = productContainers[x].id;
            document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
            document.getElementById('productTitle_' + z).innerHTML = '<strong>' + theShopItemNames[567394] + '</strong>';

            // Add hover effect
            productContainers[x].addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                this.style.cursor = 'pointer'; // Change cursor to pointer on hover
            });

            productContainers[x].addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Reset background color when not hovering
            });
        }
    } else {
        console.error("No elements with class 'productscontainer' found.");
    }
});
