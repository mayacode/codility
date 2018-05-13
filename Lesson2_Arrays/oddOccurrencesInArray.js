/**
 * Maja Miarecki codility solution
 * https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 */

function solution(A) {
  let withoutPair = {};
  const max = A.length;
  for (let i = 0; i < max; i++) {
    const value = A[i];
    if (withoutPair[value] === undefined) {
      withoutPair[value] = i;
    } else {
      delete withoutPair[value];
    }
  }
  return parseInt(Object.keys(withoutPair)[0], 10);
}
