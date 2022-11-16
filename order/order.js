'use strict';

const data = [
  {
    name: '러블리 하트케이크 | 일반, 초코색, 원형',
    amount: 1,
    price: 40000,
  },
  {
    name: '티아라 케이크 | 1호',
    amount: 1,
    price: 35000,
  }
];

const orderlist = document.querySelector('.item-box');

for (let i = 0; i < data.length; i++) {
  let listdiv = document.createElement('div');
  let namediv = document.createElement('div');
  let amountdiv = document.createElement('div');
  let pricediv = document.createElement('div');

  listdiv.classList.add('list-item');

  namediv.classList.add('name');
  namediv.textContent = data[i].name;

  amountdiv.classList.add('amount');
  amountdiv.textContent = data[i].amount + '개';

  pricediv.classList.add('price');
  pricediv.textContent = data[i].price.toLocaleString() + '원';

  listdiv.appendChild(namediv);
  listdiv.appendChild(amountdiv);
  listdiv.appendChild(pricediv);

  orderlist.appendChild(listdiv);
}

const allItemPriceDiv = document.querySelector('.line-content.all-item');
const totalPriceDiv = document.querySelector('.line-content.total');

let allItemPrice = +allItemPriceDiv.textContent.replace('원', '').replace(',', '');
let totalPrice = +totalPriceDiv.textContent.replace('원', '').replace(',', '');

const items = document.querySelectorAll('.list-item');

items.forEach((item) => {
  let price = item.querySelector('.price');
  price = +price.textContent.replace('원', '').replace(',', '');
  allItemPrice += price;
});

totalPrice = allItemPrice + 3000;

allItemPriceDiv.textContent = allItemPrice.toLocaleString() + '원';
totalPriceDiv.textContent = totalPrice.toLocaleString() + '원';