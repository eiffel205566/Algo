/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * https://leetcode.com/problems/insert-interval/
 * https://leetcode.com/submissions/detail/545852612/
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let lowerBoundIndex;
  let upperBoundIndex;
  let smallNew = newInterval[0];
  let largeNew = newInterval[1];
  for (let i = 0; i < intervals.length; i++) {
    if (
      smallNew <= intervals[i][0] ||
      (smallNew > intervals[i][0] && smallNew <= intervals[i][1])
    ) {
      if (lowerBoundIndex === undefined) {
        lowerBoundIndex = i;
      }
    }

    if (largeNew >= intervals[i][1] || largeNew >= intervals[i][0]) {
      upperBoundIndex = i;
    }
  }
  // return [lowerBoundIndex, upperBoundIndex];

  if (lowerBoundIndex === undefined) {
    intervals.push(newInterval);
    return intervals;
  }

  if (upperBoundIndex === undefined) {
    return [newInterval, ...intervals];
  }

  return [
    ...intervals.slice(0, lowerBoundIndex),
    [
      Math.min(
        intervals[lowerBoundIndex][0],
        intervals[lowerBoundIndex][1],
        smallNew,
        largeNew
      ),
      Math.max(
        intervals[upperBoundIndex][0],
        intervals[upperBoundIndex][1],
        smallNew,
        largeNew
      ),
    ],
    ...intervals.slice(upperBoundIndex + 1),
  ];
};
