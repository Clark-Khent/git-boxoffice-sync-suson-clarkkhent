const tickets = require('./tickets');

let failures = 0;
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(tickets.isValidQuantity(4), true, 'a normal order quantity is valid');
assertEqual(tickets.isValidQuantity(0), false, 'a zero quantity is invalid');
assertEqual(tickets.isValidQuantity(25), false, 'an order over 20 tickets is invalid');

const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 37, 'price for 3 tickets with flat $10 discount');

const groupPrice = tickets.calculateTicketPrice(5, 15.5);
assertEqual(groupPrice, 60, 'group discount plus flat $10 discount');

const vipPrice = tickets.calculateTicketPrice(3, 15.5, true);
assertEqual(vipPrice, 60, 'VIP surcharge plus flat $10 discount');

const groupVipPrice = tickets.calculateTicketPrice(5, 15.5, true);
assertEqual(groupVipPrice, 95, 'group discount, VIP surcharge, and flat $10 discount together');

process.exitCode = failures > 0 ? 1 : 0;