/**
 * @param {number[][]} triangle
 * @return {number}
 * https://leetcode.com/problems/triangle/
 * https://leetcode.com/submissions/detail/550131657/
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 1) return triangle[0][0];

  let last = triangle[0]; //map for last tier;
  let current; //map for current tier;

  for (let i = 1; i < triangle.length; i++) {
    current = triangle[i];

    //loop thru current tier and increment value at current[j] by smaller of last[j - 1] or last[j]
    //provided both value exist
    for (let j = 0; j < current.length; j++) {
      if (j === 0) {
        current[j] += last[j];
      } else {
        current[j] += Math.min(
          last[j] === undefined ? last[j - 1] : last[j], //gotta check if last[j] exist!!
          last[j - 1]
        );
      }
    }

    last = current;
  }

  return Math.min(...current);
};
