// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const len = nums.length;
  let result = nums[0];
  for (let i = 1; i < len; i++) {
    result ^= nums[i];
  }
  return result;
};
