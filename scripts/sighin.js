/** @type {HTMLButtonElement} */
const $find_unknown_order = document.querySelector('.find_unknown_order');
/** @type {HTMLFormElement} */
const $unknown_login = document.querySelector('.unknown_login');

$find_unknown_order.addEventListener('click', () => {
  if ($find_unknown_order.dataset.on === 'false') {
    $find_unknown_order.dataset.on = 'true';
    $find_unknown_order.style.marginBottom = '30px';
    $unknown_login.style.display = 'block';
  } else {
    $find_unknown_order.dataset.on = 'false';
    $find_unknown_order.style.marginBottom = '0';
    $unknown_login.style.display = 'none';
  }
});