/** @type {NodeListOf<Element>} */
const $$buttons = document.querySelectorAll('button[data-label]');

/** @type {HTMLButtonElement[]} */
const $$newButtons = [...new Set($$buttons)];

$$newButtons.forEach((item) => {
  item.addEventListener('click', () => {
    $$newButtons.map((button) => button.dataset.on = 'false');
    item.dataset.on = 'true';
  });
});