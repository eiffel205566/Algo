/**
 * @param {number[]} stones
 * @return {boolean}
 * https://leetcode.com/problems/frog-jump/
 * https://leetcode.com/submissions/detail/550657960/
 */
var canCross = function (stones) {
  //initial step has to be 1 unit
  let currentK = [1]; //the jump distance in unit
  let currentRange = [1]; //the actul position, and array capture all possible position
  let final = stones[stones.length - 1]; //destination position

  if (stones[1] !== 1) return false;

  for (let i = 1; i < stones.length; i++) {
    if (currentRange.includes(final)) {
      return true;
    }

    let tempK = []; //possible jumping distance in unit
    let tempRange = []; //possible landing positions in unit
    let k = 0;

    for (let i = 0; i < currentK.length; i++) {
      k = currentK[i];
      let minusOneResult = currentRange[i] + k - 1;
      let plusOneResult = currentRange[i] + k + 1;
      if (k > 1 && minusOneResult <= final && stones.includes(minusOneResult)) {
        if (tempK.includes(k - 1) && tempRange.includes(minusOneResult)) {
        } else {
          tempK.push(k - 1);
          tempRange.push(minusOneResult);
        }
      }

      if (plusOneResult <= final && stones.includes(plusOneResult)) {
        if (tempK.includes(k + 1) && tempRange.includes(plusOneResult)) {
        } else {
          tempK.push(k + 1);
          tempRange.push(plusOneResult);
        }
      }

      if (
        currentRange[i] + k <= final &&
        stones.includes(currentRange[i] + k)
      ) {
        if (tempK.includes(k) && tempRange.includes(currentRange[i] + k)) {
        } else {
          tempK.push(k);
          tempRange.push(currentRange[i] + k);
        }
      }
    }

    if (tempRange.includes(final)) {
      return true;
    }
    currentK = [...tempK];
    currentRange = [...tempRange];
  }

  return false;
};
