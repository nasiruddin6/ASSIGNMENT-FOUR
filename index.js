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
