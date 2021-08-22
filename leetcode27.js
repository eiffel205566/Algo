/* 
27. Remove Element
https://leetcode.com/problems/remove-element/
https://leetcode.com/submissions/detail/542616760/
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = nums.length - 1;
  while (i > -1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    i--;
  }

  return nums.length;
};
