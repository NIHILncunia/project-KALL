function lineDelete(cart) {
  const filteredLine = [...cart.children]
    .filter((item) => !item.classList.contains('header-line'));

  for (const item of filteredLine) {
    cart.removeChild(item);
  }
}

export default lineDelete;