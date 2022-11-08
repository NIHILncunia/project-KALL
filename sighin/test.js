'use strict';

const main = document.querySelector('main');
console.log(main);
const ID_password = main.querySelector('input#ID_password');
const password_find_submit = main.querySelector('.password_find_submit');
const forget = main.querySelector('.forget_id');
const find_message = main.querySelector('.find_message');


const id = ['NIHILncunia', 'dukjin', 'sujini', 'yoonja'];

password_find_submit.addEventListener('click', function (e) {
  e.preventDefault();

  if (id.includes(ID_password.value)) {
    forget.style.display='none';
    const form = document.createElement('form');
    const pw = document.createElement('input');
    const pwcheck = document.createElement('input');
    const checkbutton = document.createElement('button');

    pw.type = 'password';
    pw.required = true;
    pw.name = 'password';

    pwcheck.type = 'password';
    pwcheck.required = true;
    pwcheck.name = 'password_check';

    checkbutton.type = 'button';
    checkbutton.textContent = '비밀번호 재설정';

    form.appendChild(pw);
    form.appendChild(pwcheck);
    form.appendChild(checkbutton);

    main.appendChild(form);
  } else {
    find_message.classList.add('red-text');
    find_message.textContent = '일치하는 아이디가 없습니다. 다시 확인해주세요.';
  }
});