// 69. Sqrt(x)


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1) return 1;

    let start = 1;
    let end = x;
    let mid;

    

    while(start < end) {
        mid = parseInt((start + end)/2);
        console.log(mid);
        const sqrtMid = mid ** 2;
        
        if (sqrtMid=== x) {
            return mid;
        } else if (sqrtMid > x) {
            start = mid -1;
        } else {
            end = mid + 1;
        }
    }
    return start - 1;
};
console.log(mySqrt(2));