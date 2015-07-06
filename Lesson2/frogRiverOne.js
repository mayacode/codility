/**
 * Created by Maja Miarecki
 * FrogRiverOne
 * lesson link: https://codility.com/programmers/lessons/1
 *
 */

function solution(X, A) {
    var unique  = [], len = A.length;
    for (var i = 0; i < len; i++){
        var j = A[i] - 1;
        if (unique[j] === undefined){
            X--;
            unique[j] = true;
        }
        if (!X){
            return i;
        }
    }
    return -1;
}
