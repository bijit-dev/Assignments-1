// ------  Basic package section start ------

const plusButton = document.querySelector('#bplus');
const minusButton = document.querySelector('#bminus');
const roomCount = document.querySelector('#broom');
const price = document.querySelector('#brate');
const signupButton = document.querySelector('#bsignup');
const message = document.querySelector('.thanks');

const plusButtonp = document.querySelector('#pplus');
const minusButtonp = document.querySelector('#pminus');
const roomCountp = document.querySelector('#proom');
const pricep = document.querySelector('#prate');
const btn = document.querySelector('#psignup')
const message2 = document.querySelector('.message');


let count = 1;
let currentPrice = 199;

plusButton.addEventListener('click', () => {
    count++;
    roomCount.textContent = count + ' Room';
    currentPrice += 199;
    price.textContent = '$' + currentPrice;
});

minusButton.addEventListener('click', () => {
    if (count > 1) {
        count--;
        roomCount.textContent = count + ' Room';
        currentPrice -= 199;
        price.textContent = '$' + currentPrice;
    }
});
// ------- Basic package section end --------


// ---- Pro package section start -------

let countp = 1;
let currentPricep = 249;

plusButtonp.addEventListener('click', () => {
    countp++;
    roomCountp.textContent = countp + ' Room';
    currentPricep += 249;
    pricep.textContent = '$' + currentPricep;
});

minusButtonp.addEventListener('click', () => {
    if (countp > 1) {
        countp--;
        roomCountp.textContent = countp + ' Room';
        currentPricep -= 249;
        pricep.textContent = '$' + currentPricep;
    }
});

// Pro package section end

// basic sign up js


signupButton.addEventListener('click', () => {
    message.style.display = 'block';
    message.style.color = '#c4b99b';
    message.innerHTML = `Thank you for choosing ${count} room`
}); 

btn.addEventListener('click', () => {
    message2.style.display = 'block';
    message2.style.color = '#c4b99b';
    message2.innerHTML = `Thank you for choosing ${countp} room`
}); 