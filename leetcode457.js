/* 
https://leetcode.com/submissions/detail/543726599/
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let letterMap = Array.from(s).reduce((prev, cur) => {
    if (cur in prev) {
      prev[cur]++;
      return prev;
    } else {
      prev[cur] = 1;
      return prev;
    }
  }, {});

  let letters = Object.entries(letterMap).sort((a, b) => {
    return b[1] - a[1];
  });

  let result = "";
  letters.forEach(([letter, counter]) => {
    for (let i = 0; i < counter; i++) {
      result += letter;
    }
  });

  return result;
};
