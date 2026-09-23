function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  let total = quantity * basePrice;

  if (isPremium) {
    total = total * 1.5;
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };