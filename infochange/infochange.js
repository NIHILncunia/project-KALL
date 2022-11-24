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




//핸드폰변경 인증이벤트
let checkPhone = document.querySelector('.checkPhone');

checkPhone.addEventListener('click', () => {
  var url = './changePhone.html',
    name = 'popup',
    option = "width = 450 , height = 630";
  window.open(url, name, option);
}
)
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm



//이메일변경 이벤트
const changeEmail = document.querySelector('.changeEmail'),
  newEmail = document.querySelector('.newEmail');

changeEmail.addEventListener('click', function () {
  newEmail.classList.remove('newEmail');
});
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


//우편번호찾기 버튼
const adress_add_button = document.querySelector(".adress_add_button");

adress_add_button.addEventListener('click', function () {
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