//https://leetcode.com/problems/reverse-integer/
//submission: https://leetcode.com/submissions/detail/541212592/

var reverse = function (x) {
  let [...rev] = x.toString();
  let result = [];
  for (i = rev.length; i > -1; i--) {
    if (rev[i] !== "-") {
      result.push(rev[i]);
    }
  }
  if (x < 0) {
    return Number("-" + result.join("")) < -1 * 2 ** 31
      ? 0
      : Number("-" + result.join(""));
  } else {
    return Number(result.join("")) > 2 ** 31 - 1 ? 0 : Number(result.join(""));
  }
};
