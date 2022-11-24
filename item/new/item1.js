'use strict'

const name = document.querySelector('.right-header > h2');
const heart = document.querySelector('.heart');

const sheet = document.getElementsByName('sheet');
const sheetLabel = document.querySelectorAll('.sheet');

const shape = document.getElementsByName('shape');
const shapeLabel = document.querySelectorAll('.shape');

const cream = document.getElementsByName('color');
const creamLabel = document.querySelectorAll('.color');

const lettering = document.querySelector('.select.item-lettering > input');
const request = document.querySelector('.select.more-request > input');

const button = document.querySelector('.option-complete > button');

const seleteditemnum = document.querySelector('.seleted-item > span');

const items = document.querySelector('.items');
const selectdItem = document.querySelector('.item');

button.addEventListener('click', function () {

  const [selectedsheet] = [...sheet]
    .filter((item) => item.checked);
  const [sheetLabelText] = [...sheetLabel].filter((item) => item.htmlFor === selectedsheet.id);

  const [selectedshape] = [...shape]
    .filter((item) => item.checked);
  const [shapeLabelText] = [...shapeLabel].filter((item) => item.htmlFor === selectedshape.id);

  const [selectedcream] = [...cream]
    .filter((item) => item.checked);
  const [creamLabelText] = [...creamLabel].filter((item) => item.htmlFor === selectedcream.id);

  const letteringValue = lettering.value;
  const requestValue = request.value;

  let item = document.createElement('div');

  const sheetText = sheetLabelText.textContent;
  const shapeText = shapeLabelText.textContent;
  const creamText = creamLabelText.textContent;

  if (selectedsheet && selectedshape && selectedcream) {
    if (letteringValue) {
      item.textContent = (`${name.textContent} - ${sheetText}, ${shapeText}, ${creamText}, ${letteringValue}`);
    } else if (requestValue) {
      item.textContent = (`${name.textContent} - ${sheetText}, ${shapeText}, ${creamText},${requestValue}`);
    } else if (letteringValue && requestValue) {
      item.textContent = (`${name.textContent} - ${sheetText}, ${shapeText}, ${creamText}, ${letteringValue}, ${requestValue}`);
    } else {
      item.textContent = (`${name.textContent} - ${sheetText}, ${shapeText}, ${creamText}`);
    }
  } else {
    return;
  }

  items.appendChild(item);

  seleteditemnum.textContent = items.children.length;
})

const data = [
  {
    id: 1,
    link: '/item/new/item1.html',
    category: 'product',
    name: '러블리 하트케이크',
    score: '4.5',
    review: 24,
    price: 40000,
    createdAt: new Date('2022-10-06'),
    image: '/images/cake/product/product1.jpg',
    tags: ["하트", "기념일"],
  },
  {
    id: 2,
    link: '#',
    category: 'product',
    name: '빈티지 메리 체리 케이크',
    score: '4.5',
    review: 46,
    price: 36000,
    createdAt: new Date('2022-10-07'),
    image: '/images/cake/product/product2.png',
    tags: ["빈티지", "생일"],
  },
  {
    id: 3,
    link: '#',
    category: 'product',
    name: '팔레트 케이크',
    score: '4.5',
    review: 42,
    price: 38000,
    createdAt: new Date('2022-10-07'),
    image: '/images/cake/product/product3.jpg',
    tags: ["디자인", "생일"],
  },
  {
    id: 4,
    link: '#',
    category: 'product',
    name: '달력 케이크',
    score: '4.5',
    review: 45,
    price: 35000,
    createdAt: new Date('2022-10-08'),
    image: '/images/cake/product/product4.png',
    tags: ["기념일", "디자인"],
  },
  {
    id: 5,
    link: '#',
    category: 'product',
    name: '감사패 케이크',
    score: '4.5',
    review: 56,
    price: 42000,
    createdAt: new Date('2022-10-08'),
    image: '/images/cake/product//product5.png',
    tags: ["어른", "선물"],
  },
]

//////문의남기기

const content = document.querySelector('.content.question');
const box = document.querySelector('.box');
const questionbox = document.querySelector('.question-box');
const questiontitle = document.querySelector('.question-title');
const questionuser = document.querySelector('.question-user');
const questionbuttons = document.querySelector('.question-buttons > button');
const qinputtitle = document.querySelector('.q_input1');
const qinputcontent = document.querySelector('.q_input2');

questionbuttons.addEventListener('click', function () {
  const qinputtitleValue = qinputtitle.value;
  const qinputcontentValue = qinputcontent.value;

  if (qinputtitleValue && qinputcontentValue) {
    let detail = document.createElement('details');
    detail.classList.add('question-box');

    let summary = document.createElement('summary');
    let quser = document.createElement('div')
    quser.classList.add('question-user');

    let qtitle = document.createElement('div');
    qtitle.classList.add('question-title');

    let qucontent = document.createElement('div');

    qtitle.textContent = qinputtitleValue;

    quser.textContent = questionuser.textContent;

    summary.appendChild(qtitle);
    summary.appendChild(quser);
    detail.appendChild(summary);

    let qcontent = document.createElement('div');
    qcontent.classList.add('question-content');
    qcontent.innerHTML = `Q. <br />${qinputcontentValue}`;

    detail.appendChild(qcontent);

    box.appendChild(detail);
  }
})
