/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    const startIndex = nums.indexOf(target);
    const lastIndex = nums.lastIndexOf(target);
    const diff = lastIndex - startIndex;

    if (diff > 1) {
      nums.splice(startIndex + 2, diff - 1);
      i = startIndex + 2;
    }
  }
};
