/* 
My not so great wiggle sort II: leetcode 324
https://leetcode.com/submissions/detail/540180332/

https://leetcode.com/problems/wiggle-sort-ii/

*/

var wiggleSort = function (nums) {
  //initally sort the array
  nums = nums.sort((a, b) => {
    return a - b;
  });

  //chunk initial array up to left and right where left.length === right.length when nums.lenght is even or left.length = right.length + 1 when nums.length is odd
  let left = nums.slice(
    0,
    nums.length % 2 === 0
      ? Math.floor(nums.length / 2)
      : Math.floor(nums.length / 2) + 1
  );
  let right = nums.slice(
    nums.length % 2 === 0
      ? Math.floor(nums.length / 2)
      : Math.floor(nums.length / 2) + 1
  );

  //running a loop to overwrite each odd index with value from right at i
  //which we can guarantee nums[i] is greater than its neighbour index i - 1 / i + 1
  for (let i = 0; i < left.length; i++) {
    nums[i * 2] = left[i];
    if (right[i] !== undefined) {
      nums[i * 2 + 1] = right[i];
    }
  }

  //the next section deal with the edge case such as [4,5,5,6]
  //idea is to find case where nums[i] === nums[i - 1] exist
  //if exist (indicated by fail === true), grab the index at k
  //and swap nums.slice(0,k) and nums.slice(k)
  //question ask to sort in-place
  let fail = false;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j - 1] === nums[j]) {
      fail = true;
      break;
    }
  }

  if (fail) {
    left = nums.slice(0, j);
    right = nums.slice(j);

    for (let k = 0; k < nums.length; k++) {
      nums[k] = k < right.length ? right[k] : left[k - right.length];
    }
  }
};
