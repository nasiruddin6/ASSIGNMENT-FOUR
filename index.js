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


// Problem 02 : Notification Generator//

function sendNotification(email) {
  if (!email.includes('@')) {
    return "Invalid Email";
  }

  const email_name = email.split("@")
  const nickName = email_name[0]
  const domaineName = email_name[1]

  const notification = nickName + " sent you an email from " + domaineName

  return notification

}
console.log(sendNotification("nurmahammadmondol@gmail.com"));
console.log(sendNotification("mdlitonmiagmail.com"));


/**
 * 
 */

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


// Problem 04 : Calculate Admission Final Score// 

function calculateFinalScore(obj) {
  if (typeof obj !== 'object') {
    return 'Invalid Input';
  }

  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  if (obj.isFFamily === true) {
    isFFamily = 20;
  } else {
    isFFamily = 0;
  }
  const totalMarks = testScore + schoolGrade + isFFamily;
  if (totalMarks >= 80) {
    return true;
  } else {
    return false;
  }
}

const info = { name: 'Rajib', testScore: 15, schoolGrade: 25, isFFamily: true };
const results = calculateFinalScore(info);
console.log(results);


/**
 * 
 */


// Problem 05:  Predict Avarage Waiting Time//

function waitingTime(waitingTimes, serialNumber) {

  if (
    Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
    return "Invalid Input";
  }
  let sum = 0;
  for (let waiting of waitingTimes) {
    sum += waiting;
  }

  const Length = waitingTimes.length;
  const avarageTotal = sum / Length;
  const round = Math.round(avarageTotal);

  const item = serialNumber - 1;
  const LaterItem = item - Length;

  const wait_Time = round * LaterItem;

  return wait_Time;

}

const arrayTime = [ 6 ];
const serialNumbers =4;

const time_result = waitingTime(arrayTime, serialNumbers);
console.log(time_result);
