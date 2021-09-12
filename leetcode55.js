/** 55
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/jump-game/
 * https://leetcode.com/submissions/detail/553834947/
 */
var canJump = function (nums) {
  //edge case when length is only 1
  if (nums.length === 1) return true;

  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxReach >= nums.length - 1) return true; //when we already reached the end of array

    if (nums[i] === 0) {
      if (maxReach <= i) {
        //dead end
        return false;
      } else {
        continue;
      }
    }

    let maxJumpIndex = i + nums[i];
    if (maxJumpIndex > maxReach) {
      maxReach = maxJumpIndex;
    }
  }

  return true;
};
