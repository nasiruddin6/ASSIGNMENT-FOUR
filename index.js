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