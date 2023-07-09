const btnMinus = document.querySelector('.btn_minus');
const btnPlus = document.querySelector('.btn_plus');

const counter = document.querySelector('.item_amount');

btnMinus.addEventListener('click', function(){
    console.log('Minus click');

    if (parseInt(counter.innerText) > 0){
        counter.innerText == --counter.innerText;
    };
    
});

btnPlus.addEventListener('click', function(){
    console.log('Plus click');
    counter.innerText = ++counter.innerText;
}); 
