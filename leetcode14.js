/**
 * @param {string[]} strs
 * @return {string}
 * https://leetcode.com/submissions/detail/720055555/
 * beat 82%
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  let mid = 1;

  const utils = () => {
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(strs[0].substring(0, mid))) {
        return false;
      }
    }

    result = strs[0].substring(0, mid);
  };

  while (mid <= strs[0].length) {
    if (utils() === false) {
      break;
    }
    mid++;
  }

  return result;
};
