/**9. Palindrome Number
Easy
Topics
Companies
Hint
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string? */
/**
 * parmeter int
 * return boolean
 * 3553 ,true
 * 4534, false
 * 9, false
 * for loop starting at the last digit
 *  output the reversed number
 *  compare the numbers
 * return boolean
 */
/**
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let output = true
    const numAsString = x.toString()
    let numOfDigit =numAsString.length -1
    for(let i =0,j=numOfDigit; i <=j;i++,j--){
        if (numAsString[i] !== numAsString[j]){
            output = false
        }    
    }
    return output||false
};