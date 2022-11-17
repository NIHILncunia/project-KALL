'use strict';

import rendering from './rendering.js';
import priceRender from './pricerender.js';

const data = [
  {
    name: '러블리 하트케이크 | 일반, 초코색, 원형',
    amount: 1,
    price: 40000,
    checked: false,
  },
  {
    name: '티아라 케이크 | 1호',
    amount: 1,
    price: 35000,
    checked: false,
  }
];

// 항목 추가
const cart = document.querySelector('.cart');

rendering(data, cart);

// ==================== 선택시 가격 동기화 ====================
let line = cart.querySelectorAll('div.line');

let allItemPrice = 0, totalPrice = 0;

line.forEach((item, index) => {
  const checkbox = item.querySelector('input');
  const price = item.querySelector('div.price');
  const priceNumber = +price.textContent.replace('원', '').replace(',', '');

  checkbox.addEventListener('click', function () {
    if (this.checked) {
      data[index].checked = true;
      allItemPrice += priceNumber;
    } else {
      data[index].checked = false;
      allItemPrice -= priceNumber;
    }

    totalPrice = allItemPrice === 0 ? 0 : allItemPrice + 3000;

    priceRender(allItemPrice, totalPrice);
  });
});

// ==================== 전체 선택 ====================
const allItem = cart.querySelector('#all-item');
const selectBox = [...cart.querySelectorAll('input[type=checkbox]')]
  .filter((item, index) => index !== 0);

allItem.addEventListener('click', function () {
  const selectedLine = [...line].filter((item) => {
    const checkbox = item.querySelector('input');

    return checkbox.checked !== true;
  });

  if (allItem.checked) {
    selectBox.forEach((item, index) => {
      item.checked = true;
      data[index].checked = true;
    });

    selectedLine.forEach((item, index) => {
      const checkbox = item.querySelector('input');
      const price = item.querySelector('div.price');
      const priceNumber = +price.textContent.replace('원', '').replace(',', '');

      allItemPrice += priceNumber;

      totalPrice = allItemPrice === 0 ? 0 : allItemPrice + 3000;
    });
  } else {
    selectBox.forEach((item, index) => {
      item.checked = false;
      data[index].checked = false;
    });

    allItemPrice = 0;
    totalPrice = 0;
  }

  priceRender(allItemPrice, totalPrice);
});


const seleteddelete = document.querySelector('.seleted-delete');

const itemline = document.querySelectorAll('.line');

// itemline.forEach((item) => {
//   const checkedbox = item.querySelector('input');

//   if (checkedbox.checked) {
//     if (seleteddelete) {
//       checkedbox.remove
//     }
//   }
// })

seleteddelete.addEventListener('click', function (e) {
  e.preventDefault();

  itemline.forEach((item) => {
    cart.removeChild(item);
  });

  const newData = data.filter((item) => !item.checked);
  console.log(newData);

  rendering(newData, cart);
});