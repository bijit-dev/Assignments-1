// ------  Basic package section start ------

const plusButton = document.querySelector('#bplus');
const minusButton = document.querySelector('#bminus');
const roomCount = document.querySelector('#broom');
const price = document.querySelector('#brate');

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

const plusButtonp = document.querySelector('#pplus');
const minusButtonp = document.querySelector('#pminus');
const roomCountp = document.querySelector('#proom');
const pricep = document.querySelector('#prate');

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

const signupButton = document.querySelector('#bsignup');
const thankYouMessage = document.querySelector('.thanks');

signupButton.addEventListener('click', () => {
    thankYouMessage.style.display = 'block';
    thankYouMessage.style.color = '#c4b99b';
}); 