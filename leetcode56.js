/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * https://leetcode.com/problems/merge-intervals/
 * https://leetcode.com/submissions/detail/545772358/
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let result = intervals.reduce((prev, curr) => {
    if (prev.length === 0) {
      prev.push(curr);
      return prev;
    } else {
      //the current value: prev[prev.length - 1]
      let currentPair = prev[prev.length - 1];

      //when range has no overlapping
      if (currentPair[1] < curr[0]) {
        prev.push(curr);
        return prev;
      } else {
        // there is overlapping
        prev[prev.length - 1] = [
          Math.min(currentPair[0], currentPair[1], curr[0], curr[1]),
          Math.max(currentPair[0], currentPair[1], curr[0], curr[1]),
        ];
        return prev;
      }
    }
  }, []);
  return result;
};
