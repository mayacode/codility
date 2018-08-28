/**
 * Maja Miarecki codility solution
 * https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 */

function solution(A) {
  const max = A.length;
  let testObj = {};

  if (!max) {
    return 1;
  }

  if (max === 1) {
    return checkFirstAndLast(A);
  }

  let minVal = A[0];
  let maxVal = 0;

  for (let i = 0; i < max; i++) {
    testObj[A[i]] = A[i];
    if (A[i] < minVal) {
      minVal = A[i];
    }
    if (A[i] > maxVal) {
      maxVal = A[i];
    }
  }

  if ((maxVal - minVal) + 1 === max) {
    return checkFirstAndLast(testObj, maxVal, minVal);
  }

  const newMax = maxVal + 1;
  for (let j = minVal; j < newMax; j++) {
    if (!testObj[j]) {
      return j;
    }
  }
}

function checkFirstAndLast(obj, max = 0, min = 0) {
  if (obj[min] === 1) {
    return max + 1;
  }

  return min - 1;
}
