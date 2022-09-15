/** @type {HTMLInputElement} */
const $inputDate = document.querySelector('#e_history_date');
const now = new Date();

const year = now.getFullYear();

let month = now.getMonth() + 1;
month = month < 10 ? `0${month}` : `${month}`;

const day = now.getDate();

window.addEventListener('load', () => {
  $inputDate.value = [year, month, day].join('-');
});