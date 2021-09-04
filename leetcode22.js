/**
 * @param {number} n
 * @return {string[]}
 * https://leetcode.com/problems/generate-parentheses/
 * https://leetcode.com/submissions/detail/549501724/
 */
var generateParenthesis = function (n) {
  let map = [[""], ["()"]];

  if (!map[n] === undefined) {
    return map[n];
  }

  for (let i = 2; i < n + 1; i++) {
    let temp = [...map[i - 1]];
    let result = [];
    for (let each of temp) {
      for (let i = 0; i < each.length; i++) {
        let newBracket =
          each.substr(0, i) + "()" + each.substr(i, each.length - i);
        if (!result.includes(newBracket)) {
          result.push(newBracket);
        }
      }
    }
    map.push(result);
  }

  return map[n];
};
