/**
 * Created by Maja Miarecki
 * PassingCars
 * lesson link: https://codility.com/programmers/lessons/3
 *
 */

function solution(A) {
    var len = A.length, i, sum = 0, pairs = 0;
    var start = A.indexOf(0);
    for (i = start; i < len; i++) {
        var e = A[i];
        if (e === 0) {
            pairs++;
        } else {
            sum += pairs;
            if (sum > 1000000000) return -1;
        }
    }
    return sum;
}
