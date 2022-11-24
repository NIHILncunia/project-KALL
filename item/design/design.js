let cake = document.querySelector('.right-header > h2'),
  icons = document.getElementsByClassName('icons'),
  icon = icons[0].querySelector('.heart > i'),
  cakesize = document.getElementsByName('size'),
  request = document.getElementById('more-request'),
  select = document.querySelector('.option-complete > button'),
  itemsList = document.getElementsByClassName('items');
const seleted_item = document.


let textContent = '';
let cakename = cake.textContent;
let tmpArray = [];

function changeColor(self) {
  if (self.classList.contains('far')) {
    self.classList.remove('far');
    self.classList.add('fas');
  } else {
    self.classList.remove('fas');
    self.classList.add('far');
  }
}

function changesize() {
  tmpArray = [...cakesize].filter((item) => item.checked);
}

function updateValue(e) {
  textContent = e.target.id;
}

function updateList() {
  itemsList[0].innerHTML += `<div>선택된 상품 총 1개 </div><div>${cakename} - ${tmpArray[0].name} </div>`;
  request.value = '';
}



icon.addEventListener('click', function () {
  changeColor(this);
});

for (let i = 0; i < cakesize.length; i++) {
  cakesize[i].addEventListener('click', changesize);
}

request.addEventListener('input', updateValue);

select.addEventListener('click', updateList);