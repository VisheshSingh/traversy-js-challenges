function calculateTotalSalesWithTax(products, rate) {
  const total = products.reduce(
    (acc, prod) => (acc += prod.price * prod.quantity),
    0
  );
  const tax = (total * rate) / 100;
  return Math.abs((total + tax).toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
