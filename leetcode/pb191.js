// 191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
   const text = n.toString(2);
   const len = text.length;
    let count = 0;

   for(let i=0; i<len; i++) {
    if (text[i] === '1') count ++;
   }
   return count;
};
