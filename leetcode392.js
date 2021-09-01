/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * https://leetcode.com/problems/is-subsequence/
 * https://leetcode.com/submissions/detail/547550853/
 */
var isSubsequence = function (s, t) {
  let flag = false;
  let index = 0;
  if (s.length === 0) return true;

  for (let i = 0; i < t.length; i++) {
    flag = false;
    if (t[i] === s[index]) {
      flag = true;
      index++;
    }

    if (index === s.length && flag === true) {
      return true;
    }
  }

  return false;
};
