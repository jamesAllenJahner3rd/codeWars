
 var coinChange = function(coins, amount) {
//    let fewestCoins = coins[i+1] + coin [i]
  if (amount === 0)return 0 // checks for 0 coins
  let n =coins.length //number of coin types
  if (n === 1){
   return amount % coins[0] === 0? amount/coins[0]: -1
  }//checks for one coin
 coins.sort((a,b) => a - b);// sort coins
  

 const minCoin = coins[0];// keep track of coins 
    if (amount === minCoin) return 1; // checks if the smallest coin  = the amount
    let idx = 1;// setting an index
    let gcdVal = minCoin; //greatest common divisor value is set to the smallest coin

    // Loop through coins while the index < the number of coin types AND the amount is >= the current coin’s value.
   
    while (idx < n && amount >= coins[idx]) { // as long as the index < the number of coin types AND the amount is >= the current coins' value
        if (amount === coins[idx]) return 1; // check if the amount is  = to the current coins' value: answer would be 1
        gcdVal = gcd(coins[idx], gcdVal); // trigger the function Greatest common divisor Setting this to the remainder of coins[idx]/ gcdVal
        coins[idx] -= minCoin; // subtract the smallest coin form the current coin's value.
        idx++;//increase the index by one
    }
    if (amount % gcdVal !== 0) return -1;

    const minVal = Math.floor((amount - 1) / (coins[idx - 1] + minCoin)) + 1;
    const maxVal = Math.floor(amount / minCoin); // Upper bound for the number of coins.

    // Loop through possible coin combinations within calculated bounds.

    for (let i = minVal; i <= maxVal; i++) {
        if (findCombination(coins, 1, idx - 1, amount - i * minCoin, i)) {
            return i; // Return the minimum number of coins needed.

        }
    }
    return -1; // If no valid combination is found, return -1.

};

function findCombination(coins, left, right, target, maxCoins) {
    if (target === 0) return true;
    if (target < coins[left] || Math.floor(target / coins[right]) > maxCoins) return false;
    if (target % coins[right] === 0) return true;
    if (left === right) return false;
    // Loop through possible coin combinations until a valid solution is found.
   
    for (let k = Math.floor(target / coins[right]) + 1; k--;) {
        if (findCombination(coins, left, right - 1, target - k * coins[right], maxCoins - k)) {
            return true;
        }
    }
    return false;// Return false if no valid combination is found.
}


function gcd(a, b) {
    while (b !== 0) { // aslong as the gcdVal isn't  0 
        let temp = b;
        b = a % b; // set the GcdVal to the remainder of the current Coins' value / GcdVal
        a = temp;//  the current Coins' value is set to the old GcdVal
    }
    return a;// return the new current Coins' value
}
 coinChange([1,2,5], 11)
 /**322. Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104 */
/** 
 * amount/ coins[i] give me a total coinage
 * a%coins[i] what's left
 * // Checks if the amount is zero, meaning no coins are needed.  
// note the Number of coin types.  
// If there's only one coin type, check if it evenly divides the amount.  
// Sort coins in ascending order.  
// Keep track of the smallest coin.  
// Checks if the smallest coin equals the amount.  
// Setting an index.  
// Greatest common divisor value is set to the smallest coin.  
// Loop through coins while the index < the number of coin types AND the amount is >= the current coin’s value.  
// Check if the amount is equal to the current coin’s value—answer would be 1.  
// Trigger the function for the greatest common divisor. Set this to the remainder of coins[idx] / gcdVal.  
// Subtract the smallest coin from the current coin's value.  
// If the amount isn't a multiple of the gcd, it's impossible to form the total.  
// Lower bound for the number of coins.  
// Upper bound for the number of coins.  
// Loop through possible coin combinations within calculated bounds.  
// Return the minimum number of coins needed.  
// If no valid combination is found, return -1.  

// If the target amount is reached, return true.  
// If the target is too small or too large, return false.  
// If the target is divisible by the largest coin, return true.  
// If there's only one coin left to check, return false.  
// Loop through possible coin combinations until a valid solution is found.  
// Return false if no valid combination is found.  

// As long as gcdVal isn’t zero.  
// Set gcdVal to the remainder of the current coin’s value / gcdVal.  
// Set the current coin’s value to the old gcdVal.  
// Return the new current coin’s value.  

FUNCTION coinChange(coins, amount):
    IF amount == 0:
        RETURN 0  // Checks if the amount is zero, meaning no coins are needed.

    SET n = length of coins  // Number of coin types.

    IF n == 1:
        RETURN amount / coins[0] IF amount % coins[0] == 0 ELSE -1
        // If there's only one coin type, check if it evenly divides the amount.

    SORT coins in ascending order  // Sort coins.

    SET minCoin = coins[0]  // Keep track of the smallest coin.

    IF amount == minCoin:
        RETURN 1  // Checks if the smallest coin equals the amount.

    SET idx = 1  // Setting an index.
    SET gcdVal = minCoin  // Greatest common divisor value is set to the smallest coin.

    WHILE idx < n AND amount >= coins[idx]:
        IF amount == coins[idx]:
            RETURN 1  // Check if the amount is equal to the current coin’s value—answer would be 1.

        SET gcdVal = gcd(coins[idx], gcdVal)  // Trigger the function for the greatest common divisor.
        SET coins[idx] = coins[idx] - minCoin  // Subtract the smallest coin from the current coin's value.
        INCREMENT idx

    IF amount % gcdVal != 0:
        RETURN -1  // If the amount isn't a multiple of the gcd, it's impossible to form the total.

    SET minVal = FLOOR((amount - 1) / (coins[idx - 1] + minCoin)) + 1  // Lower bound for the number of coins.
    SET maxVal = FLOOR(amount / minCoin)  // Upper bound for the number of coins.

    FOR i FROM minVal TO maxVal:
        IF findCombination(coins, 1, idx - 1, amount - i * minCoin, i):
            RETURN i  // Return the minimum number of coins needed.

    RETURN -1  // If no valid combination is found, return -1.


FUNCTION findCombination(coins, left, right, target, maxCoins):
    IF target == 0:
        RETURN true  // If the target amount is reached, return true.
    
    IF target < coins[left] OR FLOOR(target / coins[right]) > maxCoins:
        RETURN false  // If the target is too small or too large, return false.
    
    IF target % coins[right] == 0:
        RETURN true  // If the target is divisible by the largest coin, return true.
    
    IF left == right:
        RETURN false  // If there's only one coin left to check, return false.

    FOR k FROM FLOOR(target / coins[right]) + 1 DOWN TO 0:
        IF findCombination(coins, left, right - 1, target - k * coins[right], maxCoins - k):
            RETURN true  // Loop through possible coin combinations until a valid solution is found.

    RETURN false  // Return false if no valid combination is found.


FUNCTION gcd(a, b):
    WHILE b != 0:
        SET temp = b
        SET b = a % b  // Set gcdVal to the remainder of the current coin’s value / gcdVal.
        SET a = temp  // Set the current coin’s value to the old gcdVal.

    RETURN a  // Return the new current coin’s value.



 * */
