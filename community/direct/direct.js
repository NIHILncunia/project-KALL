const askbtn = document.getElementsByClassName('clientAsk');

const email = document.getElementById('email');
const phone = document.getElementById('phone');
const title = document.getElementById('title');

let popup;

askbtn[0].addEventListener('click', () => {
  if (email.value && phone.value && title.value) {
    let locationX = (screen.width - 460) / 2;
    let locationY = (screen.height - 265) / 2;
    popup = open('/community/direct/direct_popup.html', '팝업창', `left=${locationX}, top=${locationY}px`);
    popup.resizeTo(460, 265);
  }
});













































































































