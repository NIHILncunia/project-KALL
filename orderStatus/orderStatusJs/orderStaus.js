
// 네비게이션 히든
const DJ_navigator = document.querySelector('.navi_left');

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1800) {
        DJ_navigator.classList.add('DJ_naviHidden');
    } else {
        DJ_navigator.classList.remove('DJ_naviHidden');
    }
})