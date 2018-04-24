/**
 * Created by Maja Miarecki
 * MissingInteger
 * lesson link: https://codility.com/programmers/lessons/2
 *
 */

function solution(A) {
    var occur = [], len = A.length, i, j;
    for (i = 0; i < len; i++) {
        if (A[i] > 0) { occur[A[i]] = true; }
    }
    var len2 = occur.length;
    for (j = 1; j < len2; j++) {
        if (!occur[j]) { return j;}
    }
    return j;
}
