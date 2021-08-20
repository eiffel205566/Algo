//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
*/
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};
