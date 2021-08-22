//leetcode 378
//i'm pretty shamed that slow as it is can pass and beat 78% submission
//https://leetcode.com/submissions/detail/542494550/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let result = [];
  matrix.forEach(v => {
    result.push(...v);
  });
  result.sort((a, b) => {
    return a - b;
  });
  return result[k - 1];
};
