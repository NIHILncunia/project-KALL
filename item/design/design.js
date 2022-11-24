let cake = document.querySelector('.right-header > h2'),
  icons = document.getElementsByClassName('icons'),
  icon = icons[0].querySelector('.heart > i'),
  cakesize = document.getElementsByName('size'),
  request = document.getElementById('more-request'),
  select = document.querySelector('.option-complete > button'),
  itemsList = document.querySelector('.items');
const seleted_item = document.querySelector('.seleted-item > span');
const sizeString = document.querySelectorAll('.size');

let textContent = '';
let cakename = cake.textContent;

function changeColor(self) {
  if (self.classList.contains('far')) {
    self.classList.remove('far');
    self.classList.add('fas');
  } else {
    self.classList.remove('fas');
    self.classList.add('far');
  }
}

function updateValue(e) {
  textContent = e.target.id;
}

function updateList() {
  const [tmpArray] = [...cakesize].filter((item) => item.checked);

  if (tmpArray) {
    const [sizeName] = [...sizeString].filter((item) => item.htmlFor === tmpArray.id);

    const itemDiv = document.createElement('div');

    if (request.value) {
      itemDiv.textContent = `${cakename} - ${sizeName.textContent}, ${request.value}`;
    } else {
      itemDiv.textContent = `${cakename} - ${sizeName.textContent}`;
    }

    itemsList.appendChild(itemDiv);
    seleted_item.textContent = itemsList.children.length;

    request.value = '';
  }
}

icon.addEventListener('click', function () {
  changeColor(this);
});

// for (let i = 0; i < cakesize.length; i++) {
//   cakesize[i].addEventListener('click', changesize);
// }

request.addEventListener('input', updateValue);

select.addEventListener('click', updateList);