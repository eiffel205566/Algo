/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 * https://leetcode.com/problems/slowest-key/
 * https://leetcode.com/submissions/detail/550376218/
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let maxDuration = 0;
  let maxLetter = "1"; //cheese with the fact that any letter is greater than string version of numeric 1;
  let last = 0;

  for (let i = 0; i < releaseTimes.length; i++) {
    //new duration longer than previous duration, update maxDuration and maxLetter
    if (releaseTimes[i] - last > maxDuration) {
      maxDuration = releaseTimes[i] - last;
      maxLetter = keysPressed[i];
    }

    //new duration same as maxDuration, do lexi comparison of maxLetter and current letter
    if (releaseTimes[i] - last === maxDuration) {
      maxLetter = keysPressed[i] > maxLetter ? keysPressed[i] : maxLetter;
    }

    last = releaseTimes[i];
  }

  return maxLetter;
};
