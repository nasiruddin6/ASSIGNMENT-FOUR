// Problem-03: Checking Digits Inside a Name//

function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return "Invalid Input";
  }
  let digits = false;
  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== ' ') {
      digits = true;
      break;
    }
  }
  return digits;
}
console.log(checkDigitsInName(898));

/**
 * 
 */
