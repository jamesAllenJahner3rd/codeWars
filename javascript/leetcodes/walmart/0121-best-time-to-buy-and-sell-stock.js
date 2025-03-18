/**121. Best Time to Buy and Sell Stock
Easy
Topics
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 Input: prices = [7,5,4,5,1]
Output: 1
Explanation: buy  day 2 and sell 3  and the max profit = 1.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104 */
/*parameter
array of prices  $00.00?
return a int profit or 0
*/
/**
 *            i-2 +  i-1 = i 
 * if I have bought, I can sell.
 * is the price  greater today or lower?
 *  start with the n and compare the previous options.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let maxDailyProfit = 0


//     function incrementDays() {
//         maxDailyProfit = prices.reduce((acc, cur, i, a) => {
//             let next = helper(i, i, acc)
//             if (next > acc) {
//                 return next
//             } else {
//                 return acc
//             }
//         }, 0);
//     };
//     function helper(i, n, acc) {
//         if (i >= prices.length) { return acc };

//         let temp = Math.max(
//     i + 1 < prices.length ? prices[i + 1] - prices[n] : 0,
//     i + 2 < prices.length ? prices[i + 2] - prices[n] : 0
// );
//         if (temp > acc) {
//             acc = temp
//         }
//         //console.log(prices[n], prices[i + 1], prices[i + 2], temp, acc)
        
//         return helper(i + 1, n, acc)
//     };
//     incrementDays();
//     return maxDailyProfit;

// };
var maxProfit = function (prices) {
    let buy = prices[0];
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < buy) {
                buy = prices[i];
            } else if (prices[i] - buy > profit) {
                profit = prices[i] - buy;
            }
        }
        return profit;
};