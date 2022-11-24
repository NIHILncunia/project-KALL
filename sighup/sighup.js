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

// ==================== 비밀번호 자리수 경고 ====================
const psMessage = sighup_form.querySelectorAll('.pass-message');

pw.addEventListener('input', function (e) {
  if (e.target.value.length < 7) {
    psMessage[0].classList.remove('none');
  } else {
    psMessage[0].classList.add('none');
  }
});

// ==================== 비밀번호, 비밀번호 확인 일치 경고 ====================
[pw, pwck].forEach(function (item) {
  item.addEventListener('input', function (e) {
    if (pw.value !== pwck.value) {
      psMessage[1].classList.remove('none');
    } else {
      psMessage[1].classList.add('none');
    }
  });
});

// ==================== 주소찾기 ====================
const postal_code_search = document.querySelector(".postal-code-search");

postal_code_search.addEventListener('click', function () {
  var width = 500;
  var height = 600;
  new daum.Postcode({
    width: width,
    height: height
  }).open({
    left: (window.screen.width / 2) - (width / 2),
    top: (window.screen.height / 2) - (height / 2)
  });
})