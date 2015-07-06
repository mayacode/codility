/**
 * Created by Maja Miarecki
 *
 * TapeEquilibrium
 * lesson link: https://codility.com/programmers/lessons/1
 *
 */

function solution(A) {
    var len = A.length;

    if (A instanceof Array && len > 1) {
        var sum1 = 0, sum = 0, res = Number.MAX_VALUE;

        for (var i = 0; i < len; i++) {
            sum += A[i];
        }

        for (var i = 0; i < len - 1; i++) {
            sum1 += A[i];
            sum -= A[i];
            var diff = Math.abs(sum1 - sum);
            if (diff < res) res = diff;
        }

        return res;
    }
    return false;
}