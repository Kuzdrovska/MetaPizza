window.addEventListener('click', function(event){
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

        const counterWrapper = event.target.closest('.btns_wrap_inside');
        counter = counterWrapper.querySelector('.item_amount');
    };
// Plus item
    if (event.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText;

    };
// Minus item
    if (event.target.dataset.action === 'minus'){

        if (parseInt(counter.innerText) > 0){
            counter.innerText == --counter.innerText;
        };

    };

});
