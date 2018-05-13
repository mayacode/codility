/**
 * Maja Miarecki codility solution
 * https://app.codility.com/programmers/lessons/1-iterations/
 */

function solution(N) {
  const arr = N.toString(2).split('');
  const max = arr.length;
  let result = 0;
  let temp = 0;
  for (let i = 0; i < max; i++) {
    const current = arr[i];
    const previous = arr[i - 1];
    if (current === '0' && (previous === '1' || temp)) {
      temp ++;
    } else if (previous === '0' && current === '1') {
      result = temp > result ? temp : result;
      temp = 0;
    }
  }
  return result;
}
