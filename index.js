// Problem-01 : Tax Calculator//


function calculateTax(income, expense) {
  if (income < 0 || expense < 0 || income < expense) {
    return "Invalid Input";
  }
  const difference = income - expense;
  const tax = difference * .20;
  return tax;
}
const result = calculateTax(10000, 3000);
console.log(result);


/**
 * 
 */
