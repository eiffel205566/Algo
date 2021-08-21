//https://leetcode.com/submissions/detail/541683499/
//leetcode 347

var topKFrequent = function (nums, k) {
  let map = nums.reduce((prev, cur) => {
    if (cur in prev) {
      prev[cur]++;
      return prev;
    } else {
      prev[cur] = 1;
      return prev;
    }
  }, {});

  let result = Object.entries(map).sort((a, b) => {
    return b[1] - a[1];
  });

  return result.slice(0, k).map(entry => {
    return Number(entry[0]);
  });
};
