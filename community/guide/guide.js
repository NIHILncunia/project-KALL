'use Strict';


let toggle_Q = document.getElementsByClassName('toggle_Q'),
    toggle_A = document.getElementsByClassName('toggle_A');

console.log(toggle_Q);
console.log(toggle_A);


for(let i = 0; i<toggle_Q.length; i++) {
    toggle_Q[i].addEventListener('click', ()=>click(i));
}

function click(i) {
  console.log(i);
  if(!toggle_A[i].classList.contains('open')){
      toggle_A[i].classList.add('open'); 
  } else {
      toggle_A[i].classList.remove('open'); 
  }
}