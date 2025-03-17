/**70. Climbing Stairs
Easy
Topics
Companies
Hint
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
 */
/**
 * param number int
 return number Int
3  1,1,1, OR 1,2 OR 2,1
2  1,1 OR 2
1 1
4  1,1,1,1 2,1,1, 2,2 1,2,1 1,1,2 
5 1,1,1,1,1 1,1,1,2 1,1,2,1 1,2,1,1 2,1,1,1 2,2,1 2,1,2 1,2,2

LET A  SUMMER MEMO
LET  I OR I+1
LET  STOP IF SUM  =>4
IF 4 AND ONE TO MEMO
RETURN IT ARRAY IS IN THE MEMO
 */
var climbStairs = function(n) {
    let distinctClimbs = {}; // Memoization object
    
    function helper(i) {
        // If already computed, return the value
        if (i in distinctClimbs) {
            return distinctClimbs[i];
        }
        
        // Base cases
        if (i > n) {
            return 0; // No valid way to climb
        }
        if (i === n) {
            return 1; // Exactly reached the top
        }
        
        // Recursive case: Sum of ways for (i+1) and (i+2)
        distinctClimbs[i] = helper(i + 1) + helper(i + 2);
        return distinctClimbs[i];
    }
    
    return helper(0); // Start at step 0
};
