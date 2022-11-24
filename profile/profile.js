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