export default function rendering(node, cart) {
  node.forEach(function (item, index) {
    let lineDiv = document.createElement('div');
    let checkDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let amountDiv = document.createElement('div');
    let priceDiv = document.createElement('div');

    lineDiv.classList.add('line');

    checkDiv.classList.add('line-content', 'w25');

    nameDiv.classList.add('line-content');
    nameDiv.textContent = item.name;

    amountDiv.classList.add('line-content', 'w100', 'amount');
    amountDiv.textContent = item.amount;

    priceDiv.classList.add('line-content', 'w100', 'price');
    priceDiv.textContent = item.price.toLocaleString() + '원';

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'item[]';
    input.value = `item${index + 1}`;
    input.checked = item.checked;

    checkDiv.appendChild(input);
    lineDiv.appendChild(checkDiv);
    lineDiv.appendChild(nameDiv);
    lineDiv.appendChild(amountDiv);
    lineDiv.appendChild(priceDiv);

    cart.appendChild(lineDiv);
  });
}