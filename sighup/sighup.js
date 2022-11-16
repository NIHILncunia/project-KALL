'use strict'

const sighup_form = document.querySelector('.sighup-form');

const name = sighup_form.querySelector('#name');
const id = sighup_form.querySelector('#id');
const pw = sighup_form.querySelector('#password');
const pwck = sighup_form.querySelector('#passwordck');

const phone = sighup_form.querySelector('#phone');
const email = sighup_form.querySelector('#email');

const postalCode = sighup_form.querySelector('#postal-code');
const address = sighup_form.querySelectorAll('.address');

const year_birth = sighup_form.querySelector('#year_birth');
const month_birth = sighup_form.querySelector('#month_birth');
const day_birth = sighup_form.querySelector('#day_birth');

// 비밀번호 일치 여부
function passwordConfirm() {
  if (pw.value === "" || pwck.value === "") {
    alert("비밀번호를 입력해주세요.");
    return;
  }

  if (pw.value !== pwck.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  alert("비밀번호가 일치합니다.");

}

// 메인 핸들러
function onSubmitForm(e) {
  e.preventDefault();

  passwordConfirm();
  const visitRoot = sighup_form.querySelectorAll(`input[name=visit-root]:checked`);

  const sighUpUserInfo = {
    name: name.value,
    id: id.value,
    pw: pw.value,
    pwck: pwck.value,
    phone: phone.value,
    email: email.value,
    postalCode: postalCode.value,
    address: `${address[0].value} ${address[1].value}`,
    birth: `${year_birth.value}-${month_birth.value}-${day_birth.value}`,
    visit: [...visitRoot].map((item) => item.value)
  };

  console.log(sighUpUserInfo);

  // location.pathname = './complete.html';
}

sighup_form.addEventListener('submit', onSubmitForm);

// 'use strict'

// //
// const name = document.getElementById('name');
// const id = document.getElementById('id');
// const pw = document.getElementById('password');
// const pwck = document.getElementById('passwordck');
// //
// const phone = document.getElementById('phone');
// const email = document.getElementById('email');
// const address = document.getElementById('postal-code"');
// //
// const year = document.getElementById('year_birth');
// const month = document.getElementById('month_birth');
// const day = document.getElementById('day_birth');
// const visit = document.getElementById('visit-root');
// //
// const button = document.getElementById('join');

// function test(e) {
//   e.preventDefault();
//   const obj = {
//     name: name.value,
//     id: id.value,
//     pw: pw.value,
//     pwck: pwck.value,
//     phone: phone.value,
//     email: email.value,
//     address: address.value,
//     year: year.value,
//     month: month.value,
//     day: day.value,
//     // visit:visit.value,
//   };

//   console.log(obj);
// }

// button.addEventListener('click', test);