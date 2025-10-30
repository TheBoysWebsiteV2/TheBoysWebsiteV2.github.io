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
let fiwdshafncowihnfogund = `let loadsecond = false;
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementsByClassName("productscontainer")[0];

    if (productsContainer) { // Check if productsContainer is not undefined
        const productContainers = productsContainer.getElementsByClassName("productcontainer");
        const productsContainerLen = productContainers.length;
        console.log('PRODUCT CONTAINER LEN: ' + productsContainerLen)
        for (let x = 0; x < productsContainerLen; x++) {
            let z = productContainers[x].id;
            console.log(z)
            let img = document.createElement('img')
            img.src = '/data/images/the_shop_' + z + '_product-image_1.png';
            img.parent = productContainers[x]
            let title = document.createElement('p')
            title.style = 'font-weight: bold;'
            title.innerHTML = theShopItemNames[z];
            title.parent = productContainers[x]
            console.log(theShopItemNames[z])
            let price = document.createElement('p')
            price.style = 'margin: 0 auto;'
            price.innerHTML = '£' + theShopItemPrices[z];
            price.parent = productContainers[x]
            console.log(theShopItemPrices[z])

            // Add hover effect
            productContainers[x].addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                //this.style.cursor = 'pointer'; // Change cursor to pointer on hover
                img.src = '/data/images/the-shop-loading-icon.gif';
                img.src = '/data/images/the_shop_' + z + '_product-image_2.png';
            });

            productContainers[x].addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Reset background color when not hovering
                img.src = '/data/images/the_shop_' + z + '_product-image_1.png';
            });
            productContainers[x].addEventListener('click', () => {
              window.location.href = '/dashboard/the-shop/product?code=' + z;
            });
        }
    } else {
        console.error("No elements with class 'productscontainer' found.");
    }
});`

let loadsecond = false;
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementsByClassName("productscontainer")[0];

    if (productsContainer) { // Check if productsContainer is not undefined
        const productContainers = productsContainer.getElementsByClassName("productcontainer");
        const productsContainerLen = productContainers.length;
        console.log('PRODUCT CONTAINER LEN: ' + productsContainerLen)
        for (let x = 0; x < productsContainerLen; x++) {
            let z = productContainers[x].id;
            console.log(z)

            // Create elements
            let img = document.createElement('img')
            img.src = '/data/images/the_shop_' + z + '_product-image_1.png';

            let title = document.createElement('p')
            title.style.fontWeight = 'bold';
            title.innerHTML = theShopItemNames[z];

            let price = document.createElement('p')
            price.style.margin = '0 auto';
            price.innerHTML = '£' + theShopItemPrices[z];

            // Append elements to the container
            productContainers[x].appendChild(img);
            productContainers[x].appendChild(title);
            productContainers[x].appendChild(price);

            // Add hover effect
            productContainers[x].addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                img.src = '/data/images/the-shop-loading-icon.gif';
                img.src = '/data/images/the_shop_' + z + '_product-image_2.png';
            });

            productContainers[x].addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Reset background color when not hovering
                img.src = '/data/images/the_shop_' + z + '_product-image_1.png';
            });
            productContainers[x].addEventListener('click', () => {
              window.location.href = '/dashboard/the-shop/product?code=' + z;
            });
        }
    } else {
        console.error("No elements with class 'productscontainer' found.");
    }
});
