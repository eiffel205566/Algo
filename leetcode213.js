/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/submissions/detail/570601522/
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  var r = function (arr) {
    let map = [];
    let max = arr[0];

    arr.forEach((value, index) => {
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
  return Math.max(r(nums.slice(0, nums.length - 1)), r(nums.slice(1)));
};
