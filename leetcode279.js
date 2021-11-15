/**279. Perfect Squares
 * https://leetcode.com/problems/perfect-squares/
 * https://leetcode.com/submissions/detail/587586144/
 * 87.89%
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let next = 2;

  let nums = [1];

  let map = [0, 1];

  for (let i = 2; i <= n; i++) {
    let smallest = Infinity;
    // when next perfect square becomes available to be used
    if (i === next * next) {
      map.push(1);
      nums.push(next * next);
      next++;
      continue;
    }

    // loop thru nums starting with largest num;
    for (j = nums.length - 1; j > -1; j--) {
      let num = nums[j];
      let lastIndex = map[i - num];

      if (smallest > lastIndex) {
        smallest = lastIndex;
      }
    }

    map.push(smallest + 1);
  }

  return map.pop();
};
