function cartStatus(){
    const totalQty = document.querySelector('.cart_item_amount_o');
    const cartEmptyBadge = document.querySelector('.cart_item_e');

    if (parseInt(totalQty.innerHTML) > 0){
        cartEmptyBadge.classList.add('none');
    }else{
        cartEmptyBadge.classList.remove('none');
    };
};