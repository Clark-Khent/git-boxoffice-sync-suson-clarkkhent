function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  let total = quantity * basePrice;

  if (quantity >= 5) {
    total = total * 0.9;
  }

  if (isPremium) {
    total = total * 1.5;
  }

  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };