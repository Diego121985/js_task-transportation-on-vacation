/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DailyRate = 40;
  const DiscountDays3 = 20;
  const DiscountDays7 = 50;

  let total = days * DailyRate;

  if (days >= 7) {
    total -= DiscountDays7;
  } else if (days >= 3) {
    total -= DiscountDays3;
  }

  return total;
}

module.exports = calculateRentalCost;
