'use strict'

const name = document.querySelector('.right-header > h2');
const heart = document.querySelector('.heart');

const sheet = document.getElementsByName('sheet');
const shape = document.getElementsByName('shape');
const cream = document.getElementsByName('color');
const lettering = document.querySelector('.select.item-lettering > input');
const request = document.querySelector('.select.more-request > input');


const button = document.querySelector('.option-complete > button');

const seleteditemnum = document.querySelector('.seleted-item');

const items = document.querySelector('.items');
const selectdItem = document.querySelector('.item');




button.addEventListener('click', function () {

    const [selectedsheet] = [...sheet]
        .filter((item) => item.checked);

    const [selectedshape] = [...shape]
        .filter((item) => item.checked);

    const [selectedcream] = [...cream]
        .filter((item) => item.checked);

    const letteringValue = lettering.value;

    const requestValue = request.value;


    let item = document.createElement('div');

    item.textContent = (`${name.textContent} - ${selectedsheet.value}, ${selectedshape.value}, ${selectedcream.value},${letteringValue},${requestValue}`);

    console.log(item.textContent);

    items.appendChild(item);
})



