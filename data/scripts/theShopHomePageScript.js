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
let loadsecond = false;
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementsByClassName("productscontainer")[0];

    if (productsContainer) { // Check if productsContainer is not undefined
        const productContainers = productsContainer.getElementsByClassName("productcontainer");
        const productsContainerLen = productContainers.length;

        for (let x = 0; x < productsContainerLen; x++) {
            const z = productContainers[x].id;
            console.log(z)
            document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
            document.getElementById('productTitle_' + z).innerHTML = theShopItemNames[z];
            console.log(theShopItemNames[z])
            document.getElementById('productPrice_' + z).innerHTML = '£' + theShopItemPrices[z];
            console.log(theShopItemPrices[z])

            // Add hover effect
            productContainers[x].addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                this.style.cursor = 'pointer'; // Change cursor to pointer on hover
                document.getElementById('productImage_' + z).src = '/data/images/the-shop-loading-icon.gif';
                document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_2.png';
            });

            productContainers[x].addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Reset background color when not hovering
                document.getElementById('productImage_' + z).src = '/data/images/the_shop_' + z + '_product-image_1.png';
            });
            productContainers[x].addEventListener('click', () => {
              window.location.href = '/dashboard/the-shop/product?code=' + z;
            });
        }
    } else {
        console.error("No elements with class 'productscontainer' found.");
    }
});
