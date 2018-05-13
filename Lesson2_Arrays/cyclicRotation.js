/**
 * Maja Miarecki codility solution
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */

function solution(A, K) {
  const max = A.length;
  const mod = K %max;
  if (mod) {
    let result = [];
    for (let i = 0; i < max; i++) {
      const index = i + mod;
      if (index < max) {
        result[index] = A[i];
      } else {
        result[index - max] = A[i];
      }
    }
    return result;
  }
  return A;
}
