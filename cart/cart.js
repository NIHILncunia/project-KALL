'use strict';

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

for (let i = 0; i < data.length; i++) {

  let lineDiv = document.createElement('div');
  let checkDiv = document.createElement('div');
  let nameDiv = document.createElement('div');
  let amountDiv = document.createElement('div');
  let priceDiv = document.createElement('div');

  lineDiv.classList.add('line');

  checkDiv.classList.add('line-content', 'w25');

  nameDiv.classList.add('line-content');
  nameDiv.textContent = data[i].name;

  amountDiv.classList.add('line-content', 'w100', 'amount');
  amountDiv.textContent = data[i].amount;

  priceDiv.classList.add('line-content', 'w100', 'price');
  priceDiv.textContent = data[i].price;

  let input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'item[]';
  input.value = `item${i + 1}`;
  input.checked = data[i].checked;

  checkDiv.appendChild(input);
  lineDiv.appendChild(checkDiv);
  lineDiv.appendChild(nameDiv);
  lineDiv.appendChild(amountDiv);
  lineDiv.appendChild(priceDiv);

  cart.appendChild(lineDiv);
}

// ==================== 선택시 가격 동기화 ====================
// let line = [...cart.querySelectorAll('div.line')].filter((item, index) => index !== 0);

// const allItemPriceSpan = document.querySelector('.all-item');
// const totalPriceSpan = document.querySelector('.total');

// let allItemPrice = 0, totalPrice = 0;

// line.forEach((item, index) => {
//   const checkbox = item.querySelector('input');
//   const price = item.querySelector('div.price');
//   const priceNumber = +price.textContent.replace('원', '').replace(',', '');

//   console.log(priceNumber);

//   checkbox.addEventListener('click', function () {
//     if (this.checked) {
//       allItemPrice += priceNumber;
//     } else {
//       allItemPrice -= priceNumber;
//     }

//     totalPrice = allItemPrice === 0 ? 0 : allItemPrice + 3000;

//     allItemPriceSpan.textContent = allItemPrice.toLocaleString() + '원';
//     totalPriceSpan.textContent = totalPrice.toLocaleString() + '원';
//   });
// });

// function priceChange() {

// }

// selectBox.forEach(function (item) {
//   item.addEventListener('click', function () {
//     console.log(this.checked);
//   });
// })

// ==================== 전체 선택 ====================
const allItem = cart.querySelector('#all-item');
const selectBox = cart.querySelectorAll('input[type=checkbox]');

allItem.addEventListener('click', function () {
  if (allItem.checked) {
    selectBox.forEach((item) => item.checked = true);
  } else {
    selectBox.forEach((item) => item.checked = false);
  }
});