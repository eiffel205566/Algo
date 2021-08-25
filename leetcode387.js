/**
 * https://leetcode.com/submissions/detail/543739879/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = Array.from(s).reduce((prev, cur) => {
    if (cur in prev) {
      prev[cur]++;
      return prev;
    } else {
      prev[cur] = 1;
      return prev;
    }
  }, {});

  let letter = null;
  for (let each in map) {
    if (map[each] === 1) {
      letter = each;
      break;
    }
  }

  if (!letter) {
    return -1;
  } else {
    return s.indexOf(letter);
  }
};
