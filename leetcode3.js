/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let pointerOne = 0;
  let pointerTwo = 0;
  let final = 0;

  for (let i = 0; i < s.length; i++) {
    pointerTwo = i; // update pointerTwo
    if (!s.substring(pointerOne, pointerTwo).includes(s[i])) {
      if (final < pointerTwo - pointerOne + 1) {
        final = pointerTwo - pointerOne + 1;
      }
    } else {
      pointerOne += s.substring(pointerOne, pointerTwo).indexOf(s[i]) + 1;
    }
  }

  return final;
};
