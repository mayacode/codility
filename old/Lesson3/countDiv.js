/**
 * Created by Maja Miarecki
 * PassingCars
 * lesson link: https://codility.com/programmers/lessons/3
 *
 */

function solution(A, B, K) {
    if (B===A) {

    }
    var diff = B - A + 1;
    if (diff < K) {
        if (B === A) {}
    }
    return Math.floor(diff/K);
    //var mod = A % K;
    //var mod2 = B % K;
    //console.log(mod, mod2, res);
    //return res;
}
