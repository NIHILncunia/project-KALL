const DJ_couponInputBtn = document.querySelector('.DJ_CouponInputBtn'),
    Dj_couponText = document.querySelector('.DJ_CouponText'),
    Dj_couponTest = document.querySelector('.DJ_couponTest'),
    DJ_couponTestNum = document.querySelector('.DJ_couponTestNum'),
    DJ_InputError = document.querySelector('.DJ_InputError');

DJ_couponInputBtn.addEventListener('click', () => {
    let num = 0;
    console.log(Dj_couponText.value)

    if (num == 0 && Dj_couponText.value === 'EVENTCOUPON') {
        Dj_couponTest.classList.remove('visible')
        DJ_InputError.classList.add('Error')
    } else {
        DJ_InputError.classList.remove('Error')
    }

    if (num >= 0 && Dj_couponText.value ==='EVENTCOUPON')  {
        DJ_couponTestNum.textContent = +DJ_couponTestNum.textContent + 1;
    }

})