// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const len = s.length;

  let stack = [s[0]];

  for (let i = 1; i < len; i++) {
    const current = s[i];
    console.log(current);
    if (current === "(" || current === "{" || current === "[") {
      stack.push(current);
      continue;
    } else if (
      (s[i] === ")" && stack[stack.length - 1] === "(") ||
      (s[i] === "}" && stack[stack.length - 1] === "{") ||
      (s[i] === "]" && stack[stack.length - 1] === "[")
    ) {
      stack.splice(stack.length - 1);
    } else {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
};