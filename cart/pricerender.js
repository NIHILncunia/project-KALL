const allItemPriceSpan = document.querySelector('.all-item');
const totalPriceSpan = document.querySelector('.total');

export default function priceRender(all, total) {
  allItemPriceSpan.textContent = all.toLocaleString() + '원';
  totalPriceSpan.textContent = total.toLocaleString() + '원';
}