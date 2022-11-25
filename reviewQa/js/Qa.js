
'use strict';

let toggle_container = document.getElementById('toggle_container'),
    toggle_Q = toggle_container.getElementsByClassName('toggle_Q'),
    toggle_A = toggle_container.getElementsByClassName('toggle_A');


for (let i = 0; i < toggle_Q.length; i++) {
    toggle_Q[i].addEventListener('click', () => click(i));
}

function click(i) {
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


// 삭제
const DJ_deleteBtn = document.querySelectorAll('.DJ_deleteBtn'),
    toggleQ = document.querySelectorAll('.toggle_Q'), toggleA = document.querySelectorAll('.toggle_A');


console.log(DJ_deleteBtn);
console.log(toggleA);
console.log(toggleQ);

for (let i = 0; i < DJ_deleteBtn.length; i++) {
    DJ_deleteBtn[i].addEventListener('click', DJ_delete)
}

for (let i = 0; i < DJ_deleteBtn.length; i++) {
    DJ_deleteBtn[i].dataset.dojin = `${i}`;
}


function DJ_delete(e) {
    let num = e.target.dataset.dojin;
    toggleA[num].classList.add('hiddenEvent');
    toggleQ[num].classList.add('hiddenEvent');
    console.log(num);
    console.log(toggleA[num]);
    console.log(toggleQ[num]);


}