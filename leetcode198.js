/** 198 https://leetcode.com/problems/house-robber/
 * https://leetcode.com/submissions/detail/565313726/
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let map = [];
  let max = nums[0];

  nums.forEach((value, index) => {
    if (index < 2) {
      if (value > max) max = value;
      map[index] = max;
    } else {
      let nextValue = map[index - 2] + value;
      if (nextValue > max) {
        max = nextValue;
        map[index] = nextValue;
      } else {
        map[index] = max;
      }
    }
  });

  return map.pop();
};
