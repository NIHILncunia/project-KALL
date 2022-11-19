const cart = document.querySelector('.cart');
const line = cart.querySelectorAll('div.line');

console.log(line);

function priceSync(allItemPrice, totalPrice) {
  line.forEach((item, index) => {
    const checkbox = item.querySelector('input');
    const price = item.querySelector('div.price');
    const priceNumber = +price.textContent.replace('원', '').replace(',', '');

    checkbox.addEventListener('click', function () {
      console.log('?');
      if (this.checked) {
        data[index].checked = true;
        allItemPrice += priceNumber;
      } else {
        data[index].checked = false;
        allItemPrice -= priceNumber;
      }

      totalPrice = allItemPrice === 0 ? 0 : allItemPrice + 3000;

      priceRender(allItemPrice, totalPrice);
    });
  });
}

export default priceSync;