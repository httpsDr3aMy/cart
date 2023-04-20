const searchIcon = document.getElementById("search-icon");
const navBottom = document.querySelector(".bottom-nav-searchbox");
navBottom.style.display = 'none';

searchIcon.addEventListener("click", () => {
    if (navBottom.style.display === 'none') {
        navBottom.style.display = 'block';
        navBottom.style.paddingBottom = '20px';
    } else {
        navBottom.style.display = 'none';
        navBottom.style.padding = '0';
    }
});

const modal = document.getElementById("modal");

const btnBurger = document.querySelector(".burger");

btnBurger.addEventListener("click", function() {
    this.classList.toggle("active");
});


function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

const btnNoAccount = document.getElementById("btn-no-account");
const formNoAccount = document.querySelector(".form-no-account");
const boxAccountInfo = document.querySelector(".hidden-box--acount-info");

btnNoAccount.addEventListener("click", () => {
    formNoAccount.style.display = "block";
    boxAccountInfo.style.display = "none";
});

const billingCheckbox = document.getElementById('billing-address');
const billingForm = document.querySelector('.billing-address-form');

billingCheckbox.addEventListener('change', function() {
    if (this.checked) {
        billingForm.style.display = 'flex';
    } else {
        billingForm.style.display = 'none';
    }
});

const days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
const deliveryDayElements = document.querySelectorAll('.delivery-day');
const deliveryDateElements = document.querySelectorAll('.delivery-date');

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

let deliveryDay;

if (tomorrow.getDay() === 0 || tomorrow.getDay() === 6) {
    deliveryDay = 'poniedziałek';
} else {
    deliveryDay = days[tomorrow.getDay()];
}

deliveryDayElements.forEach((element) => {
    element.textContent = deliveryDay;
});

deliveryDateElements.forEach((element) => {
    element.textContent = `${tomorrow.getDate()}.${tomorrow.getMonth() + 1}.${tomorrow.getFullYear()}`;
});

const deliveryOptionRadios = document.querySelectorAll('input[name="delivery-option"]');
const deliveryCostElements = document.querySelectorAll('.delivery-cost');
let deliveryCost = deliveryOptionRadios[0].value;

deliveryOptionRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        deliveryCost = event.target.value;
        deliveryCostElements.forEach(element => {
            element.textContent = `${deliveryCost} €`;
        });
    });
});

deliveryCostElements.forEach(element => {
    element.textContent = `${deliveryCost} €`;
});

const quantity1 = document.getElementById('quantity1');
const quantity2 = document.getElementById('quantity2');

function updatePrice() {
    let quantity = quantity1.value;
    const quantityOutput = document.querySelector('.quantityOutput');
    quantityOutput.textContent = `${quantity}`
    const pricePerUnit = 20;
    let priceNoDelivery = pricePerUnit * quantity;
    let totalPrice = priceNoDelivery + parseInt(deliveryCost);
    const priceElements = document.querySelectorAll('.price');
    const totalPriceElements = document.querySelectorAll('.last-price');

    priceElements.forEach(element => {
        element.textContent = `${priceNoDelivery} €`;
    });

    totalPriceElements.forEach(element => {
        element.textContent = `${totalPrice} €`;
    });
}

quantity1.addEventListener('change', updatePrice);

quantity2.addEventListener('change', () => {
    quantity1.value = quantity2.value;
    updatePrice();
});

updatePrice();

/***/
/*
*
const cartIcon = document.querySelector('.fa-cart-shopping');
const menu = document.querySelector('.menu');

cartIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
let counter = 1;
const binBtnMenu = document.getElementById('bin-btn-menu');
binBtnMenu.addEventListener('click', () => {
    deleteElement('.main--after-delete, .hidden-box');
});
const counterOutput = document.querySelector('.counter')
counterOutput.textContent = `${counter}`;
function deleteElement(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.display = 'none';
    });
    counter = 0;
}*/
const cartIcon = document.querySelector('.fa-cart-shopping');
const menu = document.querySelector('.menu');

cartIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let counter = 1;
const binBtnMenu = document.getElementById('bin-btn-menu');
binBtnMenu.addEventListener('click', () => {
    updateCounter(-1);
    deleteElement('.main--after-delete, .hidden-box');
});

const counterOutput = document.querySelector('.counter');

function deleteElement(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.display = 'none';
    });
    updateCounter(-counter);
}
const cartCount = document.querySelector('.cart');
function updateCounter(value) {
    counter += value;
    counterOutput.textContent = `${counter}`;
    cartCount.setAttribute('data-count', counter);
}
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});
















