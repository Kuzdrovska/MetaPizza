const cartAddItem = document.querySelector('.cart_item_wrap');

window.addEventListener('click', function(event){

    // add to cart
    if (event.target.hasAttribute('data-cart')){

        const cartWrapper = event.target.closest('.grid_item');

        const productInfo = {
            imgSrc: cartWrapper.querySelector('.product_img').getAttribute('src'),
            title: cartWrapper.querySelector('.item_name').innerText,
            description: cartWrapper.querySelector('.item_desc').innerText,
            price: cartWrapper.querySelector('.item_price').innerText,
            amount: cartWrapper.querySelector('.item_amount').innerText,
        };
        console.log(productInfo);

        const cartItemHTML = `
        <div class="cart_item">
            <div class="cart_img_wrap">
                <img src="${productInfo.imgSrc}" alt="chosen item">
            </div>
            <div class="cart_non_img_wrap">
                <h1 class="cart_item_name">${productInfo.title}</h1>
                <h2 class="cart_item_desc">${productInfo.description}</h2>
                <div class="cart_item_bottom">
                    <h2 class="cart_item_price">${productInfo.price}</h2>
                    <div class="cart_amount_wrap">
                        <h2 class="cart_qty">Qty:</h2>
                        <h2 class="cart_item_amount">${productInfo.amount}</h2>
                    </div>
                </div>
                <div class="delete_wrap">
                    <button class="remove_button">remove item</button> 
                </div>
            </div>
        </div>`;

        cartAddItem.insertAdjacentHTML('beforeend', cartItemHTML);
        
    }


})
