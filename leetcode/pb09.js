// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let targetText = x.toString();
  const len = targetText.length;

  targetText.length;
  const mid = Math.floor(len / 2);

  const left = targetText.substring(0, mid);
  const right = targetText.substring(len % 2 === 0 ? mid : mid + 1);

  if (left === right.split("").reverse().join("")) return true;
  return false;
};

console.log(isPalindrome(11));
