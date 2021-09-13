/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/jump-game-ii/
 * https://leetcode.com/submissions/detail/553925077/
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;

  let maxReach = 0;
  let map = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length - 1; i++) {
    //dead end, skip
    if (nums[i] === 0) {
      continue;
    }

    let maxLanding = i + nums[i];

    //reached the end
    if (maxReach >= nums.length - 1) {
      return map[i];
    }

    //can reach end for next step
    if (maxLanding >= nums.length - 1) {
      return map[i] + 1;
    }

    //update map, only update value at index where index greater than previous maxReach
    if (maxReach < maxLanding) {
      //if maxLanding is greater than maxReach, update map
      let temp = Array(maxLanding - maxReach).fill(map[i] + 1); //temp is the temporary array contain minimum step
      map.splice(maxReach + 1, maxLanding - maxReach + 1, ...temp); //update map with map[i] + 1 which is the minimum steps needed
      maxReach = maxLanding; //update maxReach
    }
  }
};
