const deliveryBtn = document.getElementsByClassName('deliveryBtn');



// 주문진행상태팝업
let beforePopup, readyPopup, deliveryPopup;


deliveryBtn[0].addEventListener('click', (e) => {
  e.preventDefault();

  let locationX = (screen.width - 800) / 2;
  let locationY = (screen.height - 900) / 2;

  beforePopup = open('/mypage/before.html', '입금전', `left=${locationX} ,top=${locationY}px`);
  beforePopup.resizeTo(907, 620);
})

deliveryBtn[1].addEventListener('click', (e) => {
  e.preventDefault();

  let locationX = (screen.width - 800) / 2;
  let locationY = (screen.height - 900) / 2;

  beforePopup = open('/mypage/ready.html', '배송준비중', `left=${locationX} ,top=${locationY}px`);
  beforePopup.resizeTo(907, 620);
})

deliveryBtn[2].addEventListener('click', (e) => {
  e.preventDefault();

  let locationX = (screen.width - 800) / 2;
  let locationY = (screen.height - 900) / 2;

  beforePopup = open('/mypage/delivery.html', '배송중', `left=${locationX} ,top=${locationY}px`);
  beforePopup.resizeTo(907, 620);
})
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm



// 등급 혜택 팝업
const DJ_ClassInfoBtn = document.getElementsByClassName('DJ_ClassInfo');

let DJ_ClassInfoPopup;

DJ_ClassInfoBtn[0].addEventListener('click', function (e) {
  e.preventDefault();
  let locationX = (screen.width - 600) / 2,
    locationY = (screen.height - 700) / 2;


  DJ_ClassInfoPopup = open('/mypage/class.html', '등급혜택', `left=${locationX} ,top=${locationY}`);
  DJ_ClassInfoPopup.resizeTo(735, 660)
})

DJ_ClassInfoBtn[1].addEventListener('click', function (e) {
  e.preventDefault();
  let locationX = (screen.width - 600) / 2,
    locationY = (screen.height - 700) / 2;


  DJ_ClassInfoPopup = open('/mypage/class.html', '등급혜택', `left=${locationX} ,top=${locationY}`);
  DJ_ClassInfoPopup.resizeTo(735, 660)
})
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm



//쿠폰 팝업
const DJ_CouponBtn = document.querySelector('.DJ_coupon');

let DJ_CouponPopup;

DJ_CouponBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let locationX = (screen.width - 800) / 2,
    locationY = (screen.height - 500) / 2;

  DJ_CouponPopup = open('/mypage/coupon.html', '쿠폰', `left=${locationX} ,top=${locationY}`,);
  DJ_CouponPopup.resizeTo(800, 400)

})
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm



//마일리지팝업
const DJ_MileageBtn = document.querySelector('.DJ_mileage');

let DJ_MileagePopup;

DJ_MileageBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let locationX = (screen.width - 550) / 2,
    locationY = (screen.height - 700) / 2;

  DJ_MileagePopup = open('/mypage/mileage.html', '마일리지', `left=${locationX}, top=${locationY}`);
  DJ_MileagePopup.resizeTo(555, 600);

})

// 네비게이션 히든
const DJ_navigator = document.querySelector('.navi_left');

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1800) {
    DJ_navigator.classList.add('DJ_naviHidden');
  } else {
    DJ_navigator.classList.remove('DJ_naviHidden');
  }
})