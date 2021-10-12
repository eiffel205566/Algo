/**
 * @param {number} n
 * @return {number}
 * prime factor of only 2, 3, 5;
 * https://leetcode.com/submissions/detail/569788511/
 */
var nthUglyNumber = function (n) {
  let nums = {
    2: 0,
    3: 0,
    5: 0,
  };

  let arr = [1];

  if (n < 2) return 1;

  while (arr.length != n) {
    let min = Infinity;
    let theKey = undefined;
    for (let key in nums) {
      if (key * arr[nums[key]] < min) {
        min = key * arr[nums[key]];
        theKey = key;
      }
    }
    nums[theKey] += 1;

    if (!arr.includes(min)) arr.push(min);
  }

  return arr.pop();
};

var nthUglyNumber2 = function (n) {
  let nums = {
    2: 0,
    3: 0,
    5: 0,
  };

  let arr = [1];

  if (n < 2) return 1;

  while (arr.length != n) {
    let keys = [];
    // get the min by trying out all choices in nums
    let min = Math.min(...Object.keys(nums).map(key => key * arr[nums[key]]));
    // if that choice of key result a min value, then add to keys arr
    for (let key in nums) {
      if (key * arr[nums[key]] === min) keys.push(key);
    }
    // increment value by 1 where value represents index in arr;
    keys.forEach(k => (nums[k] += 1));
    arr.push(min);
  }

  return arr.pop();
};
