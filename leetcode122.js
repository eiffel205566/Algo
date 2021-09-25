/** 122
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/submissions/detail/560970611/
 */
var maxProfit = function (prices) {
  let low = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > low) {
      profit += prices[i] > low ? prices[i] - low : 0;
      low = prices[i];
    }

    if (prices[i] < low) {
      low = prices[i];
    }
  }
  return profit;
};
