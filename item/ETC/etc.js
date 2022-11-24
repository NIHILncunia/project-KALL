'use strict';

const name = document.querySelector('.right-header > h2');
const num = document.querySelector('.count-custom>input');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const price = document.querySelector('.count-price');
const items = document.querySelector('.items');
const request = document.querySelector('.select.more-request > input');
const button = document.querySelector('.option-complete>button');



const originPrice = +price.textContent.replace('원', '').replace(',', '');



plus.addEventListener('click', function () {
  num.value = +num.value + 1;
  price.textContent = `${(originPrice * num.value).toLocaleString()}원`;
});

minus.addEventListener('click', function () {
  if (num.value <= 1) {
    return;
  }

  num.value = +num.value - 1;
  price.textContent = `${(originPrice * num.value).toLocaleString()}원`;
});

button.addEventListener('click', function () {

  const requestValue = request.value;

  let item = document.createElement('div');

  if (requestValue) {
    item.textContent = `${name.textContent} - ${num.value} , ${requestValue}`;
  } else {
    item.textContent = `${name.textContent} - ${num.value}`;
  }

  items.appendChild(item);
})