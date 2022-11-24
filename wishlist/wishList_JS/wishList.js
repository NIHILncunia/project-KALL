// 네비게이션 히든
const DJ_navigator = document.querySelector('.navi_left');

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1800) {
        DJ_navigator.classList.add('DJ_naviHidden');
    } else {
        DJ_navigator.classList.remove('DJ_naviHidden');
    }
})

// 상품이름별 크기 조절
const prdName = document.querySelectorAll('.DJ_prdName>a');

for (let i = 0; i < prdName.length; i++) {
    if (prdName[i].textContent.length > 11) {
        prdName[i].setAttribute('style', 'font-size: 14px;')
    }
}


// //위시리스트 삭제이벤트
const DJ_wishList = document.querySelectorAll('.DJ_wish_row'), DJ_deleteBtn = document.querySelectorAll('.fa-heart');


for (let i = 0; i < DJ_deleteBtn.length; i++) {
    DJ_deleteBtn[i].dataset.dojin = `${i}`;
}

for (let i = 0; i < DJ_deleteBtn.length; i++) {

    DJ_deleteBtn[i].addEventListener('click', Delete)
}

function Delete(e) {
    let num = e.target.dataset.dojin;
    DJ_wishList[num].classList.add('hiddenEvent');
}