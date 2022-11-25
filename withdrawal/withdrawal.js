'use strict';

const req_list = document.getElementById('req_list');
const select_body = document.querySelector('.select-body');
const req_input = document.querySelector('.req-input');
const req_button = document.querySelector('.req-button > button');
const withdrawal_check = document.querySelector('.withdrawal-check');
const pass_check_button = document.querySelector('.pass-check-button');
const pass = document.getElementById('pass');

req_list.addEventListener('click', function () {
  if (this.classList.contains('close')) {
    this.classList.remove('close');
    this.classList.add('open');
  } else {
    this.classList.remove('open');
    this.classList.add('close');
  }
});

select_body.addEventListener('click', function (e) {
  const { textContent } = e.target;
  const { value } = e.target.dataset;

  if (!value) {
    return;
  }

  req_list.textContent = textContent;

  req_list.classList.remove('open');
  req_list.classList.add('close');

  req_list.dataset.value = value;

  if (value === 'res5') {
    req_input.classList.remove('hidden');
  }
});

req_button.addEventListener('click', function () {
  if (req_list.dataset.value !== 'none') {
    withdrawal_check.classList.remove('hidden');
  }
});

pass_check_button.addEventListener('click', function () {
  if (pass.value) {
    if (pass.value === '95879587') {
      alert('회원탈퇴가 완료되었습니다.');
      location.pathname = '/';
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  } else {
    alert('비밀번호를 입력해야합니다.');
  }
});