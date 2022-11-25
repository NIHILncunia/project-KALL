'use strict';

let toggle_container = document.getElementById('toggle_container'),
    toggle_Q = toggle_container.getElementsByClassName('toggle_Q'),
    toggle_A = toggle_container.getElementsByClassName('toggle_A');


for (let i = 0; i < toggle_Q.length; i++) {
    toggle_Q[i].addEventListener('click', () => click(i));
}

function click(i) {
    console.log(i);
    if (!toggle_A[i].classList.contains('open')) {
        toggle_A[i].classList.add('open');
    } else {
        toggle_A[i].classList.remove('open');
    }
}

// 네비게이션 히든
const DJ_navigator = document.querySelector('.navi_left');

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1800) {
        DJ_navigator.classList.add('DJ_naviHidden');
    } else {
        DJ_navigator.classList.remove('DJ_naviHidden');
    }
})

//삭제 이벤트

const DJ_delteBtn = document.querySelectorAll('.deleteBtn');

for (let i = 0; i < DJ_delteBtn.length; i++) {
    DJ_delteBtn[i].dataset.dojin = `${i}`;
}

for (let i = 0; i < DJ_delteBtn.length; i++) {

    DJ_delteBtn[i].addEventListener('click', DJ_delete)

}

function DJ_delete(e) {
    let num = e.target.dataset.dojin;

    toggle_A[num].classList.add('hiddenEvent');
    toggle_Q[num].classList.add('hiddenEvent');
}