/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  //[3, 5, 9];

  shifts.reduceRight((prev, curr, index) => {
    let next = prev + curr;
    shifts[index] = next;
    return next;
  }, 0);

  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letterMap = Array.from(letters).reduce((prev, curr, index) => {
    prev[curr] = index;
    return prev;
  }, {});

  let final = "";

  for (let i = 0; i < shifts.length; i++) {
    let finalIndex = (letterMap[s[i]] + shifts[i]) % 26;
    final += letters[finalIndex];
  }

  return final;
};
