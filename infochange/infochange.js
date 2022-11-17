'use strict';
//비밀번호 변경 이벤트
const chagePassword = document.querySelector('.changePassword'),
  newPassword = document.querySelector('.newPassword'),
  newPasswordCheck = document.querySelector('.newPasswordCheck'),
  checkPassword = document.querySelector('.checkPassword'),
  newpasswordck = document.getElementsByClassName('newpasswordck'),
  checkPasswordbox = document.getElementsByClassName('passmessage');

chagePassword.addEventListener('click', function () {
  newPassword.classList.remove('newPassword'),
    newPasswordCheck.classList.remove('newPasswordCheck')
});

checkPassword.addEventListener('click', function () {
  if (newpasswordck[0].value && newpasswordck[1].value) {
    if (newpasswordck[0].value === newpasswordck[1].value) {
      checkPasswordbox[0].classList.add('checkPasswordbox');
      checkPasswordbox[1].classList.remove('checkPasswordbox');
    } else {
      checkPasswordbox[1].classList.add('checkPasswordbox');
      checkPasswordbox[0].classList.remove('checkPasswordbox');
    }
  }
})



//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//핸드폰번호변경 이벤트
const changePhone = document.querySelector('.changePhone'),
  newPhoneNb = document.querySelector('.newPhoneNb');

changePhone.addEventListener('click', function () {
  newPhoneNb.classList.remove('newPhoneNb');
});
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//이메일변경 이벤트
const changeEmail = document.querySelector('.changeEmail'),
  newEmail = document.querySelector('.newEmail');

changeEmail.addEventListener('click', function () {
  newEmail.classList.remove('newEmail');
});
