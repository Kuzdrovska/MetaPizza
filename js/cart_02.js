const cartAddItem = document.querySelector('.cart_item_wrap');
const totalQty = document.querySelector('.cart_item_amount_o');

window.addEventListener('click', function(event){

    // add to cart
    if (event.target.hasAttribute('data-cart')) {

        const cartWrapper = event.target.closest('.grid_item');
        
        if (parseInt(cartWrapper.querySelector('.item_amount').innerText) > 0){
            const productInfo = {
                id: cartWrapper.dataset.id,
                imgSrc: cartWrapper.querySelector('.product_img').getAttribute('src'),
                title: cartWrapper.querySelector('.item_name').innerText,
                description: cartWrapper.querySelector('.item_desc').innerText,
                price: cartWrapper.querySelector('.item_price').innerText,
                amount: cartWrapper.querySelector('.item_amount').innerText,
            };
    
            const itemInCart = cartAddItem.querySelector(`[data-id="${productInfo.id}"]`);
    
            totalQty.innerText = parseInt(totalQty.innerText) + parseInt(productInfo.amount);
            
            if (itemInCart){
                const counterElement = itemInCart.querySelector('.cart_item_amount');
                counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.amount);
            } else{
    
                const cartItemHTML = `
            <div class="cart_item" data-id="${productInfo.id}">
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
                        <button class="remove_button" data-remove>remove item</button> 
                    </div>
                </div>
            </div>`;
    
            cartAddItem.insertAdjacentHTML('beforeend', cartItemHTML);
            }; 
        };


        

        cartWrapper.querySelector('.item_amount').innerText = "0";

        cartStatus();
    }
    if (event.target.hasAttribute('data-remove')){
        const cartInsideRemove = event.target.closest('.cart_item');
        cartInsideRemove.remove();
        totalQty.innerText = parseInt(totalQty.innerText) - parseInt(cartInsideRemove.querySelector('.cart_item_amount').innerText);
        
        cartStatus();
    };
})
