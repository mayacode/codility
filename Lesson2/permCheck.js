/**
 * Created by Maja Miarecki
 * PermCheck
 * lesson link: https://codility.com/programmers/lessons/2
 *
 */

function solution(A) {
    var sum = 0, numbers = {}, i;

    for (i = 0; i < A.length; i++) {
        var a = A[i];
        sum += a;
        if (numbers[a] === 1) {
            return 0;
        } else {
            numbers[a] = 1;
        }
    }

    var n = A.length, sum_n = (n * (n + 1)) / 2,
    difference = sum_n - sum;

    if (difference !== 0) return 0;
    return 1;
}
