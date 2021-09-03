/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/integer-replacement/
 * https://leetcode.com/submissions/detail/548660379/
 */
var integerReplacement = function (n) {
  let map = {};
  map[0] = 0;
  map[1] = 0;

  const inner = num => {
    if (num in map) {
      return map[num];
    } else {
      //even
      if (num % 2 === 0) {
        if (map[num / 2] === undefined) {
          inner(num / 2);
        }
        map[num] = map[num / 2] + 1;
      } else {
        //odd
        if (map[(num - 1) / 2] === undefined) {
          inner((num - 1) / 2);
        }
        if (map[(num + 1) / 2] === undefined) {
          inner((num + 1) / 2);
        }
        let min = Math.min(map[(num - 1) / 2], map[(num + 1) / 2]);
        map[num] = min + 2;
      }
    }
  };

  inner(n);
  return map[n];
};
