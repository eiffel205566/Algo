/** leetcode 121
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.com/submissions/detail/560955378/
 *
 */
var maxProfit = function (prices) {
  let low = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > low) {
      maxProfit = prices[i] - low > maxProfit ? prices[i] - low : maxProfit;
    }

    if (prices[i] < low) {
      low = prices[i];
    }
  }

  return maxProfit;
};
