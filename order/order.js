'use strict';

// ==================== 더미 데이터 ====================
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

// ==================== 결제 품목 목록화, 가격 동기화 ====================
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

// ==================== 구매자 정보를 현재 회원 정보로 ====================
// ==================== 임시로 윤지 넣어둠. ====================
const userData = {
  name: '임윤지',
  address: '경기도 성남시 분당구 판교원로 82번길 30',
  phone: '01027769587',
};

const orderinfo = document.querySelector('.info-block');

let infodiv = document.createElement('div');
let line1div = document.createElement('div');
let line2div = document.createElement('div');
let line3div = document.createElement('div');
let nametdiv = document.createElement('div');
let namediv = document.createElement('div');
let emailtdiv = document.createElement('div');
let emaildiv = document.createElement('div');
let phonetdiv = document.createElement('div');
let phonediv = document.createElement('div');

infodiv.classList.add('info-block');
line1div.classList.add('line');
line2div.classList.add('line');
line3div.classList.add('line');

////////
nametdiv.classList.add('line-title');
namediv.classList.add('line-content');

nametdiv.textContent = '이름';
namediv.textContent = userData.name;
//////////
emailtdiv.classList.add('line-title');
emaildiv.classList.add('line-content');

emailtdiv.textContent = '배송주소';
emaildiv.textContent = userData.address;
///////////
phonetdiv.classList.add('line-title');
phonediv.classList.add('line-content');

phonetdiv.textContent = '휴대폰 번호';
phonediv.textContent = userData.phone;

line1div.appendChild(nametdiv);
line1div.appendChild(namediv);
line2div.appendChild(emailtdiv);
line2div.appendChild(emaildiv);
line3div.appendChild(phonetdiv);
line3div.appendChild(phonediv);

infodiv.appendChild(line1div);
infodiv.appendChild(line2div);
infodiv.appendChild(line3div);

orderinfo.appendChild(infodiv);

// ==================== 구매자 정보와 받는 사람이 일치하면 클릭하는 버튼 ====================
const infoSetting = document.querySelector('button.info-setting');

infoSetting.addEventListener('click', function (e) {
  e.preventDefault();

  const nameInput = document.querySelector('input#name');
  const addressInput = document.querySelector('input#address');
  const phoneNbInput = document.querySelector('input#phoneNb');

  nameInput.readOnly = true;
  nameInput.value = userData.name;

  addressInput.readOnly = true;
  addressInput.value = userData.address;

  phoneNbInput.readOnly = true;
  phoneNbInput.value = userData.phone;
});