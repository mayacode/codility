/**
 * Created by Maja Miarecki
 *
 * PermMissingElem
 * lesson link: https://codility.com/programmers/lessons/1
 *
 */

function solution(A) {
    var len = A.length, sum = 2*len + 1, i;

    for (i = len-1; i >= 0; i--) {
        sum += (i-A[i]);
    }
    return sum;
}

function solution(A) {
    var len = A.length, sum = (len + 1) * (len + 2) / 2, i;
    for (i = 0; i < len; i++) {
        sum -= A[i];
    }
    return sum;
}
