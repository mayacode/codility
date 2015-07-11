/**
 * Created by Maja Miarecki
 * MaxCounters
 * lesson link: https://codility.com/programmers/lessons/2
 *
 */

function solution(N, A) {
    var len = A.length, i, j, k, max = 0, base = 0, B = [];

    for (k = 0; k < N; k++) {
        B[k] = 0;
    }

    for (i = 0; i < len; i++) {
        var e = A[i];
        if (e > 0){
            if (e <= N) {
                if (B[e - 1] < base) B[e - 1] = base;
                B[e - 1]++;
                if (B[e - 1] > max) { max = B[e - 1]; }
            } else {
                base = max;
            }
        }
    }

    for (j = 0; j < N; j++) {
        if (B[j] < base) B[j] = base;
    }
    return B;
}
