/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let left = 0;
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    max = Math.max(max, set.size);
  }
  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));