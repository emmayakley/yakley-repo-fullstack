/** Exercise 01 - Coins **/

// Add your function here

const calculateChange = function convertDollarAmountToCoinEquivalent(
  dollarAmount
) {
  if (dollarAmount > 100) {
    console.error('The input amount must be $100 or less');
    return;
  }

  let total = dollarAmount;

  const dollars = Math.floor(dollarAmount / 1);
  console.log('Dollars:', dollars);
  total = total - dollars;

  const quarters = Math.floor(total / 0.25);
  console.log('Quarters:', quarters);
  total = total - quarters * 0.25;

  const dimes = Math.floor(total / 0.1);
  console.log('Dimes:', dimes);
  total = total - dimes * 0.1;

  const nickels = Math.floor(total / 0.05);
  console.log('Nickels:', nickels);
  total = total - nickels * 0.05;

  const pennies = Math.floor(total / 0.01);
  console.log('Pennies:', pennies);
  total = total - pennies * 0.01;
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
